import { useContext, useState } from "react";
import { UserContext } from "../context/user-context";

export function useCreateComment(postId: number, commentBody: string) {
  const [commentData, setCommentData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const userContextData = useContext(UserContext);

  const token = userContextData?.token;

  async function createComment() {
    if (!token) {
      setError("User is not authenticated");
      throw new Error("No token found");
    }

    try {
      setError(null);
      const response = await fetch(`http://127.0.0.1:8000/posts/${postId}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ body: commentBody })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "server error");
      }

      const data = await response.json();
      setCommentData(data);
      return data;
    } catch (err: any) {
      setError(err.message);
      console.log("server error", err.message);
      throw err; 
    }
  }

  return { createComment, commentData, error };
}