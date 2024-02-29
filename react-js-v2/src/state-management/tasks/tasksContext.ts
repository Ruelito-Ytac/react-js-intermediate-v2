import React, { Dispatch } from "react";
import { TaskAction, TaskData } from "./TaskProvider";

interface TasksContextType {
    task_list: TaskData[];
    dispatch: Dispatch<TaskAction>
}

const TasksContext = React.createContext<TasksContextType>({ } as TasksContextType);

export default TasksContext;