import { ReactNode, useReducer } from "react";
import TasksContext from "./tasksContext";

export interface TaskData {
    id: number;
    title: string;
}

interface AddTask {
    type: "ADD";
    task: TaskData
}

interface DeleteTask {
    type: "DELETE";
    taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const taskReducer = (task_list: TaskData[], action: TaskAction): TaskData[] => {
    switch (action.type){
        case "ADD":
            return [action.task, ...task_list]
        case "DELETE":
            return task_list?.filter(task_item => task_item.id !== action.taskId);
    }
}

interface TaskProviderProps {
    children: ReactNode;
}

const sample_task_data = [
    { id: 1, title: "Sample title 1" },
    { id: 2, title: "Sample title 2" },
    { id: 3, title: "Sample title 3" },
]

const TaskProvider = ({ children }: TaskProviderProps) => {
    const [task_list, dispatch] = useReducer(taskReducer, sample_task_data);

    return (
        <TasksContext.Provider value={{ task_list, dispatch }}>
            { children }
        </TasksContext.Provider>
    )
}

export default TaskProvider