import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Welcome } from "../Welcome/Welcome";
import styles from "./Home.module.css"

export function Home(){
    return (<div className={styles.home}>
        <Header/>
        <Main>
            <Welcome/>
        </Main>
    </div>)
}