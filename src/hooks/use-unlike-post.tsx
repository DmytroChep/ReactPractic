import { useState } from "react";

export function useUnlikePost(postId: number) {
  const [status, setStatus] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  async function unlike() {
    try {
      const response = await fetch(`http://127.0.0.1:8000/posts/${postId}/likes`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhdGE6aW1hZ2UvanAzMTEyMzYyNmVnO2Jhc2UyMTIzMTI2NCwvOWovNEFBZHdmcXdmUVNrWkpSZ0JBQUQvQGdtYWlsLmNvbTEiLCJpYXQiOjE3Njc0NzAyNjksImV4cCI6MTc2ODA3NTA2OX0.pVTrHE5lpCNPKLB-JUDIBe2-Q-J3VB8lV_rMfoDwe7w"
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

  return { unlike, status, error };
}