import { useEffect, useState } from "react"
import styles from "./Entry.module.css"
import { IEntryProps } from "./entry.types"
import { IPost } from "../../components/Post/post-types"
import { usePosts } from "../../hooks/use-posts"

export function Entry(props: IEntryProps) {
    const inputText = `Find ${props.find}`
    const [inputData, setInputData] = useState<string>("")
    const {setFilteredPosts} = props
    const posts: IPost[] = usePosts()
    
    useEffect(() => {
        setFilteredPosts(
            posts.filter((post) => {
                return post.title.includes(inputData)
            }))
    }, [inputData, setFilteredPosts])

    return (
        <input className = {styles.entry} placeholder={inputText} value={inputData} onChange={(event) => {
            setInputData(event.target.value)
        }}/>
        
    )
}