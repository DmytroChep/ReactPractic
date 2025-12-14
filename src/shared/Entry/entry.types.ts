import { IPost } from "../../components/Home-with-posts/Home-types";

export interface IEntryProps{
    find: string, 
    setFilteredPosts: (posts: IPost[]) => void
}