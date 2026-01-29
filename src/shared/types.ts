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

export interface IUser {
  id: number,
  firstName: string,
  secondName: string,
  email: string,
  avatar: string,
  password: string,
  isAdmin: boolean
}

export interface IUserReg{
    firstName: string,
    secondName: string,
    email: string,
    password: string,
}

export interface IUserLogin{
    email: string,
    password: string,
}

export const isLogin = true
