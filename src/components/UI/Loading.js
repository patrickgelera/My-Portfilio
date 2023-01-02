import React from "react";
import classes from "./Loading.module.css";

const Loading = (props) => {
  return (
    <div className={classes.loadingContainer}>
      <h1>Hi! Welcome to my Portfolio!</h1>
      <div className={classes.loadingBar}>
        <div
          className={classes.loadingFill}
          style={{ width: `${props.loaded}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
