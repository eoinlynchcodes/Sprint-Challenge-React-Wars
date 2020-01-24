import React from "react";

const DataFrame = props => {
  console.log(props.data);

  

  return (
    <div>
      <h1>{props.data.name}</h1>
      <h1>{props.data.height}</h1>
      <h1> {props.data.hair_colour}</h1>
    </div>
  );
};

export default DataFrame;
