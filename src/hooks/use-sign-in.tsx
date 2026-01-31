import { useState } from "react";
import { IPost, IPostCreation } from "../components/Post/post-types";
import { IUser, IUserLogin, IUserReg } from "../shared/types";
import { IFormData, ISignInForm } from "../shared/Form/Form.types";

export function useSignIn() {
  const [token, seToken] = useState<string>();
  const [error, setError] = useState<string | null>(null);

  async function signIn(UserBody: IFormData) {
    try {
        console.log(UserBody)
      const response = await fetch(`http://127.0.0.1:8000/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(UserBody)});

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "server error");
      }

      const data = await response.json();
      seToken(data);
      console.log(data)
      return data
    } catch (err: any) {
      setError(err.message);
      console.log("server error", err.message);
      throw err
    }
  }

  return { signIn, token, error };
}