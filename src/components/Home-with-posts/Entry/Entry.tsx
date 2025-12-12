import { useEffect, useState } from "react"
import styles from "./Entry.module.css"
import { IPost, posts } from "../Home-types"

export function Entry(props: {find: string, setFilteredPosts: React.Dispatch<React.SetStateAction<IPost[]>>}) {
    const inputText = `Find ${props.find}`
    const [inputData, setInputData] = useState<string>("")
    const {setFilteredPosts} = props
    
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