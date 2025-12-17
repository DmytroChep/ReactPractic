import { IPost } from "../../components/Post/post-types";

export interface IEntryProps{
    find: string, 
    setFilteredPosts: (posts: IPost[]) => void
}