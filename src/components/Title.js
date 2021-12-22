import classes from "./Title.module.css";
const Title = (props) => {
  return (
    <h2 className={classes.title}>
      {props.ico && <img src={props.ico} className={classes.ico} />}{" "}
      {props.text}
    </h2>
  );
};

export default Title;
