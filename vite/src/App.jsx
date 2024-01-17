import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterCard from "./components/CounterCard";

function App() {
  const INIT_COUNT = 0;
  const INIT_COUNT2 = Math.floor(Math.random() * 10);
  const INIT_COUNT3 = Math.floor(Math.random() * 10);

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

  const createResetFunction = (setCount, initialValue) => () =>
    setCount(() => initialValue);

  const reset = createResetFunction(setCount, INIT_COUNT);
  const reset2 = createResetFunction(setCount2, INIT_COUNT);
  const reset3 = createResetFunction(setCount3, INIT_COUNT);
  const reset4 = createResetFunction(setCount4, INIT_COUNT);
  const reset5 = createResetFunction(setCount5, INIT_COUNT2);
  const reset6 = createResetFunction(setCount6, INIT_COUNT3);

  return (
    <>
      <CounterCard
        label="count is (+1)"
        value={count}
        onIncrement={increment}
        onReset={reset}
      />
      <CounterCard
        label="count is (+5)"
        value={count2}
        onIncrement={incrementPlusFive}
        onReset={reset2}
      />
      <CounterCard
        label="count is (-1)"
        value={count3}
        onIncrement={substraction}
        onReset={reset3}
      />
      <CounterCard
        label="count is (-5)"
        value={count4}
        onIncrement={substractionMinusFive}
        onReset={reset4}
      />
      <CounterCard
        label="count is (x2)"
        value={count5}
        onIncrement={multiplication}
        onReset={reset5}
      />
      <CounterCard
        label="count is (/2)"
        value={count6}
        onIncrement={division}
        onReset={reset6}
      />
    </>
  );
}

export default App;
