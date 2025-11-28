import { Entry } from "./Entry";
import { HomeHeader } from "./Home-Header";
import { HomeWithPostsProps } from "./Home-types";
import { HomeMain } from "./HomeMainPosts";
import styles from "./homeWithTags.module.css"

export function HomeWithPosts(){
    return (
        <div className={styles.parentElement}>
            <HomeHeader/>
            <HomeMain/>
        </div>
    )
}