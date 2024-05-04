import React, { useEffect, useState } from "react";
import {
  width,
  sudokuMaxNum,
  sudokuMinNum,
  cellsAndValues,
  solvedSudoku,
} from "../App";

const Cell = ({ index, row }) => {
  let id = 0;
  let lastCleanedId = 0;
  let timeouts = [];
  const val = cellsAndValues[row][index];
  const valString = val === 0 ? "" : val.toString();

  const [value, setValue] = useState(valString);
  const [classes, setClasses] = useState(
    valString === "" ? "cell" : "cell bot-numbers"
  );
  const [wrongNumber, triggerWrongNumber] = useState(false);

  const setRightBorder = () => {
    if ((index + 1) % 3 === 0 && index + 1 < width) {
      setClasses((prev) => {
        if (!prev.includes("column-3")) {
          return prev + " column-3";
        }
        return prev;
      });
    }
  };

  const setBottomBorder = () => {
    if ((row + 1) % 3 === 0 && row + 1 < width) {
      setClasses((prev) => {
        if (!prev.includes("row-3")) {
          return prev + " row-3";
        }
        return prev;
      });
    }
  };

  // const handleClick = () => {
  //   setClasses((prev) => prev + " cell-clicked");
  // };

  const handleInput = (event) => {
    const { key } = event;
    console.log(event);

    if (parseInt(key) >= sudokuMinNum && parseInt(key) <= sudokuMaxNum) {
      setValue(key);
    } else if (key === "Backspace") {
      setValue("");
    } else {
      return;
    }

    if (parseInt(key) !== solvedSudoku[row][index]) {
      setClasses((prev) => {
        if (!prev.includes("wrong-number")) {
          return prev + " wrong-number";
        }
        return prev;
      });
      triggerWrongNumber((prev) => !prev);
    } else {
      let highestId = id;
      while (id > lastCleanedId) {
        clearTimeout(id);
        id--;
        // console.log(timeouts)
      }
      lastCleanedId = highestId;
      setClasses((prev) => {
        let p = prev;
        p = p.replace(" wrong-number", "");
        return p;
      });
    }
  };


  useEffect(() => {
    setRightBorder();
    setBottomBorder();
  }, []);

  useEffect(() => {
    if (classes.includes("wrong-number")) {    
      id = setTimeout(() => {
        setClasses((prev) => {
          let p = prev;
          p = p.replace(" wrong-number", "");
          setValue("");
          return p;
        });
        console.log("000")
      }, 400);
      console.log(timeouts)
    }
  }, [wrongNumber]);

  return (
    <input
      className={classes}
      onKeyDown={valString === "" ? handleInput : () => {}}
      onChange={() => {}} // browser be bugging coz of this guy
      type="text"
      value={value}
    />
  );
};

export default Cell;
