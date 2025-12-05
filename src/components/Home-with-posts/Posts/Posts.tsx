import styles from "./homeWithTags.module.css"
import {IPost, posts} from "../Home-types"
import { Post } from "../Post/Post"

export function Posts(){
    return( 
        <div className={styles.allPosts}>
            <div className={styles.addPost}>
                <span>+</span>
            </div>

            {posts.map((element: IPost, idx: number) => {
                return <Post key={idx} postData={element}/>
            })}
        </div>
    )
}