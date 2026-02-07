import { Filter } from "../../components/Filter/FIlter"
import  styles from "./homeMain.module.css"
import { Posts } from "../../components/Posts/Posts"
import { ReactNode, useState } from "react"


export function Main(props: {children: ReactNode}) {
    return (
        <main className={styles.main}>
            {props.children}
        </main>
        )
}