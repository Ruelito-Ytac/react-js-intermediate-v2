import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TodoDataList } from "../../types/todo_data";
import { CACHE_KEY_TODOS } from "../constants";
import todoService from "../../services/todoService";

interface AddTodoContext {
    previousTodos: TodoDataList[]
}

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();

    return useMutation<TodoDataList, Error, TodoDataList, AddTodoContext>({
        mutationFn: todoService.post,
        onMutate: (newTodo: TodoDataList) => {
            const previousTodos = queryClient.getQueryData<TodoDataList[]>(CACHE_KEY_TODOS) || [];
            
            queryClient.setQueryData<TodoDataList[]>(CACHE_KEY_TODOS, (todos = []) => [
                newTodo,
                ...todos,
            ]);

            onAdd();

            return { previousTodos };
        },

        onSuccess: (savedTodo, newTodo) => {
            queryClient.setQueryData<TodoDataList[]>(CACHE_KEY_TODOS, (todos) => todos?.map(todo => todo === newTodo ? savedTodo : todo));
        },

        onError: (_, __, context) => {
            if (!context) return;

            queryClient.setQueryData<TodoDataList[]>(CACHE_KEY_TODOS, context.previousTodos);
        }
    });
}

export default useAddTodo;