import classes from "./Team.module.css";
import Title from "./Title";
import ico from "../assets/team-ico.svg";
import dev from "../assets/dev.png";
import dev1 from "../assets/dev1.png";
import dev2 from "../assets/dev2.png";
import dev3 from "../assets/dev3.png";
import dev4 from "../assets/dev4.png";
import Wrapper from "./UI/Wrapper";

const Team = () => {
  return (
    <section className={classes.team} id="team">
      <Title text="Team" ico={ico} />
      <Wrapper>
        <ul className={classes.teamList}>
          <li className={classes.teamListItem}>
            <img src={dev1} />
            <div>
              <span className={classes.name}>Alien_Tseh</span>
              <span className={classes.position}>Design Artist</span>
            </div>
          </li>
          <li className={classes.teamListItem}>
            <img src={dev2} />
            <div>
              <span className={classes.name}>Alien_Poirot</span>
              <span className={classes.position}>Developer</span>
            </div>
          </li>
          <li className={classes.teamListItem}>
            <img src={dev3} />
            <div>
              <span className={classes.name}>Alien_Drake</span>
              <span className={classes.position}>Marketing</span>
            </div>
          </li>
          <li className={classes.teamListItem}>
            <img src={dev4} />
            <div>
              <span className={classes.name}>Alien_OG</span>
              <span className={classes.position}>Communication Manager</span>
            </div>
          </li>
        </ul>
      </Wrapper>
    </section>
  );
};

export default Team;
