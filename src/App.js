import "./App.css";
import Board from "./components/Board";
import Difficulty from "./components/Difficulty";
import randomizer from "./logic/randomizer";
import solve from "./logic/solve";

const width = 9;
const height = 9;

const smallerParentWidth = 3;
const smallerParentHeight = 3;

const widthInTermsOfSmallerParents = width / smallerParentWidth;
const heightInTermsOfSmallerParents = height / smallerParentHeight;

const difficulty = "easy";

const easy = 40;
const medium = 30;
const hard = 20;

const possibleValues = Array.from({ length: width }, (_, index) => index + 1);

const sudokuMaxNum = possibleValues[possibleValues.length - 1];
const sudokuMinNum = possibleValues[0];

const [cellsAndValues, solvedSudoku] = randomizer(difficulty);
console.log("cellsAndValues:   ");
console.log(cellsAndValues);
console.log(solvedSudoku);

// solve(cellsAndValues);

function App() {
  return (
    <div className="app">
      {/* <Difficulty /> */}
      <Board />
    </div>
  );
}

export default App;
export {
  width,
  height,
  easy,
  medium,
  hard,
  sudokuMaxNum,
  sudokuMinNum,
  cellsAndValues,
  smallerParentHeight,
  smallerParentWidth,
  widthInTermsOfSmallerParents,
  heightInTermsOfSmallerParents,
  possibleValues,
  solvedSudoku,
};
