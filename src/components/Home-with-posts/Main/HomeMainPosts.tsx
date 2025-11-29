import { Filter } from "../Filter/FIlter"
import { tags } from "../Home-types"
import  styles from "./homeMain.module.css"
import { Posts } from "../Posts/Posts"


export function HomeMain() {
    return (<main className={styles.main}>
            <Filter tags={tags}/>
            <Posts/>
        </main>)
}