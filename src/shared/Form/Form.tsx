import { useForm } from "react-hook-form";
import styles from "./Form.module.css"
import { IFormData, ISignInForm, ISignUpForm } from "./Form.types";
import { useSignUp } from "../../hooks/use-sign-up";
import { useSignIn } from "../../hooks/use-sign-in";
import { useNavigate } from 'react-router-dom';


export function Form(props: {variant: "signIn" | "signUp"}){
    const {variant} = props
    
    const {handleSubmit, register} = useForm<IFormData>()

    const navigate = useNavigate()

    const {signUp, error: signUpError} = useSignUp()
    const {signIn, error: signInError} = useSignIn()

    async function onSubmit(data: IFormData) {
        try {
            if (variant === "signUp") {
                const { confirmPassword, ...dataToSubmit } = data as ISignUpForm
                if (data.password == confirmPassword){
                    await signUp(dataToSubmit)
                    navigate('/auth/signIn/')
                }
            } else {
                await signIn(data as ISignInForm)
                navigate('/')
            }
        } catch (err) {
            console.error(`error: ${err}`)
        }
    }


    return (
            variant === "signUp" ? (
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <p className={styles.formTitle}>Registration</p>
                    <div className={styles.inputWithPlaceholder}>
                        <span className={styles.placeholder}>enter here your first name</span>
                        <input type="text" className={styles.input} {...register("firstName")}  required/>
                    </div>
                    <div className={styles.inputWithPlaceholder}>
                        <span className={styles.placeholder}>enter here your surname</span>
                        <input type="text"  className={styles.input} {...register("secondName")} required/>
                    </div>
                    <div className={styles.inputWithPlaceholder}>
                        <span className={styles.placeholder}>enter here your email *</span>
                        <input type="email"  className={styles.input} required {...register("email")}/>
                    </div>
                    <div className={styles.inputWithPlaceholder}>
                        <span className={styles.placeholder}>enter here your password *</span>
                        <input type="password"  className={styles.input} {...register("password")} required/>
                    </div>
                    <div className={styles.inputWithPlaceholder}>
                        <span className={styles.placeholder}>enter here your password *</span>
                        <input type="password"  className={styles.input} {...register("confirmPassword", { 
                            required: "Please confirm your password"
                        })}/>
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