import React from "react";
import { render } from "react-dom";
import CellField from "./components/Field/CellField";

render (
    <>
    <CellField
      clickMe={() => console.log("Click cell")}
      xCount={3} yCount={3}
    />
  </>,
  document.getElementById("root")
);