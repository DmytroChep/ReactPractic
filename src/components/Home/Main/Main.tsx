import  styles  from "./Main.module.css"
import { Welcome } from "../Welcome/Welcome"
import { ReactNode } from "react"
import { IMainProps } from "./Main-types"


export function Main(props: IMainProps) {
    
    return (<main className = {styles.main}>
        {props.children}
    </main>)
}