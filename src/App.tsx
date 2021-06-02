import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import{ useEffect, useState, useMemo, useCallback} from 'react';
import Home from 'Home';
import { useCounter } from 'useCounter';
import { useCalculate } from 'useCalculate';

function App() {
  // const [homeName, setHomeName] = useState<string>("");
  // const [isClose, setIsClose] = useState<boolean>(false);
  // console.log("isClose :" , isClose);

  // useEffect(() => {
  //   console.log("render");
  //   // setHomeName("Is use effect" + (Math.random() * 99).toFixed(2));
  // },[total]);

  // const [count, setCount] = useState(0);

  // // console.log("re-render parent component");

  // const resetCount = useCallback(() => {
  //   setCount((prevCount) => prevCount + 1);
  // }, []);

  const renderList = useMemo(() => {
    console.log("render list");
    return Array.from(Array(100).keys()).map((key) => {
      return <h3 key={key}> {key} count</h3>;
    });
  }, []);

  const { increaseCounter, decreaseCounter, resetCounter, counterComponet} = useCounter();

  const { Calculator, plusCal, minusCal, multiplyCal,
     DivideCal, resetCal,AllCalculator, EvalCal } = useCalculate();
  return (
    <div className="App">
      {/* <Home window={5} homeName={homeName}/>
      <input onChange={({ target: { value } }) => setHomeName(value)}/>
     <button onClick={() => setIsClose((prevState) => !prevState)}>Close</button>

     <hr/> */}
     <div style={{alignItems: 'center'}}>
     <h1 className="rgb">โปรแกรมคิดเลข </h1>
     { Calculator }
     <button onClick={plusCal}>Plus</button> 
     <button onClick={minusCal}>Minus</button> 
     <button onClick={multiplyCal}>Multiply</button> 
     <button onClick={DivideCal}>Divide</button> 
     <button onClick={resetCal}>Reset</button> 
     </div>
     <hr/>
     
     {counterComponet}
     <button onClick = {increaseCounter}> + </button>
     <button onClick = {decreaseCounter}> - </button>
     <button onClick = {resetCounter}> reset </button>
     <hr/>
     {AllCalculator}
     <button onClick = {EvalCal}> Calculate </button>
     {/* <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        count ++++
      </button>
      <h2>Count: {count}</h2>
      {renderList} */}
      <>
        {/* <h2>Count: {count}</h2>
         */}
        {/* <button onClick={decrement}>-</button>
        <button onClick={incrementOtherCounter}>not use useCallback</button> */}
      </>

      
    </div>
  );
}

export default App;
