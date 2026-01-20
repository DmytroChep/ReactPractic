import { useContext } from "react";
import  styles  from "./Welcome.module.css"
import { LocalizationContext } from "../../context/localization-context";


export function Welcome(){
    const translateContext = useContext(LocalizationContext);
    if (!translateContext){
        return null
    }
    
    const {translate} = translateContext

    return (<div className= {styles.welcomeDiv}>
        <p className={styles.welcomeTitle}>{translate("Welcome-title")}</p>
        <p className={styles.welcomeDescription}>{translate("Welcome-description")}</p>
        <a href="/registration" className={styles.linkToReg}>{translate("Welcome-linkToReg")}</a>
    </div>
        
    )
}