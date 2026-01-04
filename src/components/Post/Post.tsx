import styles from "./post.module.css"
import { IPost } from "./post-types"
import { ICONS, IMAGES } from "../../shared/images"
import { useLikePost } from "../../hooks/use-like-post"
import { useLikeOrUnlike } from "../../hooks/use-like-or-unlike"
import { useState } from "react"

export function Post(props: {postData: IPost}){
    const {postData} = props
    const [likesCount, setLikesCount] = useState(postData.likesCount);
    function setLikesCountFunc(likesCount: number){
        setLikesCount(likesCount)
    }
    const { isLiked, toggleLike, error } = useLikeOrUnlike(postData.id, setLikesCountFunc, likesCount);

    const HeartIcon = isLiked ? ICONS.filledLike : ICONS.like;

    return( 
        <div className={styles.post}>
            <div className={styles.headerPost}>
                <div className={styles.firstHalfHeader}>
                    <img src={IMAGES.profile} className={styles.userAvatar} alt="" />
                    <p className={styles.createdByName}>{postData.createdBy.firstName}</p>
                </div>
                <div className={styles.secondHalfHeader}>
                    <div className={styles.likesAndText}>
                        <p className={styles.likesCount}>{likesCount}</p>
                        <HeartIcon className={styles.likeImage} onClick={toggleLike}/>
                    </div>
                    <img src={IMAGES.threeDots} className={styles.tripleDots} alt="" />
                </div>
            </div>
            <div className={styles.mainPost}>
                <p className={styles.title}>{postData.title}</p>
                <p className={styles.description}>{postData.description}</p>
                <img src={IMAGES.cat} className={styles.postImage} alt={postData.image} />
                <div className={styles.footerPost}>
                    {
                        postData.tags?.map((element, index) => {
                            return <p key={index} className={styles.tag}>#{element.name}</p>
                        })
                    }
                </div>
            </div>
        </div>
    )
}