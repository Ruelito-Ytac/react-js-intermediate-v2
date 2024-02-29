import React from "react";
import useCounterStore from "./store";


const Counter = () => {
    const { counter, increment, reset, decrement } = useCounterStore();

    return (
        <React.Fragment>
            <span>Counter: { counter }</span>

            <button type="button" onClick={ () => increment() }>Increment</button>
            <button type="button" onClick={ () => decrement() }>Decrement</button>
            <button type="button" onClick={ () => reset() }>Reset</button>
        </React.Fragment>
    )
}

export default Counter