import classes from "./ConnectButton.module.css";
import ico from "../../assets/lttl1.svg";
// import { $accountNamePretty, $isConnected, connectAccountFx } from '../../stores/web3';
// import { useStore } from 'effector-react';

const ConnectButton = (params) => {
  // const isConnected = useStore($isConnected);
  // const accountName = useStore($accountNamePretty);
  // if (isConnected) {
  //     return <button className={classes.connect}>{accountName}</button>;
  // }

  // return (<button className={classes.connect} onClick={()=>connectAccountFx()}>connect wallet</button>)
  return (
    <button className={classes.connect}>
      Connect Wallet
      <img src={ico} />
    </button>
  );
};

export default ConnectButton;
