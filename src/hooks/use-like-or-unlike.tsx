import { useState, useEffect } from "react";
import { useLikePost } from "./use-like-post";
import { useUnlikePost } from "./use-unlike-post";

export function useLikeOrUnlike(postId: number, setLikesCount: (likesCount: number) => void, likesCount: number) {
  const [isLiked, setIsLiked] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { like } = useLikePost(postId);
  const { unlike } = useUnlikePost(postId);

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
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhdGE6aW1hZ2UvanAzMTEyMzYyNmVnO2Jhc2UyMTIzMTI2NCwvOWovNEFBZHdmcXdmUVNrWkpSZ0JBQUQvQGdtYWlsLmNvbTEiLCJpYXQiOjE3NjgyMzA1MzMsImV4cCI6MTc2ODgzNTMzM30.5oY5T_vIBRLKgIqzBU9RMN2YZFXr5jKPffye_DJl4A8"
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