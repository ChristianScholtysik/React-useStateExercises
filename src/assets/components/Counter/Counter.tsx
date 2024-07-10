import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="counter-wrapper">
      <div className="counter">
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default Counter;
