import { TodoDataList } from "../types/todo_data";
import APIClient from "./apiClient";

export default new APIClient<TodoDataList>("/todos");