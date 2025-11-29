import { Entry } from "../Entry/Entry";
import { HomeHeader } from "../Header/Home-Header";
import { HomeWithPostsProps } from "../Home-types";
import { HomeMain } from "../Main/HomeMainPosts";
import styles from "./homeWithTags.module.css"

export function HomeWithPosts(){
    return (
        <div className={styles.parentElement}>
            <HomeHeader/>
            <HomeMain/>
        </div>
    )
}