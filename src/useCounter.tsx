import { useCallback, useEffect, useMemo, useState } from 'react';

export const useCounter = () => {
    const [counter, setCounter] = useState<number>(0);

    const increaseCounter = useCallback(() =>{
        setCounter((prev : number) => prev + 1  )
    },[],
    )

    const decreaseCounter = useCallback(() =>{
        setCounter((prev : number) => prev - 1  )
    },[],
    )

    const resetCounter = useCallback(() =>{
        setCounter( 0 )
    },[],
    )

    const counterComponet = useMemo(() =>
    {
        return <h4>Count: {counter}</h4>
    },[counter]
    )
    useEffect(() => {
        if(counter || counter === 0 ){
            console.log("Counter :", counter)
        }
    }, [counter])

    return { counter, setCounter, increaseCounter, decreaseCounter, resetCounter, counterComponet}
}