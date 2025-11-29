import { IPost } from "../Home-types"
import styles from "./post.module.css"
import profile from "../../../images/profile.png"
import like from "../../../images/like.png"
import threeDots from "../../../images/threeDots.png"
import cat from "../../../images/cat.png"

export function Post(props: {postData: IPost}){
    return( 
        <div className={styles.post}>
            <div className={styles.headerPost}>
                <div className={styles.firstHalfHeader}>
                    <img src={profile} className={styles.userAvatar} alt="" />
                    <p className={styles.createdByName}>{props.postData.createdById}</p>
                </div>
                <div className={styles.secondHalfHeader}>
                    <div className={styles.likesAndText}>
                        <p className={styles.likesCount}>{props.postData.likesCount}</p>
                        <img src={like} className={styles.likeImage} alt="" />
                    </div>
                    <img src={threeDots} className={styles.tripleDots} alt="" />
                </div>
            </div>
            <div className={styles.mainPost}>
                <p className={styles.title}>{props.postData.title}</p>
                <p className={styles.description}>{props.postData.description}</p>
                <img src={cat} className={styles.postImage} alt={props.postData.image} />
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