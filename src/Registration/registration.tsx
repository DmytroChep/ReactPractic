import { Header } from "../Home/Header"
import { MainRegistration } from "./main-registration"
import styles from "./registration.module.css"

export function Registration(){
    return(
        <div className={styles.registrationBody}>
            <Header/>
            <MainRegistration />
        </div>
)
}