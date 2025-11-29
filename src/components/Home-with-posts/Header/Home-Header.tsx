import { Entry } from "../Entry/Entry"
import  styles from "./header.module.css"
import image from "../../../images/image.png"
import profile from "../../../images/profile.png"


export function HomeHeader() {
    return (<header className={styles.header}>
            <img src={image} className={styles.logo}/>
            <Entry find="Posts"/>
            <div className={styles.userAvatarsShell}>
                <img src={profile} className={styles.userAvatar} />
            </div>
        </header>)
}