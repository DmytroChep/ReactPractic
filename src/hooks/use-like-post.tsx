import { useContext, useState } from "react";
import { UserContext } from "../context/user-context";

export function useLikePost(postId: number) {
  const [status, setStatus] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const userContextData = useContext(UserContext)

  const token = userContextData?.token

  async function like() {
    try {
      const response = await fetch(`http://127.0.0.1:8000/posts/${postId}/likes`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "server error");
      }

      const data = await response.json();
      setStatus(data);
    } catch (err: any) {
      setError(err.message);
      console.log("server error", err.message);
    }
  }

  return { like, status, error };
}