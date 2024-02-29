import React from "react";
import useTodos from "./hooks/useTodos";

const TodoList = () => {
    const { data, error, isLoading } =  useTodos();

    return (
        <React.Fragment>
            { isLoading && <span>Loading...</span> }
            { error && <p>{ error.message }</p> }
            
            <ul>
                { data?.map((item, index) => (
                    <li key={ index }>{ item.title }</li>
                )) }
            </ul>
        </React.Fragment>
    )
}

export default TodoList