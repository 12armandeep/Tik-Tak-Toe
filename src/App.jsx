import './style.scss';
import { useState } from 'react';
import Board from './componends/board';
import { calculateWinner } from './winner';
import StatusMessage from './componends/statusmessage';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [IsNext, setIsNext] = useState(false);

  const winner = calculateWinner(squares);

  const handleSquareClick = clickPosition => {
    if (squares[clickPosition] || winner) {
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
      <StatusMessage winner={winner} IsNext={IsNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
