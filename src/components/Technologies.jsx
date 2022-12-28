import React from "react";
import classes from "./Technologies.module.css";

function Techs(props) {
  return (
    <div
      className={`technologies ${classes.techCard} ${
        props.animate ? "reveal" : ""
      }`}
    >
      <img
        src={require(`../assets/images/Technologies/${props.url}`)}
        alt={props.url}
      />
      <h4>{props.tech}</h4>
    </div>
  );
}
export default Techs;
