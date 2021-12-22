import Wrapper from "../UI/Wrapper";
import HeaderNav from "./HeaderNav";
import classes from "./Header.module.css";

import logo from "../../assets/logo.svg";
import back from "../../assets/back1.png";
import ufo from "../../assets/ufo.png";
import gif from "../../assets/1.gif";
import ConnectButton from "./ConnectButton.js";
import Socials from "../Socials";

import { slide as Menu } from "react-burger-menu";

const Header = () => {
  return (
    <>
      <header style={{ backgroundImage: `url(${back})` }}>
        <Wrapper>
          <div className={classes.headerTop}>
            <img src={logo} />
            <HeaderNav />
            {/* <ConnectButton /> */}
          </div>
          <div className={classes.headerContainer}>
            <div className={classes.headerInfo}>
              <h1>5151 unique Aliens</h1>
              <p>
                Extraterrestrial NFTs directly from{" "}
                <span className={classes.accent}>Area 51</span>
                <br /> generate from more{" "}
                <span className={classes.accent}>420+</span> traits
                <br />
                <br /> <span className={classes.accent}>0.75</span> SOL on
                public sale
                <br />
                Public sale <span className={classes.accent}>23</span>rd{" "}
                December.
              </p>
              <a href="#mint" className={classes.toMint}>
                To Mint
              </a>
            </div>
            <div className={classes.ufo}>
              <img src={ufo} />
            </div>
            <div className={classes.gif}>
              <img src={gif} />
            </div>
          </div>
          <Socials />
          <Menu right pageWrapId={"page-wrap"}>
            <Socials />
            {/* <Link to="/mint">
          <span>to Mint</span>
        </Link>
        {params.mint && <ConnectButton />} */}
          </Menu>
        </Wrapper>
      </header>
    </>
  );
};

export default Header;
