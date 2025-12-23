import { useEffect, useState } from "react"
import styles from "./filter.module.css"
import { ITag } from "./filter-types"
import { IMAGES } from "../../shared/images"
import { useTags } from "../../hooks/use-tags"

export function Filter(){
    const tags = useTags()

    const [isLikesExpanded, setIsLikesExpanded] = useState(false)
    const [isTagsExpanded, setIsTagsExpanded] = useState(false)

    const [inputData, setInputData] = useState<string>("")
    const [choosedTags, setTags] = useState<ITag[]>(tags)

    // const [choosedTags, setChoosedTags] = useState<ITag[]>([])
    

    useEffect(() => {
        setTags(tags)
    }, [tags])

    useEffect(() => {
        setTags(
            tags.filter((tag) => {
                return tag.name.includes(inputData)
            })
        )
    }, [inputData, setInputData])

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
                    <p>tags</p>
                    <img src={IMAGES.arrow} className={styles.arrowBtn} alt="" />
                </div>
                <hr />
                <input type="text" value={inputData} placeholder="find tag" className={styles.findTagInput} onChange={(event) => {
                    setInputData(event.target.value)
                }}/>
                <div className={styles.TagsDiv}>
                    {
                        choosedTags.map((element) => {
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
                    <p>likes</p>
                    <img src={IMAGES.arrow} className={styles.arrowBtn} alt="" />
                </div>
            </div>
        </div>
    )
}