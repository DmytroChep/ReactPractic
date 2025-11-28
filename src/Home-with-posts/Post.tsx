import { IPost } from "./Home-types"
import styles from "./homeWithTags.module.css"

export function Post(props: {postData: IPost}){
    return( 
        <div className={styles.post}>
            <div className={styles.headerPost}>
                <img src="" className={styles.userAvatar} alt="" />
                <p className={styles.createdByName}>{props.postData.createdById}</p>
                <p className={styles.likesCount}>{props.postData.likesCount}</p>
                <img src="" className={styles.likeImage} alt="" />
                <img src="" className={styles.tripleDots} alt="" />
            </div>
            <div className={styles.mainPost}>
                <p className={styles.title}>{props.postData.title}</p>
                <p className={styles.description}>{props.postData.description}</p>
                <img src="" className={styles.postImage} alt={props.postData.image} />
                <div className={styles.footerPost}>
                    {
                        props.postData.tags?.map((element, index) => {
                            return <p key={index} className={styles.tag}>#{element.name}</p>
                        })
                    }
                </div>
            </div>
        </div>
    )
}