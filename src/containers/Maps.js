import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

let Maps = props => {
  return (
    <div>
      {props.data.map((item, i) => {
        return <li key={i}> {item.properties.title}</li>;
      })}
    </div>
  );
};

export default Quakes;
