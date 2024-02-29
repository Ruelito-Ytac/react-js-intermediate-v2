import { useContext } from "react";
import TasksContext from "./tasksContext";
import useAuthStore from "../auth/auth_store";

const useTaskList = () => useContext(TasksContext);

const TaskList = () => {
    const { task_list, dispatch } = useTaskList();
    const { username } = useAuthStore();

    return (
        <>
            <span>Current User: { username }</span>
            <button type="button" onClick={ () => dispatch({ type: "ADD", task: { id: Math.floor(Math.random() * 1000), title: "test" } }) }>Add Task</button>
            <ul>
                { task_list?.map((task_item, task_index) => (
                    <li key={ task_index + 1 }>ID: { task_item.id } TITLE: { task_item.title } <button type="button" onClick={ () => dispatch({ type: "DELETE", taskId: task_item.id }) }>Delete</button></li>
                )) }
            </ul>
        </>
    )
}

export default TaskList