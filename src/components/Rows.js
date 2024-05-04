import Cell from "./Cell";
import { height, width } from "../App";
import { useEffect, useState } from "react";

const Row = ({ index }) => {
  const cellsPerRow = new Array(width).fill(0);

  return (
    <div className="row">
      {cellsPerRow.map((x, i) => (
        <Cell key={i} index={i} row={index}/>
      ))}
    </div>
  );
};

export default Row;
