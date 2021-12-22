import classes from "./Socials.module.css";
import discord from "../assets/discord.svg";
import twitter from "../assets/twitter.svg";
import opensea from "../assets/opensea.svg";

const Socials = () => {
  return (
    <ul className={classes.socials}>
      <li>
        <a href="https://discord.gg/aliengang51" target="_blank">
          <img src={discord} />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/aliengang51?s=11" target="_blank">
          <img src={twitter} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
