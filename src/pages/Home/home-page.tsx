import { useState } from "react";
import styles from "./homeWithTags.module.css"
import { Filter } from "../../components/Filter/FIlter";
import { Posts } from "../../components/Posts/Posts";
import { Header } from "../../app/Header/Home-Header";
import { Entry } from "../../shared/Entry";
import { IPost } from "../../components/Post/post-types";
import { Main } from "../../app/Main";
import { isLogin, posts } from "../../shared/types";
import { Welcome } from "../../components/Welcome/Welcome";


export function HomePage(){
    const [filteredPosts, setfilteredPosts] = useState<IPost[]>(posts)

    function setFilteredPostsFunc(posts: IPost[]){
        setfilteredPosts(posts)
    }
    return (
        <div className={styles.parentElement}>
            <Header>
                {
                    isLogin ? (<Entry find="posts" setFilteredPosts={setFilteredPostsFunc}/>): false
                }
            </Header>
            {
                isLogin ? (
                    <div className={styles.main}>
                            <Filter/>
                            <Posts filteredPosts={filteredPosts}/>
                    </div>
                ): <Welcome/>
            }
        </div>
    )
}
