import styles from "./homeWithTags.module.css"

export function Filter(){
    return( 
        <div className={styles.filterDiv}>
            <p className={styles.filterText}>filter by:</p>

            <div className={styles.likes}>
                <p>likes</p>
            </div>
            <div className={styles.tags}>
                <p>tags</p>
            </div>
        </div>
    )
}