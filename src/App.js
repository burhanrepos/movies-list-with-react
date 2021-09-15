import React from "react";
import Card from "./Card";
import SData from "./SData";

const App = () => {
  return (
    <>
      <p id="header">List of Top Five Web Series on NETFLIX</p>
      <div id="container">
        {
            SData.map(value => {
              return (
                <Card imgS={value.imgS} title={value.title} director={value.director} relDate={value.relDate} rating={value.rating} link={value.link} />
              );
            })
        }
      </div>
    </>
  );
}

export default App;
