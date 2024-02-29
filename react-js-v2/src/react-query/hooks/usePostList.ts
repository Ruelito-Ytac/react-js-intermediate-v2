import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { PostListData } from "../../types/post_list_data";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

interface PostQuery {
    page_size: number
}

const usePostList = (query: PostQuery) => {
    const fetchPostList = async ({ pageParam = 1 }) =>
        axiosInstance.get<PostListData[]>("/posts", {
            params: {
                _start: (pageParam - 1) * query.page_size,
                _limit: query.page_size
            }
        })
            .then(res => res.data);

    return useInfiniteQuery({
        queryKey: ["posts", query],
        queryFn: fetchPostList,
        initialPageParam: 1,
        staleTime: 1 * 60 * 1000,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        }
    });
}

export default usePostList;