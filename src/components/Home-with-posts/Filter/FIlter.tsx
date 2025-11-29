import { useState } from "react"
import { ITag } from "../Home-types"
import styles from "./filter.module.css"
import arrow from "../../../images/arrow.png"

export function Filter(props: {tags: ITag[]}){
    const [isLikesExpanded, setIsLikesExpanded] = useState(false)
    const [isTagsExpanded, setIsTagsExpanded] = useState(false)

    const filterLikesOnClick = () => {
        setIsLikesExpanded(!isLikesExpanded)    
    }

    const filterTagsOnClick = () => {
        setIsTagsExpanded(!isTagsExpanded)
    }

    return( 
        <div className={styles.filterDiv}>
            <p className={styles.filterText}>filter by:</p>

            <div className={`${styles.likes} ${isLikesExpanded ? styles.expanded : ''}`} onClick={filterLikesOnClick}>
                <p>likes</p>
                <img src={arrow} className={styles.arrowBtn} alt="" />
            </div>
            
            <div className={`${styles.tags} ${isTagsExpanded ? styles.expanded : ''}`} onClick={filterTagsOnClick}>
                <p>tags</p>
                <img src={arrow} className={styles.arrowBtn} alt="" />
            </div>
        </div>
    )
}