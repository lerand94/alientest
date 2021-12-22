import Socials from "../Socials";
import classes from "./Footer.module.css";

import back from "../../assets/footer-back.png";
import logo from "../../assets/logo.svg";
import Wrapper from "../UI/Wrapper";

const Footer = () => {
  return (
    <footer
      className={classes.footer}
      style={{ backgroundImage: `url(${back})` }}
    >
      <Wrapper>
        <span>All rights reserved © 2021</span>
        <img src={logo} />
        <Socials />
      </Wrapper>
    </footer>
  );
};
export default Footer;
