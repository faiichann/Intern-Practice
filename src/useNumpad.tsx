import { useCallback, useEffect, useMemo, useState } from 'react';

export const useNumpad = () => {
    const [input, setInput] = useState<string>(" ");
    const [answer, setAnswer] = useState<number>(0);

    const handleClick =  useCallback((e) =>{
        setInput(e.target.value);
        setInput((prev : string) => input + prev);
        console.log(input)
    },[input])

    const handleClear =  useCallback(() =>{
        setInput('');
        setAnswer(0);
    },[])

    const handleAnswer = useCallback(() =>{
        setAnswer(eval(input));
    },[input])

    useEffect(() => {
        console.log(input)
        console.log(answer)
    },[input,answer])

    const Numpad = useMemo(() =>
    {
        return<div>
            <h4>Input: {input}</h4>
            <button value="0" onClick={handleClick}>0</button>
            <button value="1" onClick={handleClick}>1</button>
            <button value="2" onClick={handleClick}>2</button>
            <button value="3" onClick={handleClick}>3</button>
            <button value="4" onClick={handleClick}>4</button>
            <button value="5" onClick={handleClick}>5</button>
            <button value="6" onClick={handleClick}>6</button>
            <button value="7" onClick={handleClick}>7</button>
            <button value="8" onClick={handleClick}>8</button>
            <button value="9" onClick={handleClick}>9</button><br/>
            <button value="+" onClick={handleClick}>+</button>
            <button value="-" onClick={handleClick}>-</button>
            <button value="*" onClick={handleClick}>x</button>
            <button value="/" onClick={handleClick}>/</button><br/>
            <button onClick={handleClear}>Ac</button>
            <button onClick={handleAnswer}>=</button>
        </div>
    },[handleClick, input, handleAnswer, handleClear])

    return{Numpad, handleClick, input, answer, handleAnswer, handleClear}
}