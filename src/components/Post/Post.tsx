import styles from "./post.module.css"
import { IPost } from "./post-types"
import { IMAGES } from "../../shared/images"

export function Post(props: {postData: IPost}){
    return( 
        <div className={styles.post}>
            <div className={styles.headerPost}>
                <div className={styles.firstHalfHeader}>
                    <img src={IMAGES.profile} className={styles.userAvatar} alt="" />
                    <p className={styles.createdByName}>{props.postData.createdById}</p>
                </div>
                <div className={styles.secondHalfHeader}>
                    <div className={styles.likesAndText}>
                        <p className={styles.likesCount}>{props.postData.likesCount}</p>
                        <img src={IMAGES.like} className={styles.likeImage} alt="" />
                    </div>
                    <img src={IMAGES.threeDots} className={styles.tripleDots} alt="" />
                </div>
            </div>
            <div className={styles.mainPost}>
                <p className={styles.title}>{props.postData.title}</p>
                <p className={styles.description}>{props.postData.description}</p>
                <img src={IMAGES.cat} className={styles.postImage} alt={props.postData.image} />
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