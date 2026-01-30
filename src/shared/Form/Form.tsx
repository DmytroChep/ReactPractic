import { useForm } from "react-hook-form";
import styles from "./Form.module.css"
import { IFormData, ISignUpForm } from "./Form.types";
import { useSignUp } from "../../hooks/use-sign-up";
import { useSignIn } from "../../hooks/use-sign-in";

export function Form(props: {variant: "signIn" | "signUp"}){
    const {variant} = props
    
    const {handleSubmit, register} = useForm<IFormData>()

    const {signUp} = useSignUp()
    const {signIn} = useSignIn()

    function onSubmit(data: IFormData){
        console.log(data)
        if (variant == "signUp"){
            signUp(data)
        } else if (variant == "signIn"){
            signIn(data)
        }
    }



    return (
            variant === "signUp" ? (
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <p className={styles.formTitle}>Registration</p>
                    <div className={styles.inputWithPlaceholder}>
                        <span className={styles.placeholder}>enter here your email *</span>
                        <input type="text" className={styles.input} {...register("firstName")}/>
                    </div>
                    <div className={styles.inputWithPlaceholder}>
                        <span className={styles.placeholder}>enter here your email *</span>
                        <input type="text"  className={styles.input} {...register("secondName")}/>
                    </div>
                    <div className={styles.inputWithPlaceholder}>
                        <span className={styles.placeholder}>enter here your email *</span>
                        <input type="email"  className={styles.input} {...register("email")}/>
                    </div>
                    <div className={styles.inputWithPlaceholder}>
                        <span className={styles.placeholder}>enter here your email *</span>
                        <input type="password"  className={styles.input} {...register("password")}/>
                    </div>
                    <div className={styles.inputWithPlaceholder}>
                        <span className={styles.placeholder}>enter here your email *</span>
                        <input type="password"  className={styles.input} {...register("password")}/>
                    </div>
                    <input type="file" {...register("avatar")}/>
                    <button type="submit" className={styles.submit}>SUBMIT</button>
                </form>
            ) : (
                variant === "signIn" ? (
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <p className={styles.formTitle}>Auth</p>
                        <div className={styles.inputWithPlaceholder}>
                            <span className={styles.placeholder}>enter here your email *</span>
                            <input type="email"  className={styles.input} {...register("email")}/>
                        </div>
                        <div className={styles.inputWithPlaceholder}>
                            <span className={styles.placeholder}>enter here your password *</span>
                            <input type="password"  className={styles.input} {...register("password")}/>
                        </div>
                        <button type="submit" className={styles.submit}>SUBMIT</button>
                    </form>
                ) : <p></p>
            )
        
    )
}