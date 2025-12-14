import { ReactNode } from "react";
import { IPost } from "../../components/Home-with-posts/Home-types";

export interface IHeader{
    setFitleredPosts?: (posts: IPost[]) => void, 
    children?: ReactNode
}