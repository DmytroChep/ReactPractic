import { useForm } from "react-hook-form";
import styles from "./Form.module.css"
import { ISignForm } from "./Form.types";

export function Form(){
    const {handleSubmit, register} = useForm<ISignForm>()

    function onSubmit(data: ISignForm){
        console.log(data)
        
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input type="text" className={styles.input} {...register("firstName")}/>
            <input type="text"  className={styles.input} {...register("secondName")}/>
            <input type="email"  className={styles.input} {...register("email")}/>
            <input type="password"  className={styles.input} {...register("password")}/>
            <input type="password"  className={styles.input} {...register("password")}/>
            <button type="submit">SUBMIT</button>
        </form>
    )
}