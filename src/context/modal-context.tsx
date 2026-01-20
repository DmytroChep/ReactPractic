import { createContext, ReactNode, useState } from "react";
import { IPost, IPostCreation, IPostUpdate } from "../components/Post/post-types";
import { useCreatePost } from "../hooks/use-create-post";


interface IModalContext{
    setPostDataFunc: (postData: IPostUpdate) => void,
    postData: IPostCreation
}
export const ModalContext = createContext<IModalContext|null>(null)

interface IModalContextProps{
    children: ReactNode
}

export function ModalContextProvider(props: IModalContextProps){
    const {children} = props

    const [postData, setPostData] = useState<IPostCreation>({title: "", description: "", image: "", likesCount: 0})


    function setPostDataFunc(newPostData: IPostUpdate){
        setPostData(prev => ({ ...prev, ...newPostData}) as IPostCreation)
    }


    

    return (
            <ModalContext.Provider value={{setPostDataFunc, postData}}>
                {children}
            </ModalContext.Provider>    
        );
}