import { createContext, useState, useEffect, type ReactNode } from "react";
import { IPost } from "../components/Post/post-types";
import { usePosts } from "../hooks/use-posts";

interface IPostContext {
    filteredPosts: IPost[],
    setFilteredPostsFunc: (posts: IPost[]) => void,
    isLoaded: boolean
}

export const PostContext = createContext<IPostContext | null>(null);

interface IPostContextProps{
    children: ReactNode
}

export function PostContextProvider(props: IPostContextProps) {
    const { posts, isLoaded } = usePosts();
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
    const {children} = props

    useEffect(() => {
        if (isLoaded) {
            setFilteredPosts(posts);
        }
    }, [posts, isLoaded]);

    function setFilteredPostsFunc(newPosts: IPost[]) {
        setFilteredPosts(newPosts);
    }
    
    return (
        <PostContext.Provider value={{ filteredPosts, setFilteredPostsFunc, isLoaded }}>
            {children}
        </PostContext.Provider>    
    );
}