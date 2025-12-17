import { ITag } from "../Filter/filter-types";

export interface IPost {    
    id?: number;
    title: string;
    description: string;
    image: string;
    likesCount: number;
    createdById: number;
    tags?: ITag[];
}

