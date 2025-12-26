import { IUser } from "../../shared/types";

export interface IComment {
    id: number,
    body:string,
    user: IUser,
    createdAt: string,
    postId: number,
    userId: number

}