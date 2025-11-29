import styles from "./Entry.module.css"

export function Entry(props: {find: string}) {
    const inputText = `Find ${props.find}`
    return (
        <input className = {styles.entry} placeholder={inputText} />
        
    )
}