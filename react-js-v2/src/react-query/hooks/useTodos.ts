import { useQuery } from "@tanstack/react-query";
import { TodoDataList } from "../../types/todo_data";
import { CACHE_KEY_TODOS } from "../constants";
import todoService from "../../services/todoService";

const useTodos = () => {
    return useQuery<TodoDataList[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: todoService.getAll,
        staleTime: 10 * 1000,
    });
}

export default useTodos;