import { useState, useEffect, useContext } from "react";
import { useLikePost } from "./use-like-post";
import { useUnlikePost } from "./use-unlike-post";
import { UserContext } from "../context/user-context";

export function useLikeOrUnlike(postId: number, setLikesCount: (likesCount: number) => void, likesCount: number) {
  const [isLiked, setIsLiked] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { like } = useLikePost(postId);
  const { unlike } = useUnlikePost(postId);

  const userContextData = useContext(UserContext)

  const token = userContextData?.token

  const toggleLike = async () => {
    try {
      if (isLiked) {
        await unlike();
        setIsLiked(false);
        setLikesCount(likesCount - 1)
      } else {
        await like();
        setIsLiked(true);
        setLikesCount(likesCount + 1)
      }
    } catch (err: any) {
      setError("can not like");
    }
  };

  useEffect(() => {
    async function checkInitialStatus() {
      try {
        const response = await fetch(`http://127.0.0.1:8000/posts/isLiked/${postId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
        const data = await response.json();
        
        console.log(data)
        setIsLiked(data); 
      } catch (err: any) {
        setError("status loading error");
      }
    }

    checkInitialStatus();
  }, []);
  
  return { isLiked, toggleLike, error };
}