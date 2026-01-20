import { IUser } from "../../shared/types";
import { IComment } from "../Comments/comments.types";
import { ITag } from "../Filter/filter-types";

export interface IPost {    
    id: number;
    title: string;
    description: string;
    image: string;
    likesCount: number;
    createdBy: IUser;
    tags?: ITag[];
    comments?: IComment[];
}

export interface IPostCreation {
    id?: number;
    title: string;
    description: string;
    image: string;
    likesCount: number;
    tags?: ITag[];
    comments?: IComment[];
}


export interface IPostUpdate {
    id?: number;
    title?: string;
    description?: string;
    image?: string;
    likesCount?: number;
    createdBy?: IUser;
    tags?: ITag[];
    comments?: IComment[];
}