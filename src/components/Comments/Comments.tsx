import { IComment } from "./comments.types";
import styles from "./comments.module.css"
import { Comment } from "../Comment/Comment";
import { TextArea } from "../textArea";

export function Comments(props: {comments: IComment[]|undefined}){
    const {comments} = props

    return(
        <div className={styles.comments}>
            <TextArea/>
            {comments ? comments.map((element) => {
                return (<Comment commentData={element} />)
            }): (<p>0 comments</p>)}
        </div>
    )
}