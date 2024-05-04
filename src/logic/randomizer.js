import {
  sudokuMaxNum,
  width,
  height,
  easy,
  medium,
  hard,
  smallerParentWidth,
  smallerParentHeight,
  possibleValues,
  heightInTermsOfSmallerParents,
  widthInTermsOfSmallerParents
} from "../App";

const randomizer = (difficulty) => {
  let noOfCells = width * height;
  const setOfPossibleNumbers = new Set(possibleValues);
  //   const preSetNumbers = [];
  let preSetNumbers = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => 0)
  );
  let noOfNumbers = 0;

  if (difficulty === "easy") {
    noOfNumbers = easy;
  } else if (difficulty === "medium") {
    noOfNumbers = medium;
  } else if (difficulty === "hard") {
    noOfNumbers = hard;
  } else {
  }

  //   for (const i in noOfNumbers) {
  //     while (true) {
  //       //   const row = Math.random() * width;
  //       //   const column = Math.random() * height;

  //       //   const value = Math.random() * sudokuMaxNum + 1;

  //       //   let uniqueInAtleastTwoProps = true;
  //       //   for (const j in preSetNumbers) {
  //       //     if (preSetNumbers[j].row === row) {
  //       //       if (
  //       //         !(
  //       //           preSetNumbers[j].column !== column &&
  //       //           preSetNumbers[j].value !== value
  //       //         )
  //       //       ) {
  //       //         uniqueInAtleastTwoProps = false;
  //       //         break;
  //       //       }
  //       //     } else if (preSetNumbers[j].column === column) {
  //       //       if (
  //       //         !(preSetNumbers[j].row !== row && preSetNumbers[j].value !== value)
  //       //       ) {
  //       //         uniqueInAtleastTwoProps = false;
  //       //         break;
  //       //       }
  //       //     } else if (preSetNumbers[j].value === value) {
  //       //       if (
  //       //         !(
  //       //           preSetNumbers[j].column !== column && preSetNumbers[j].row !== row
  //       //         )
  //       //       ) {
  //       //         uniqueInAtleastTwoProps = false;
  //       //         break;
  //       //       }
  //       //     } else {
  //       //     }
  //       //   }

  //       if (uniqueInAtleastTwoProps) {
  //         preSetNumbers.push({ row: row, column: column, value: value });
  //         break;
  //       }
  //     }
  //   }
  let appa = 0;

  for (let j = 0; j < noOfCells; j++) {
    appa++;
    // console.log(j);
    let unique = false;
    // while (!unique) {
      let broke = false;

      let row; // 0-indexed
      let column;
      let value;
      let smallerParentRow;
      let smallerParentColumn;

      // if (j < noOfNumbers) {
      // if (j < Math.floor((width * height) / 2) + 1) {
      //   // half of the grid placement is random
      //   row = Math.floor(Math.random() * width); // 0-indexed
      //   column = Math.floor(Math.random() * height); // 0-indexed
      //   value = Math.floor(Math.random() * sudokuMaxNum) + 1; //1-indexed
      //   smallerParentRow = Math.floor(row / smallerParentWidth); // 0-indexed
      //   smallerParentColumn = Math.floor(column / smallerParentHeight); // 0-indexed
      //   // console.log(findColumn(preSetNumbers, row));
      //   console.log(findValue(row, column, preSetNumbers, setOfPossibleNumbers))
      // } else
       {
        row = Math.floor(Math.random() * height); // 0-indexed
        while (!preSetNumbers[row].includes(0)){
          row = Math.floor(Math.random() * height);
        }
        column = findColumn(preSetNumbers, row);
        // console.log(row); // 0-indexed
        // console.log(column); // 0-indexed
        const valueAndBacktrack = findValue(row, column, preSetNumbers, setOfPossibleNumbers);
        value = valueAndBacktrack[0];
        const backtrack1 = valueAndBacktrack[1];
        const backtrack2 = valueAndBacktrack[2];
                  // console.log("backy: " + backtrack1);
                  // console.log("backy: " + backtrack2);
                  // console.log("jjjjjjjj: " + j);

        if (backtrack1 && backtrack2) {
          // noOfCells = noOfCells + 2;
          j -= 2;
          // appa++;
          // console.log("appa")
          // console.log(appa)
          // console.log("jjjjjjjj: " + j)
        } else if ((backtrack1 && !backtrack2) || (!backtrack1 && backtrack2)) {
          // noOfCells = noOfCells + 1;
          j--;
          // console.log("jjjjjjjj: " + j);

        } else {
        }
        // console.log("value:  " + value)
        // value = Math.floor(Math.random() * sudokuMaxNum) + 1; //1-indexed
        //1-indexed
        smallerParentRow = Math.floor(row / smallerParentWidth); // 0-indexed
        smallerParentColumn = Math.floor(column / smallerParentHeight);
        
        console.log(preSetNumbers[row][column]);
        preSetNumbers[row][column] = value;
        unique = true;
        if (appa === 500){
          j = -1;
          preSetNumbers = Array.from({ length: height }, () =>
            Array.from({ length: width }, () => 0)
          );
          appa = 0;
        }
        // continue;// 0-indexed
      }
      // if (!preSetNumbers[row].includes(value)) {
      //   if (preSetNumbers[row][column] === 0) {
      //     for (const k in preSetNumbers) {
      //       if (preSetNumbers[k][column] === value) {
      //         broke = true;
      //         break;
      //       }
      //     }

      //     if (!broke) {
      //       const rowWhereItStarts = smallerParentRow * smallerParentWidth;
      //       const columnWhereItStarts =
      //         smallerParentColumn * smallerParentHeight;
      //       for (
      //         let i = rowWhereItStarts;
      //         i < rowWhereItStarts + smallerParentHeight;
      //         i++
      //       ) {
      //         for (
      //           let j = columnWhereItStarts;
      //           j < columnWhereItStarts + smallerParentWidth;
      //           j++
      //         ) {
      //           if (preSetNumbers[i][j] === value) {
      //             broke = true;
      //             break;
      //           }
      //         }
      //         if (broke) {
      //           break;
      //         }
      //       }

      //       if (!broke) {
      //         preSetNumbers[row][column] = value;
      //         unique = true;
      //       }
      //     }
      //   }
      // }
    // }
  }
  let numbersThatPlayerSees = [];
  for (let i = 0; i < preSetNumbers.length; i++){
    numbersThatPlayerSees.push([]);
    numbersThatPlayerSees[i] = [...preSetNumbers[i]];
  }
  // const numbersThatPlayerSees = Array.from([...preSetNumbers]);
  for (let i = 0; i < noOfCells - noOfNumbers; i++){
    const randomRow = Math.floor(Math.random() * preSetNumbers.length);
    const randomColumn = Math.floor(Math.random() * preSetNumbers[randomRow].length);
    numbersThatPlayerSees[randomRow][randomColumn] = 0;
  }
  // console.log("appppppa:   " + appa)
  // console.log("appppppa:   " + noOfCells)
  // try using 2D arrays?
  return [numbersThatPlayerSees, preSetNumbers];
};

const union = (setA, setB) => {
  const setC = new Set(setA);
  for (const i of setB) {
    setC.add(i);
  }
  return setC;
};

const complement = (universalSet, subset) => {
  const comp = [];
  for (const i of universalSet) {
    if (!subset.has(i)) {
      comp.push(i);
    }
  }

  return comp;
};

const findValue = (row, column, preSetNumbers, setOfPossibleNumbers) => {
  const rowSet = new Set(preSetNumbers[row]);
  let colSet = new Set();
    const smallerParentSet = new Set();

    const startingColumn =
      Math.floor(column / smallerParentWidth) * smallerParentWidth;
    const startingRow =
      Math.floor(row / smallerParentHeight) * smallerParentHeight;

  // for (let i = 0; i < height; i++) {
  //   rows.push(new Set(preSetNumbers[i])); ////
  // }

  // for (let i = 0; i < width; i++) {
    let arr = [];
    for (let j = 0; j < height; j++) {
      arr.push(preSetNumbers[j][column]);
    }
    colSet = new Set(arr);
  // }

  for (let i = startingRow; i < startingRow + 3; i++) {
    for (let j = startingColumn; j < startingColumn + 3; j++) {
      // if (preSetNumbers[i][j] === complem[rand]) {
      //   preSetNumbers[i][j] = 0;
      // }
      // smallerParentSet.add(preSetNumbers[j][i]);
      smallerParentSet.add(preSetNumbers[i][j]);
      // smallerParentSet.add(0);
    }
  }

//   console.log(rows[row])
//   console.log(cols[column]);
//   console.log(column);
//   console.log("smalllllllllllllllll")
// console.log(smallerParents);
  const un = union(rowSet, colSet);
  const uni = union(un, smallerParentSet);
  let complem = complement(setOfPossibleNumbers, uni);

  if (complem.length === 0){ 
      let rand = Math.floor(Math.random() * complem.length);
      let a = false;
      let b = false;
    if (rowSet.size <= colSet.size ){
      complem = complement(setOfPossibleNumbers, rowSet);
      // const complemCol = complement(setOfPossibleNumbers, cols[column]);
      rand = Math.floor(Math.random() * complem.length);
      // const randCol = Math.floor(Math.random() * complemCol.length);
    // const startingColumn = Math.floor(column / smallerParentWidth) * smallerParentWidth;
    // const startingRow = Math.floor(row / smallerParentHeight) * smallerParentHeight;

      for (let i = 0; i < preSetNumbers.length; i++){
        if (preSetNumbers[i][column] === complem[rand]){
          // console.log("preSetNumbers[i][column]");
          // console.log(preSetNumbers[i][column]);
          // console.log(i);
          // console.log(column);
          // console.log(complem[rand]);
          preSetNumbers[i][column] = 0;
          a = true;
        }
      }

      for (let i = startingRow; i < startingRow + 3; i++){
        for (let j = startingColumn; j < startingColumn + 3; j++){
          if (preSetNumbers[i][j] === complem[rand]){
            // console.log("preSetNumbers[i][j]");
            // console.log(preSetNumbers[i][j]);
            // console.log(i);
            // console.log(j);
            // console.log(complem[rand]);
            preSetNumbers[i][j] = 0;
            b = true;
          }
        }
      }
    } else {
      complem = complement(setOfPossibleNumbers, colSet);
      rand = Math.floor(Math.random() * complem.length);

      // const startingColumn =
      //   Math.floor(column / smallerParentWidth) * smallerParentWidth;
      // const startingRow =
      //   Math.floor(row / smallerParentHeight) * smallerParentHeight;

      for (let i = 0; i < preSetNumbers[row].length; i++) {
        if (preSetNumbers[row][i] === complem[rand]) {
          // console.log("preSetNumbers[row][i]");
          // console.log(preSetNumbers[row][i]);
          // console.log(row);
          // console.log(i);
          // console.log(complem[rand]);
          preSetNumbers[row][i] = 0;
          a = true;
        }
      }

      for (let i = startingRow; i < startingRow + 3; i++) {
        for (let j = startingColumn; j < startingColumn + 3; j++) {
          if (preSetNumbers[i][j] === complem[rand]) {
            // console.log("preSetNumbers[i][j]");
            // console.log(preSetNumbers[i][j]);
            // console.log(i);
            // console.log(j);
            // console.log(complem[rand]);
            preSetNumbers[i][j] = 0;
            b = true;
          }
        }
      }
    }

    return [complem[rand], a, b];
  }

  const randIndex = Math.floor(Math.random() * complem.length);

  return [complem[randIndex], false, false];
};

const findColumn = (preSetNumbers, row) => {
  const zerosIndex = [];
  for (let k = 0; k < preSetNumbers[row].length; k++) {
    if (preSetNumbers[row][k] === 0) {
      zerosIndex.push(k);
    }
  }
  return zerosIndex[Math.floor(Math.random() * zerosIndex.length)];
};

export default randomizer;
