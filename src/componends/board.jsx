import Square from './squares';
import { useState } from 'react'; // use for rendring

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [IsNext, setIsNext] = useState(false);
  const handleSquareClick = clickPosition => {
    if (squares[clickPosition]) {
      return;
    }
    setSquares(currentSuare => {
      return currentSuare.map((squarevalue, position) => {
        if (clickPosition == position) {
          return IsNext ? 'X' : 'O';
        }
        return squarevalue;
      });
    });
    setIsNext(currentIsNext => !currentIsNext); // for flipping the state
  };

  const renderSquare = position => {
    return (
      <Square
        value={squares[position]}
        onclick={() => handleSquareClick(position)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
export default Board;
