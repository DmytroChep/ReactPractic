import { useContext } from "react"
import { UserContext } from "../../context/user-context"
import { Header } from "../../app/Header/Home-Header"
import styles from "./profile.module.css"

export function ProfilePage(){
    const userContextData = useContext(UserContext)
    if (!userContextData) return null
    const {user} = userContextData

    return (
        <div>
            <Header />
            <div className={styles.main}>
                <div className={styles.profileCard}>
                    <div className={styles.headerCard}>
                        <img src=""className={styles.userAvatar}/>
                        <div className={styles.userData}>
                            <p>{user?.firstName}</p>
                            <p>{user?.secondName}</p>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                    <p>Posts: {user?.createdPosts.length}</p>
                    <p>Likes: {user?.likedPosts.length}</p>
                    <div className={styles.bottomDiv}>
                        <p>Change infromation</p>
                        <p>Change password</p>
                    </div>

                </div>
            </div>
        </div>
    )
}