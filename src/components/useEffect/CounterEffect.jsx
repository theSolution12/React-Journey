import { useEffect } from "react";
import { useState } from "react";

const CounterEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted or updated");
    }, [count]);

    const increment = () => {
        setCount(prev => prev + 1);
    }

    const decrement = () => {
        setCount(prev => prev - 1);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}


export default CounterEffect;