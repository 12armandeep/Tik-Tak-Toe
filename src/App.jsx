import './style.scss';
import { useState } from 'react';
import Board from './componends/board';
import { calculateWinner } from './winner';
import History from './componends/history';
import StatusMessage from './componends/statusmessage';
const NEW_GAME = [{ squares: Array(9).fill(null), IsNext: false }];
function App() {
  const [history, setHistory] = useState(NEW_GAME);
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [IsNext, setIsNext] = useState(false);
  const [currentMove, setCurrentMove] = useState(0);
  const gameBoard = history[currentMove];

  const { winner, winningSquare } = calculateWinner(gameBoard.squares);
  console.log({ history, currentMove });

  const handleSquareClick = clickPosition => {
    if (gameBoard.squares[clickPosition] || winner) {
      return;
    }
    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;
      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];
      const nextSquareState = lastGamingState.squares.map(
        (squarevalue, position) => {
          if (clickPosition == position) {
            return lastGamingState.IsNext ? 'X' : 'O';
          }
          return squarevalue;
        }
      );
      // eslint-disable-next-line no-unused-vars
      const moveTo = move => {
        setCurrentMove(move);
      };

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;

      return base.concat({
        squares: nextSquareState,
        IsNext: !lastGamingState.IsNext,
      });
    });
    setCurrentMove(move => move + 1);
  };

  const onNewGameStart = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  //   setIsNext(currentIsNext => !currentIsNext); // for flipping the state
  // };
  // let [counter, setcounter] = useState(1);
  // const onbtn = () => {
  //   setcounter(counter + 1);
  // setcounter(currentCounter =>{
  //   return currentCounter +1;

  return (
    <div className="app">
      <StatusMessage winner={winner} gameBoard={gameBoard} />
      <Board
        squares={gameBoard.squares}
        handleSquareClick={handleSquareClick}
        winningSquare={winningSquare}
      />
      <button
        type="button"
        onClick={onNewGameStart}
        className={`btn-reset ${winner ? 'active' : ''} `}
      >
        Start New Game
      </button>
      <h2>Current Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}
export default App;
