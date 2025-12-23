import { useEffect, useState } from "react";
import { IPost } from "../components/Post/post-types";

export function usePosts() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    

    useEffect(() => {
        async function getAllPosts() {
            try {
                setIsLoaded(false)
                const response = await fetch(`http://127.0.0.1:8000/posts`);
                const data = await response.json();
                setPosts(data); 
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            } finally{
                setIsLoaded(true)
            }
        }
        getAllPosts();
    }, []);

    return {posts, isLoaded};
}