export interface IPost {
    id?: number;
    title: string;
    description: string;
    image: string;
    likesCount: number;
    createdById: number;
    tags?: ITag[];
}

export interface HomeWithPostsProps{
    posts: IPost[];
}

export interface IHeaderProps{
    
}



export interface ITag {
    id?: number;
    name: string;
}
export const tags: ITag[] = [
    {
        id: 1,
        name: "nature"
    },
    {
        id: 2,
        name: "nature"
    },
    {
        id: 3,
        name: "nature"
    },
    {
        id: 4,
        name: "nature"
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