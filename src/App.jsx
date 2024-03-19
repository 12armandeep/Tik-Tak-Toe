import './style.scss';
import { useState } from 'react';
import Board from './componends/board';
import { calculateWinner } from './winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [IsNext, setIsNext] = useState(false);

  const winner = calculateWinner(squares);
  const nextPlayer = IsNext ? 'X' : 'O';
  const startMessage = winner
    ? `Winner is ${winner}`
    : `Next player is ${nextPlayer}`;

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
  // let [counter, setcounter] = useState(1);
  // const onbtn = () => {
  //   setcounter(counter + 1);
  // setcounter(currentCounter =>{
  //   return currentCounter +1;
  //});

  return (
    <div className="app">
      <h2>{startMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
