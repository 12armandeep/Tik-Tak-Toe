// eslint-disable-next-line react/prop-types
const Square = ({ value, onclick, iswinningSquare }) => {
  return (
    <button
      type="button"
      className={`square ${value === 'X' ? 'text-green' : 'text-orange'} ${iswinningSquare ? 'winning' : ''}`}
      onClick={onclick}
    >
      {value}
    </button>
  );
};
export default Square;
