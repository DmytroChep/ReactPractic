import { useContext, useEffect, useState } from "react"
import styles from "./Entry.module.css"
import { IEntryProps } from "./entry.types"
import { IPost } from "../../components/Post/post-types"
import { usePosts } from "../../hooks/use-posts"
import { PostContext } from "../../context/post-context"
import { LocalizationContext } from "../../context/localization-context"

export function Entry(props: IEntryProps) {
    const inputText = `Find ${props.find}`
    const [inputData, setInputData] = useState<string>("")
    const posts: IPost[] = usePosts().posts
    
    
    
    
    useEffect(() => {
        setFilteredPostsFunc(
            posts.filter((post) => {
                return post.title.includes(inputData)
            }))
        }, [inputData, posts])


        const postData = useContext(PostContext);
        const translateContext = useContext(LocalizationContext);
        if (!postData) return null; 
        
        if (!translateContext){
            return null
        }
        const { setFilteredPostsFunc } = postData;
        
        
        
        const {translate} = translateContext
        
        return (
        <input className = {styles.entry} placeholder={translate("Header-placeholder")} value={inputData} onChange={(event) => {
            setInputData(event.target.value)
        }}/>
    )
}