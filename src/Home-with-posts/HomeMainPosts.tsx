import { Filter } from "./FIlter"
import  styles from "./homeWithTags.module.css"
import { Posts } from "./Posts"


export function HomeMain() {
    return (<main className={styles.main}>
            <Filter/>
            <Posts/>
        </main>)
}