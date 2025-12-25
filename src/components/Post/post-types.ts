import { IUser } from "../../shared/types";
import { ITag } from "../Filter/filter-types";

export interface IPost {    
    id: number;
    title: string;
    description: string;
    image: string;
    likesCount: number;
    createdBy: IUser;
    tags?: ITag[];
}

