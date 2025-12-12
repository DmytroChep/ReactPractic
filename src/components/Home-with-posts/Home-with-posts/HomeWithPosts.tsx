import { useState } from "react";
import { Entry } from "../Entry/Entry";
import { HomeHeader } from "../Header/Home-Header";
import { HomeWithPostsProps, IPost, posts } from "../Home-types";
import { HomeMain } from "../Main/HomeMainPosts";
import styles from "./homeWithTags.module.css"

export function HomeWithPosts(){
    const [filteredPosts, setfilteredPosts] = useState<IPost[]>(posts)

    return (
        <div className={styles.parentElement}>
            <HomeHeader setFitleredPosts={setfilteredPosts}/>
            <HomeMain filteredPosts={filteredPosts} setFitleredPosts={setfilteredPosts}/>
        </div>
    )
}
