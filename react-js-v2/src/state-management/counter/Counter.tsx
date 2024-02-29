import React, { useReducer } from "react";

interface Action {
    type: "INCREMENT" | "DECREMENT" | "RESET";
}
const counterReducer = (state: number, action: Action): number => {
    if(action.type === "INCREMENT") return state + 1;
    if(action.type === "DECREMENT") return (state > 0) ? state - 1 : 0;
    if(action.type === "RESET") return 0;

    return state;
} 

const Counter = () => {
    const [value, dispatch] = useReducer(counterReducer, 0);

    return (
        <React.Fragment>
            <span>Counter: { value }</span>

            <button type="button" onClick={ () => dispatch({ type: "INCREMENT" }) }>Increment</button>
            <button type="button" onClick={ () => dispatch({ type: "DECREMENT" }) }>Decrement</button>
            <button type="button" onClick={ () => dispatch({ type: "RESET" }) }>Reset</button>
        </React.Fragment>
    )
}

export default Counter