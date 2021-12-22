import classes from "./Timer.module.css";
import { useEffect, useState } from "react";

const calculateTime = (targetDate) => {
  const difference = +targetDate - +new Date();
  const padNumber = (num) => num.toString().padStart(2, "0");

  if (difference > 0) {
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / 1000 / 60) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    // return `${padNumber(days)}d:${padNumber(hours)}h:${padNumber(
    //   minutes
    // )}m:${padNumber(seconds)}s`;
    return {
      days: padNumber(days),
      hours: padNumber(hours),
      minutes: padNumber(minutes),
      seconds: padNumber(seconds),
    };
  }

  return "Starting soon";
};

const Timer = () => {
  const targetDate = new Date("2021-12-23T20:59:59.000Z");
  const [timeLeft, setTimeLeft] = useState(calculateTime(targetDate));
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTime(targetDate));
    }, 1000);
  }, [timeLeft]);

  return (
    <div className={classes.timer}>
      <div className={classes.day}>
        <span className={classes.dayNum}>{timeLeft.days}</span>{" "}
        <span className={classes.dayText}>Days</span>
      </div>
      <div className={classes.other}>
        <span className={classes.otherNum}>
          {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
        </span>
        <div className={classes.otherText}>
          <span>Hours</span>
          <span>Minutes</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
