import { Filter } from "../Filter/FIlter"
import { IPost, posts, tags } from "../Home-types"
import  styles from "./homeMain.module.css"
import { Posts } from "../Posts/Posts"
import { useState } from "react"


export function HomeMain(props: {filteredPosts: IPost[], setFitleredPosts: React.Dispatch<React.SetStateAction<IPost[]>>}) {
    const {filteredPosts} = props
    return (<main className={styles.main}>
            <Filter tags={tags}/>
            <Posts filteredPosts={filteredPosts}/>
        </main>)
}