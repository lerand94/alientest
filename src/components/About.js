import classes from "./About.module.css";
import Title from "./Title";

import back from "../assets/back3.png";
import alien from "../assets/about-back.png";
import Wrapper from "./UI/Wrapper";
import ico from "../assets/about-ico.svg";

const About = () => {
  return (
    <section
      className={classes.about}
      style={{ backgroundImage: `url(${back})` }}
      id="about"
    >
      <Title text="ALIEN GANG 51" ico={ico} />
      <Wrapper>
        <div className={classes.desc}>
          <p className={classes.text}>
            Alien gang 5151 – unique NFTs which make you slightly closer to the
            image of a perfect mom’s friend’s son.
            <br />
            <br />
            Well, ordinary skin nerd, it’s time to tell you what’s going on and
            who we are.
            <br />
            <br />
            Okay, first of all, if you’re reading this, you are interested in
            the project or you’re one of those weird guys who have always
            thought that some strange things are happening in Area 51. And if
            you’ve thought so congratulations! You were right.
            <br />
            <br />
            Yeah. All this time we’ve been sitting in a bunker, smoking weed,
            flexing, and chilling. But suddenly we’ve got a signal from our moon
            base. It was a command to enlighten ordinary skin nerds and to give
            them some good stuff to take the masks off.
            <br />
            <br />
            Plan for universe domination always starts with small things. So, we
            offer our NFTs to ensure that when the forking space annihilator
            crap starts, you’ll survive. Hurry up! Only 5151 lucky (bastards)
            will get through the ultra-galactic gang-bang.
            <br />
            <br />
            In addition, our space gang guarantees a lot of cool crap, but there
            are too many narratives. Go down and look at the roadmap. Be
            careful. Sometimes what you see is different from reality. (here
            could’ve been jokes about dicks and Earth mothers but who needs it?
            <br />
            <br />
          </p>
          <img src={alien} className={classes.img} />
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
