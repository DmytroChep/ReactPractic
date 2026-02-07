import { useContext, useState } from "react";
import { IPost, IPostCreation } from "../components/Post/post-types";
import { UserContext } from "../context/user-context";

export function useCreatePost(PostBody: IPostCreation) {
  const [PostData, setPostData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const userContextData = useContext(UserContext)

  const token = userContextData?.token

  async function createPost() {
    try {
      const response = await fetch(`http://127.0.0.1:8000/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            body: PostBody
        })});

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "server error");
      }

      const data = await response.json();
      setPostData(data);
      return data
    } catch (err: any) {
      setError(err.message);
      console.log("server error", err.message);
    }
  }

  return { createPost, PostData, error };
}