// import { useState } from "react";

import classes from "./Mint.module.css";
import ico from "../assets/lttl2.svg";
import alien from "../assets/mint-back.png";
import Wrapper from "./UI/Wrapper";
import Timer from "../components/Timer";

// const Mint = () => {
//   const [mintAmount, setMintAmount] = useState(25);
//   const mintAmountHandler = (event) => {
//     setMintAmount(event.target.value);
//   };
//   return (
//     <section className={classes.mint}>
//       <Wrapper>
//         <div className={classes.desc} id="mint">
//           <div>
//             <Timer />
//             <div className={classes.sliderBox}>
//               <input
//                 type="range"
//                 min="1"
//                 max={51}
//                 step="1"
//                 value={mintAmount}
//                 onChange={mintAmountHandler}
//                 className={classes.slider}
//               />
//               <span
//                 className={classes.mintValue}
//                 style={{
//                   left: mintAmount >= 49 ? "98%" : `${2 * mintAmount}%`,
//                   transform:
//                     mintAmount >= 49
//                       ? "translateX(-98%)"
//                       : `translateX(-${2 * mintAmount}%)`,
//                 }}
//               >
//                 {mintAmount}
//               </span>
//             </div>
//             <div className={classes.btnGroup}>
//               <button className={classes.mintBtn}>
//                 Mint
//                 <img src={ico} />
//               </button>
//               <span className={classes.btnText}>Public price</span>
//             </div>
//           </div>
//           <img src={alien} />
//         </div>
//       </Wrapper>
//     </section>
//   );
// };

// export default Mint;

import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "../candy-machine";

const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)``; // add your styles here

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Mint = (props: HomeProps) => {
  const [mintAmount, setMintAmount] = useState(25);
  //   const mintAmountHandler = (event) => {
  //     setMintAmount(event.target.value);
  //   };
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);

  return (
    <>
      <section className={classes.mint}>
        <Wrapper>
          <div className={classes.desc} id="mint">
            <div>
              <Timer />
              {/* <div className={classes.sliderBox}>
                <input
                  type="range"
                  min="1"
                  max={51}
                  step="1"
                  value={mintAmount}
                  //   onChange={mintAmountHandler}
                  className={classes.slider}
                />
                <span
                  className={classes.mintValue}
                  style={{
                    left: mintAmount >= 49 ? "98%" : `${2 * mintAmount}%`,
                    transform:
                      mintAmount >= 49
                        ? "translateX(-98%)"
                        : `translateX(-${2 * mintAmount}%)`,
                  }}
                >
                  {mintAmount}
                </span>
              </div> */}
              <div className={classes.btnGroup}>
                {!wallet ? (
                  <ConnectButton className={classes.mintBtnConnect}>
                    Connect Wallet
                  </ConnectButton>
                ) : (
                  <MintButton
                    disabled={isSoldOut || isMinting || !isActive}
                    onClick={onMint}
                    variant="contained"
                    className={classes.mintBtn}
                  >
                    {isSoldOut ? (
                      "SOLD OUT"
                    ) : isActive ? (
                      isMinting ? (
                        <CircularProgress />
                      ) : (
                        "MINT"
                      )
                    ) : (
                      <Countdown
                        // date={startDate}
                        date={
                          Date.now() + (props.startDate * 1000 - Date.now())
                        }
                        onMount={({ completed }) =>
                          completed && setIsActive(true)
                        }
                        onComplete={() => setIsActive(true)}
                        renderer={renderCounter}
                      />
                    )}
                  </MintButton>
                )}

                {wallet && (
                  <span className={classes.btnText}>
                    {shortenAddress(wallet.publicKey.toBase58() || "")}
                  </span>
                )}
              </div>
            </div>
            <img src={alien} />
          </div>
          <Snackbar
            open={alertState.open}
            autoHideDuration={6000}
            onClose={() => setAlertState({ ...alertState, open: false })}
          >
            <Alert
              onClose={() => setAlertState({ ...alertState, open: false })}
              severity={alertState.severity}
            >
              {alertState.message}
            </Alert>
          </Snackbar>
        </Wrapper>
      </section>
    </>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    // <CounterText>
    //   {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    // </CounterText>
    "Coming soon"
  );
};

export default Mint;
