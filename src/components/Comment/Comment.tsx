import { IComment } from "../Comments/comments.types"
import styles from "./comment.module.css"

export function Comment(props: {commentData: IComment}){
    const {commentData} = props

    return(
        <div className={styles.comment}>
            <div className={styles.userData}>
                <img src={commentData.user.avatar} className={styles.userAvatar} />
                <p className={styles.username}>{commentData.user.firstName}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: commentData.body }}>
            
            </div>
        </div>
    )
}   