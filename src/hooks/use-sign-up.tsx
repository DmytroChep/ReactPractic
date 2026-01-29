import { useState } from "react";
import { IPost, IPostCreation } from "../components/Post/post-types";
import { IUser, IUserLogin, IUserReg } from "../shared/types";

export function useSignUp(UserBody: IUserReg) {
  const [user, setUser] = useState<IUser>();
  const [error, setError] = useState<string | null>(null);

  async function signUp() {
    try {
      const response = await fetch(`http://127.0.0.1:8000/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            body: UserBody
        })});

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "server error");
      }

      const data = await response.json();
      setUser(data);
      return data
    } catch (err: any) {
      setError(err.message);
      console.log("server error", err.message);
    }
  }

  return { signUp, user, error };
}