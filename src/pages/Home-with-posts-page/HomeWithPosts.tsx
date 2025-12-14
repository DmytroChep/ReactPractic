import { useState } from "react";
import { HomeWithPostsProps, IPost, posts, tags } from "../../components/Home-with-posts/Home-types";
import styles from "./homeWithTags.module.css"
import { Filter } from "../../components/Home-with-posts/Filter/FIlter";
import { Posts } from "../../components/Home-with-posts/Posts/Posts";
import { Header } from "../../app/Header/Home-Header";
import { Entry } from "../../shared/Entry";
import { HomeMain } from "../../components/Home-with-posts/Main/HomeMainPosts";


export function HomeWithPosts(){
    const [filteredPosts, setfilteredPosts] = useState<IPost[]>(posts)

    function setFilteredPostsFunc(posts: IPost[]){
        setfilteredPosts(posts)
    }

    return (
        <div className={styles.parentElement}>
            <Header setFitleredPosts={((filteredPosts) => setFilteredPostsFunc)}>
                    <Entry find="Posts" setFilteredPosts={(filteredPosts) => setFilteredPostsFunc}></Entry>
            </ Header>
            <HomeMain filteredPosts={filteredPosts} setFitleredPosts={setfilteredPosts}>
                <Filter tags={tags}/>
                <Posts filteredPosts={filteredPosts}/>
            </HomeMain>
        </div>
    )
}
