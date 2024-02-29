import React from "react";
import usePostList from "./hooks/usePostList";

const PostList = () => {
    const page_size = 10;
    const { data, isLoading, error, fetchNextPage, isFetchingNextPage, hasNextPage } = usePostList({ page_size });

    return (
        <React.Fragment>
            { isLoading && <span>Loading...</span> }
            { error && <span>{ error.message }</span> }

            <ul>
                { data?.pages.map((post_list, post_index) => 
                    <React.Fragment key={ post_index }>
                        { post_list.map((post_item) => 
                            <li key={ post_item.id }>{ post_item.title }</li>
                        ) }
                    </React.Fragment>
                ) }
            </ul>

            <button type="button" disabled={ !hasNextPage || isFetchingNextPage } onClick={ () => fetchNextPage() }>{ !hasNextPage ? "Nothing to show" : "Load More" }</button>
        </React.Fragment>
    )
}

export default PostList