import  styles  from "./home.module.css"
import { Welcome } from "./Welcome"

export function Main() {
    return (<main className = {styles.main}>
        <Welcome/>
    </main>)
}