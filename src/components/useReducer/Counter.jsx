import { initialState, reducer } from "./CounterReducer";
import { useReducer, useState } from "react";

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [payload, setPayload] = useState(0);

    return(
        <div>
            <h1>Count: {state.count}</h1>
            <label htmlFor="payload">payload</label>
            <input type="number" id="payload" onChange={(e) => setPayload(Number(e.target.value))} value={payload} />
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'incrementByAmount', payload: payload})}>Increment by payload</button>
            <button onClick={() => dispatch({type: 'decrementByAmount', payload: payload})}>Decrement by payload</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default Counter;