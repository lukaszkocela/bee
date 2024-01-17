import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import CounterCard from "./components/CounterCard";

function App() {
  const INIT_COUNT = 0;
  const INIT_COUNT2 = Math.floor(Math.random() * 10);
  const INIT_COUNT3 = Math.floor(Math.random() * 100);

  const [count, setCount] = useState(INIT_COUNT);
  const [count2, setCount2] = useState(INIT_COUNT);
  const [count3, setCount3] = useState(INIT_COUNT);
  const [count4, setCount4] = useState(INIT_COUNT);
  const [count5, setCount5] = useState(INIT_COUNT2);
  const [count6, setCount6] = useState(INIT_COUNT3);

  const increment = () => setCount((count) => count + 1);
  const incrementPlusFive = () => setCount2((count2) => count2 + 5);
  const substraction = () => setCount3((count3) => count3 - 1);
  const substractionMinusFive = () => setCount4((count4) => count4 - 5);
  const multiplication = () => setCount5((count5) => count5 * 2);
  const division = () => setCount6((count6) => count6 / 2);

  const reset = (setCount, initialValue) => () => setCount(() => initialValue);

  return (
    <>
      <CounterCard
        label="count (+1) is...  "
        value={count}
        onIncrement={increment}
        onReset={reset(setCount, INIT_COUNT)}
      />
      <CounterCard
        label="count (+5) is...  "
        value={count2}
        onIncrement={incrementPlusFive}
        onReset={reset(setCount2, INIT_COUNT)}
      />
      <CounterCard
        label="count (-1) is...  "
        value={count3}
        onIncrement={substraction}
        onReset={reset(setCount3, INIT_COUNT)}
      />
      <CounterCard
        label="count (-5) is...  "
        value={count4}
        onIncrement={substractionMinusFive}
        onReset={reset(setCount4, INIT_COUNT)}
      />
      <CounterCard
        label="count (x2) is...  "
        value={count5}
        onIncrement={multiplication}
        onReset={reset(setCount5, INIT_COUNT2)}
      />
      <CounterCard
        label="count (/2) is...  "
        value={count6}
        onIncrement={division}
        onReset={reset(setCount6, INIT_COUNT3)}
      />
    </>
  );
}

export default App;
