import { useState } from "react";
import "./stylecounter.css";

function CounterCheck() {

  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1)
  }

  const handleDec = () => {
    setCount(count - 1)
  }

  return (
    <>
        <div className="container">
            <h1 className="number">{count}</h1>
        </div>

        <div className="btns-container">
            <button onClick={handleInc} className="inc">+</button>
            <button onClick={handleDec} className="dec">-</button>
        </div>
    </>
  )}

export default CounterCheck