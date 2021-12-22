import classes from "./Join.module.css";
import discord from "../assets/discord.svg";
import back from "../assets/join-back.png";

const Join = () => {
  return (
    <section
      className={classes.join}
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className={classes.inviteBox}>
        <span>Solana community is never going to be the same.</span>
        <a
          href="https://discord.gg/aliengang51"
          target="_blank"
          className={classes.link}
        >
          Join discord <img src={discord} />
        </a>
      </div>
    </section>
  );
};

export default Join;
