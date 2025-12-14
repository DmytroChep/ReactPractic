import { useState } from "react";
import { HomeWithPostsProps, IPost, posts, tags } from "../Home-types";
import { HomeMain } from "../Main/HomeMainPosts";
import styles from "./homeWithTags.module.css"
import { Entry } from "../../../shared/Entry";
import { Header } from "../../../app/Header/Home-Header";
import { Filter } from "../Filter/FIlter";
import { Posts } from "../Posts/Posts";

export function HomeWithPosts(){
    const [filteredPosts, setfilteredPosts] = useState<IPost[]>(posts)
    function SelectPosts(posts: IPost[]){
        setfilteredPosts(filteredPosts)
    }
    return (
        <div className={styles.parentElement}>
            <Header setFitleredPosts={setfilteredPosts}>
                <Entry setFilteredPosts={SelectPosts} find= "posts"/>
            </ Header>
            <HomeMain filteredPosts={filteredPosts} setFitleredPosts={setfilteredPosts}> 
                <Filter tags={tags}/>
                <Posts filteredPosts={filteredPosts}/>    
            </ HomeMain>
        </div>
    )
}
