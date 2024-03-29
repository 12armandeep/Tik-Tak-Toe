/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => {
          return (
            <li key={index}>
              <button
                className={`btn-move ${index === currentMove ? 'active' : ''}`}
                type="button"
                onClick={() => {
                  moveTo(index);
                }}
              >
                {index === 0 ? 'Go to game start' : `Go to move #${index}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
