import classes from "./Roadmap.module.css";
import Title from "./Title";
import back from "../assets/back4.png";
import ico from "../assets/roadmap-ico.svg";
import Wrapper from "./UI/Wrapper";

const Roadmap = () => {
  return (
    <section
      className={classes.roadmap}
      style={{ backgroundImage: `url(${back})` }}
      id="roadmap"
    >
      <Title text="Roadmap" ico={ico} />
      <Wrapper>
        <ul className={classes.roadmapList}>
          <li className={classes.left}>
            <div className={classes.half}>
              <div className={classes.roadmapListNum}>1</div>
              <div
                className={[
                  classes.roadmapListBox,
                  classes.roadmapListBoxLeft,
                ].join(" ")}
              >
                <h3>10%</h3>
                <p>
                  All the Area 51 inhabitants will be identified on Alpha Art,
                  Magic Eden and Solanart service
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className={classes.half}>
              <div
                className={[
                  classes.roadmapListBox,
                  classes.roadmapListBoxRight,
                  classes.maliRelative,
                  classes.maliyPos,
                ].join(" ")}
              >
                <h3>20%</h3>
                <p>3 lucky guys will get 3 space asses and 51 SOL, to boost</p>
                <div className={classes.maliy1}></div>
              </div>
              <div className={classes.roadmapListNum}>2</div>
            </div>
          </li>
          <li className={classes.left}>
            <div className={classes.half}>
              <div className={classes.roadmapListNum}>3</div>
              <div
                className={[
                  classes.roadmapListBox,
                  classes.roadmapListBoxLeft,
                ].join(" ")}
              >
                <h3>30%</h3>
                <p>We’ll allow choosing community in discord voting</p>
              </div>
            </div>
          </li>
          <li>
            <div className={classes.half}>
              <div
                className={[
                  classes.roadmapListBox,
                  classes.roadmapListBoxRight,
                ].join(" ")}
              >
                <h3>40%</h3>
                <p>500 SOL to community wallet for the DAO system</p>
              </div>
              <div className={classes.roadmapListNum}>4</div>
            </div>
          </li>
          <li className={classes.left}>
            <div className={classes.half}>
              <div className={classes.roadmapListNum}>5</div>
              <div
                className={[
                  classes.roadmapListBox,
                  classes.roadmapListBoxLeft,
                  classes.maliRelative,
                ].join(" ")}
              >
                <h3>60%</h3>
                <p>Alien Gang 5151 merch manufacturing</p>
                <div className={classes.maliy2}></div>
              </div>
            </div>
          </li>
          <li>
            <div className={classes.half}>
              <div
                className={[
                  classes.roadmapListBox,
                  classes.roadmapListBoxRight,
                ].join(" ")}
              >
                <h3>80%</h3>
                <p>Making of unique images for top-holders</p>
              </div>
              <div className={classes.roadmapListNum}>6</div>
            </div>
          </li>
          <li className={classes.left}>
            <div className={classes.half}>
              <div className={classes.roadmapListNum}>7</div>
              <div
                className={[
                  classes.roadmapListBox,
                  classes.roadmapListBoxLeft,
                ].join(" ")}
              >
                <h3>100%</h3>
                <p>
                  Transfer 2000 SOL to Community wallet to create the PTE game
                </p>
              </div>
            </div>
          </li>
        </ul>
      </Wrapper>
    </section>
  );
};

export default Roadmap;
