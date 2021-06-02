import { useCallback, useEffect, useMemo, useState } from 'react';

export const useNumpad = () => {
    const [input, setInput] = useState<string>("");
    const [answer, setAnser] = useState<number>(0);

    const handleClick =  useCallback(() =>{
        setInput((prev : string) => prev + input);
        console.log(input)
    },[input])

    const handleClear =  useCallback(() =>{
        setInput('');
    },[])

    const handleAnswer = useCallback(() =>{
        setAnser(eval(input));
    },[input])

    useEffect(() => {
        console.log(input)
    },[input])

    const Numpad = useMemo(() =>
    {
        return<div>
            <h4>Input: {input}</h4>
            <button value={input} onClick={handleClick}>1</button>
        </div>
    },[])

    return{Numpad, handleClick}
}