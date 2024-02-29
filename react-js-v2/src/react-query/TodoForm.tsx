import { useRef } from "react"
import useAddTodo from "./hooks/useAddTodo";

const TodoForm = () => {
    const todo_input_ref = useRef<HTMLInputElement>(null);

    const addTodo = useAddTodo(() => {
        if (todo_input_ref.current) todo_input_ref.current.value = "";
    });

    return (
        <>
            { addTodo.error && <span>{ addTodo.error.message }</span> }
            <form onSubmit={ event => {
                event.preventDefault();

                if(todo_input_ref && todo_input_ref.current?.value){
                    addTodo.mutate({
                        id: Math.floor(Math.random() * 10000),
                        title: todo_input_ref.current?.value,
                        completed: false,
                        userId: 1
                    });
                }
            } }>
                <input type="text" ref={ todo_input_ref } />
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default TodoForm