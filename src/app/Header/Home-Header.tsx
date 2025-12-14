import  styles from "./header.module.css"
import { IPost, posts } from "../../components/Home-with-posts/Home-types"
import { ReactNode } from "react"
import { IHeader } from "./header.types"
import { IMAGES } from "../../shared/images"


export function Header(props: IHeader) {

    return (<header className={styles.header}>
            <img src={IMAGES.image} className={styles.logo}/>
            <div>
            {props.children}
            </div>
            <div className={styles.userAvatarsShell}>
                <img src={IMAGES.profile} className={styles.userAvatar} />
            </div>
        </header>)
}       