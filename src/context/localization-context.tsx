import { createContext, ReactNode, useState } from "react"
import { translations } from "../locales/translations"

type TranslationsKey = keyof typeof translations

const supportedLanguages = ["en", "de", "uk"] as const;

type Language = typeof supportedLanguages[number];

interface ILocalizationContext{
    currentLanguage: string,
    translate: (toTranslate: TranslationsKey) => string,
    setCurrecntTranslationFunc: (language: string) => {status: string}
}


export const LocalizationContext = createContext<ILocalizationContext|null>(null)

interface ILocalizationContextProps{
    children: ReactNode
}

export function LocalizationContextProvider(props: ILocalizationContextProps){
    const {children} = props

    const [currentLanguage, setCurrentLanguage] = useState<Language>("uk")

    function translate(toTranslate: TranslationsKey){
        const translation = translations[toTranslate][currentLanguage]
        return translation
    }

    function setCurrecntTranslationFunc(language: string){
        if (!(supportedLanguages as readonly string[]).includes(language)){
            console.log("language not correct")
            return {status: "error"}
        }
        const correctLanguage = language as Language
        setCurrentLanguage(correctLanguage)
        return {status: "success"}
    } 
    
    return (
            <LocalizationContext.Provider value={{currentLanguage, translate, setCurrecntTranslationFunc}}>
                {children}
            </LocalizationContext.Provider>    
        );
}