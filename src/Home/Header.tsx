import  styles  from "./home.module.css"
import image from "./images/image.png"

export function Header() {
    return (<header className={styles.header}>
            <img src={image} className={styles.logo}/>
        </header>)
}