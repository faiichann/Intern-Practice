import { useCallback, useEffect, useMemo, useState } from 'react';

export const useCalculate = () => {
    const [num1, setNum1] = useState<number>(0);
    const [num2, setNum2] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [digitalCal, setDigitalCal ] = useState<string>("");

    const plusCal = useCallback(() =>{
        setTotal(num1+num2)
    },[num1, num2])

    const minusCal = useCallback(() =>{
        setTotal(num1-num2)
    },[num1, num2])

    const multiplyCal = useCallback(() =>{
        setTotal(num1*num2)
    },[num1, num2])

    const DivideCal = useCallback(() =>{
        setTotal(num1/num2);
    },[num1, num2])

    const resetCal = useCallback(() =>{
        setNum1(0);
        setNum2(0);
        setTotal(0)
    },[])

    const EvalCal = useCallback(() =>{
          setDigitalCal(eval(digitalCal).toFixed(2))
          console.log('Eval', digitalCal)
    },[digitalCal])

    useEffect(() =>{
        if (total){
            console.log('Total', total)
            
        }
    }, [ total, digitalCal])


    
    const Calculator = useMemo(() =>
    {
        return<div>
        <p>Number 1 : <input  value={num1} onChange={e => setNum1(+e.target.value)}/> </p> 
        <p>Number 2 : <input  value={num2} onChange={e => setNum2(+e.target.value)}/> </p>
        <h4>Cal :{num1} + {num2} </h4>
        <h4>Result : {total.toFixed(2)}</h4>
        </div>
    },[num1, num2, total])

    const AllCalculator = useMemo(() =>
    {
        return <>
        <p>Input : <input  value={digitalCal} onChange={({ target: { value } }) => setDigitalCal(value)}/> </p>
        <h4>Result : {digitalCal}</h4>
        </>
    },[digitalCal])
    return {plusCal, Calculator, minusCal, multiplyCal, DivideCal, resetCal,AllCalculator, EvalCal }
}