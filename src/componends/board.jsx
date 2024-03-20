/* eslint-disable react/prop-types */
import Square from './squares';
//import { useState } from 'react'; // use for rendring

// eslint-disable-next-line react/prop-types
const Board = ({ squares, handleSquareClick, winningSquare }) => {
  const renderSquare = position => {
    const iswinningSquare = winningSquare.includes(position);
    return (
      <Square
        value={squares[position]}
        onclick={() => handleSquareClick(position)}
        iswinningSquare={iswinningSquare}
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
