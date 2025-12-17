import { ReactNode } from "react";
import { IPost } from "../../components/Post/post-types";

export interface IHeader{
    setFitleredPosts?: (posts: IPost[]) => void, 
    children?: ReactNode
}