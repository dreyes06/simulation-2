import React from "react";

function House(props) {
  let { house_id, name, address, city, state, zip } = props.house;
  return (
    <div>
      <p>Property: {name}</p>
      <p>Address: {address}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Zip: {zip}</p>
      <button onClick={() => {
          console.log("button hit",house_id)
          props.deleteHouse(house_id)}}>Delete</button>
    </div>
  );
}

export default House;
