import React from "react";

const SeasonDisplay = props => {
  console.log(props.lat);
  return <div>Latitude: {props.lat}</div>;
};

export default SeasonDisplay;
