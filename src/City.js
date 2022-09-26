import React from "react";

export default function City(props) {
  return (
    <div className="City">
      <h2>
        {" "}
        In {props.value} the temperature is {props.temperature}°{" "}
      </h2>
    </div>
  );
}
