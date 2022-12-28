import React from "react";

function Certificates(prop) {
  return (
    <div className={`certificates ${prop.animate ? "reveal" : ""}`}>
      <img
        src={require(`../assets/images/Certificates/${prop.url}`)}
        alt={prop.cert}
      />
      <div className="certifcateDetails">
        <h4>{prop.cert}</h4>
        <h6>{prop.training}</h6>
        <p>{prop.details}</p>
      </div>
    </div>
  );
}
export default Certificates;
