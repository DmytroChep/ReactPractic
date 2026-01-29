import { useForm } from "react-hook-form";
import styles from "./Form.module.css"
import { IFormData, ISignUpForm } from "./Form.types";

export function Form(props: {variant: "signIn" | "signUp"}){
    const {variant} = props
    
    const {handleSubmit, register} = useForm<IFormData>()

    function onSubmit(data: IFormData){
        console.log(data)
        
    }



    return (
            variant === "signUp" ? (
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <input type="text" className={styles.input} {...register("firstName")}/>
                    <input type="text"  className={styles.input} {...register("secondName")}/>
                    <input type="email"  className={styles.input} {...register("email")}/>
                    <input type="password"  className={styles.input} {...register("password")}/>
                    <input type="password"  className={styles.input} {...register("password")}/>
                    <button type="submit">SUBMIT</button>
                </form>
            ) : (
                variant === "signIn" ? (
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <input type="email"  className={styles.input} {...register("email")}/>
                        <input type="password"  className={styles.input} {...register("password")}/>
                        <button type="submit">SUBMIT</button>
                    </form>
                ) : <p></p>
            )
        
    )
}