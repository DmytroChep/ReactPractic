import  styles  from "./home.module.css"

export function Welcome(){
    return (<div className= {styles.welcomeDiv}>
        <p className={styles.welcomeTitle}>Welcome!</p>
        <p className={styles.welcomeDescription}>this page will show you all posts 
        instead of this message after you login.
        You also get probability to create your own posts</p>
        <a href="/registration" className={styles.linkToReg}>registration</a>
    </div>
        
    )
}