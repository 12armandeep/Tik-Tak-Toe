import './style.scss';
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import Board from './componends/board';

function App() {
  let [counter, setcounter] = useState(1);
  const onbtn = () => {
    setcounter(counter + 1);
    // setcounter(currentCounter =>{
    //   return currentCounter +1;
    //});
  };
  return (
    <div className="app">
      <Board />
      <div>
        <button onClick={onbtn}>Click me plesse</button>
        <div>{counter}</div>
      </div>
    </div>
  );
}

export default App;
