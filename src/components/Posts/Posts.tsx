import styles from "./homeWithTags.module.css"
import { Post } from "../Post/Post"
import { IPost } from "../Post/post-types"

export function Posts(props: {filteredPosts: IPost[]}){
    const {filteredPosts} = props
    return( 
        <div className={styles.allPosts}>
            <div className={styles.addPost}>
                <span>+</span>
            </div>

            {filteredPosts.map((element: IPost, idx: number) => {
                return <Post key={idx} postData={element}/>
            })} 
        </div>
    )
}