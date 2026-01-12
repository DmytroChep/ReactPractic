import { useState } from "react";

export function useLikePost(postId: number) {
  const [status, setStatus] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  async function like() {
    try {
      const response = await fetch(`http://127.0.0.1:8000/posts/${postId}/likes`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhdGE6aW1hZ2UvanAzMTEyMzYyNmVnO2Jhc2UyMTIzMTI2NCwvOWovNEFBZHdmcXdmUVNrWkpSZ0JBQUQvQGdtYWlsLmNvbTEiLCJpYXQiOjE3NjgyMzA1MzMsImV4cCI6MTc2ODgzNTMzM30.5oY5T_vIBRLKgIqzBU9RMN2YZFXr5jKPffye_DJl4A8"
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