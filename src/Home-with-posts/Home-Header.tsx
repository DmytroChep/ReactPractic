import { Entry } from "./Entry"
import  styles from "./homeWithTags.module.css"
// import image from "images/image.png"

export function HomeHeader() {
    return (<header className={styles.header}>
            <img src="" className={styles.logo}/>
            <Entry find="Posts"/>
            <img src="" className={styles.userAvatar} />
        </header>)
}