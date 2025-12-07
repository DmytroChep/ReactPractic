import { Entry } from "../Entry/Entry"
import  styles from "./header.module.css"
import image from "../../../images/image.png"
import profile from "../../../images/profile.png"
import { useState } from "react"
import { IPost, posts } from "../Home-types"


export function HomeHeader(props: {setFitleredPosts: React.Dispatch<React.SetStateAction<IPost[]>>}) {

    return (<header className={styles.header}>
            <img src={image} className={styles.logo}/>
            <Entry find="Posts" setFilteredPosts={props.setFitleredPosts}/>
            <div className={styles.userAvatarsShell}>
                <img src={profile} className={styles.userAvatar} />
            </div>
        </header>)
}       