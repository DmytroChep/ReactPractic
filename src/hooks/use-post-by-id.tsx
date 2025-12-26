import { useEffect, useState } from "react"
import { IPost } from "../components/Post/post-types"
import { usePosts } from "./use-posts"

export function usePostById(postId: number){
    const [post, setPost] = useState<IPost>()
    const [error, setError] = useState(null)

    useEffect(() => {
            async function getPost(){
            try{
                const response = await fetch(`http://127.0.0.1:8000/posts/${postId}?include=likedBy&include=comments`)
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "server error");
                }

                const data = await response.json();
                setPost(data);
            } catch (err: any) {
                setError(err.message);
                console.log("server error", err.message);
            }
        }
        getPost()
    }, [])
    return {post}

} 