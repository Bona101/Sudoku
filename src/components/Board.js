import Row from "./Rows";
import { height } from "../App";

const Board = () => {
  const rows = new Array(height).fill(0);

  return (
    <div className="board">
      {rows.map((x, i) => (
        <Row key={i} index={i}/>
      ))}
    </div>
  );
};

export default Board;
