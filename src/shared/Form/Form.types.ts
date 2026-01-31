export interface ISignUpForm{
    firstName: string 
    secondName: string 
    email: string
    avatar: string 
    password: string 
    confirmPassword: string
}

export interface ISignInForm{
    email: string
    password: string 
}

export type IFormData = ISignUpForm | ISignInForm