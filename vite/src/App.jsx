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

  const mathFunction = (setState, mathOperation) => {
    return () => {
      setState((operation) => mathOperation(operation));
    };
  };

  const increment = mathFunction(setCount, (count) => count + 1);
  const incrementPlusFive = mathFunction(setCount2, (count) => count + 5);
  const subtraction = mathFunction(setCount3, (count) => count - 1);
  const subtractionMinusFive = mathFunction(setCount4, (count) => count - 5);
  const multiplication = mathFunction(setCount5, (count) => count * 2);
  const division = mathFunction(setCount6, (count) => count / 2);

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
        onIncrement={subtraction}
        onReset={reset(setCount3, INIT_COUNT)}
      />
      <CounterCard
        label="count (-5) is...  "
        value={count4}
        onIncrement={subtractionMinusFive}
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
