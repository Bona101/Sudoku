import { height, heightInTermsOfSmallerParents, smallerParentHeight, smallerParentWidth, width, widthInTermsOfSmallerParents } from "../App";

const solve = (grid) => {
  const rows = [];
  const cols = [];
  const smallerParents = Array.from({ length: heightInTermsOfSmallerParents }, () =>
    Array.from({ length: widthInTermsOfSmallerParents }, () => [])
  );


  for (let i = 0; i < height; i++) {
    rows.push(new Set(grid[i]));
  }

  for (let i = 0; i < width; i++){
    let arr = [];

    for (let j = 0; j < height; j++){
        arr.push(grid[j][i]);
        
        smallerParents[Math.floor(j/smallerParentHeight)][Math.floor(i/smallerParentWidth)].push(grid[j][i]);
    }
    cols.push(new Set(arr));
  }

  // for (){

  //           const rowWhereItStarts = smallerParentRow * smallerParentWidth;
  //           const columnWhereItStarts = smallerParentColumn * smallerParentHeight;
  //           for (
  //             let i = rowWhereItStarts;
  //             i < rowWhereItStarts + smallerParentHeight;
  //             i++
  //           ) {
  //             for (
  //               let j = columnWhereItStarts;
  //               j < columnWhereItStarts + smallerParentWidth;
  //               j++
  //             ) {
  //               if (preSetNumbers[i][j] === value) {
  //                 broke = true;
  //                 break;
  //               }
  //             }
  //             if (broke) {
  //               break;
  //             }
  //           }

  //           if (!broke) {
  //             preSetNumbers[row][column] = value;
  //             unique = true;
  //           }



  // }

console.log(rows)
console.log(cols)
console.log(smallerParents)

  
};

export default solve;