import { useState } from "react"
import { ITag, tags } from "../Home-types"
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
                <div className={styles.alwaysShowData}>
                    <p>likes</p>
                    <img src={arrow} className={styles.arrowBtn} alt="" />
                </div>
                <hr />
                <input type="text" placeholder="find tag" className={styles.findTagInput} />
                <div className={styles.TagsDiv}>
                    {
                        tags.map((element) => {
                            return (<div className={styles.tag}>
                                <input type="checkbox" />
                                <p className={styles.tagName}>{element.name}</p>
                            </div>)
                        })
                    }
                </div>
            </div>
            
            <div className={`${styles.tags} ${isTagsExpanded ? styles.expanded : ''}`} onClick={filterTagsOnClick}>
                <div className={styles.alwaysShowData}>
                    <p>tags</p>
                    <img src={arrow} className={styles.arrowBtn} alt="" />
                </div>
            </div>
        </div>
    )
}