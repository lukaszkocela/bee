import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const INIT_COUNT = 0;
  const INIT_COUNT2 = Math.floor(Math.random() * 10);
  const INIT_COUNT3 = Math.floor(Math.random() * 10);

  // DATA TIER
  const [count, setCount] = useState(INIT_COUNT);
  const [count2, setCount2] = useState(INIT_COUNT);
  const [count3, setCount3] = useState(INIT_COUNT);
  const [count4, setCount4] = useState(INIT_COUNT);
  const [count5, setCount5] = useState(INIT_COUNT2);
  const [count6, setCount6] = useState(INIT_COUNT3);

  // (BUSINESS) LOGIC TIER
  const increment = () => setCount((count) => count + 1);
  const incrementPlusFive = () => setCount2((count2) => count2 + 5);
  const substraction = () => setCount3((count3) => count3 - 1);
  const substractionMinusFive = () => setCount4((count4) => count4 - 5);
  const multiplication = () => setCount5((count5) => count5 * 2);
  const division = () => setCount6((count6) => count6 / 2);
  const reset = () => setCount(() => INIT_COUNT);
  const reset2 = () => setCount2(() => INIT_COUNT);
  const reset3 = () => setCount3(() => INIT_COUNT);
  const reset4 = () => setCount4(() => INIT_COUNT);
  const reset5 = () => setCount5(() => INIT_COUNT2);
  const reset6 = () => setCount6(() => INIT_COUNT3);

  // PRESENTATION TIER

  return (
    <>
      <div className="card">
        <button onClick={increment}>count is (+1){count}</button>
        <button onClick={reset}>reset</button>
      </div>
      <div className="card">
        <button onClick={incrementPlusFive}>count is (+5){count2}</button>
        <button onClick={reset2}>reset</button>
      </div>
      <div className="card">
        <button onClick={substraction}>count is (-1){count3}</button>
        <button onClick={reset3}>reset</button>
      </div>
      <div className="card">
        <button onClick={substractionMinusFive}>count is (-5){count4}</button>
        <button onClick={reset3}>reset</button>
      </div>
      <div className="card">
        <button onClick={multiplication}>count is (x2){count5}</button>
        <button onClick={reset5}>reset</button>
      </div>
      <div className="card">
        <button onClick={division}>count is (/2) {count6}</button>
        <button onClick={reset6}>reset</button>
      </div>
    </>
  );
}

export default App;
