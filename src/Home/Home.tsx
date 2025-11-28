import { Header } from "./Header";
import { Main } from "./Main";
import styles from "./home.module.css"

export function Home(){
    return (<div className={styles.home}>
        <Header/>
        <Main/>
    </div>)
}