import { ITag } from "../components/Filter/filter-types"
import { IPost } from "../components/Post/post-types"

export const tags: ITag[] = [
    {
        id: 1,
        name: "nature"
    },
    {
        id: 2,
        name: "nature2"
    },
    {
        id: 3,
        name: "nature3"
    },
    {
        id: 4,
        name: "nature4"
    },
    {
        id: 4,
        name: "nature5"
    },
    {
        id: 4,
        name: "nature6"
    },
    {
        id: 4,
        name: "nature7"
    },
]
export const posts: IPost[] = [
    {
        id: 1,
        title: "hello", 
        description: "my first post",
        image: "https://image.png",
        likesCount: 123,
        createdById: 1,
        tags: [tags[0], tags[2]]
    },
    {
        id: 2,
        title: "helloo",
        description: "my first posttt",
        image: "https://image.png",
        likesCount: 123,
        createdById: 1,
        tags: [tags[3], tags[2]]
    },
    {
        id: 3,
        title: "hellooo",
        description: "my first postttt",
        image: "https://image.png",
        likesCount: 123,
        createdById: 1,
        tags: [tags[1]]
    }
]

export const isLogin = true