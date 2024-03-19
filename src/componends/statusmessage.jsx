/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const StatusMessage = ({ winner, IsNext, squares }) => {
  const nomoveLeft = squares.every(squareValue => {
    return squareValue !== null;
  });
  const nextPlayer = IsNext ? 'X' : 'O';
  const renderStatusMessage = () => {
    if (winner) {
      return (
        <div>
          Winner is {''}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </div>
      );
    }
    if (!winner && nomoveLeft) {
      return (
        <div>
          {' '}
          <span className="text-orange">O</span> and{' '}
          <span className="text-green">X</span> tied
        </div>
      );
    }
    if (!winner && !nomoveLeft) {
      return (
        <div>
          Next player is {''}
          <span className={IsNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </div>
      );
    }
    return null;
  };
  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};
export default StatusMessage;

//when we do not want to wrap an elemet we can use react.fragment to not wrap under div at the place of div
