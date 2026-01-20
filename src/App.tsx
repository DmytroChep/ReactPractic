import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./app/Layout/layout";
import { HomePage } from "./pages/Home";
import { PostPage } from "./pages/onePostPage";
import { AppRoutes } from "./AppRoutes";
import { PostContext, PostContextProvider } from "./context/post-context";
import { ModalContext, ModalContextProvider } from "./context/modal-context";
import { LocalizationContextProvider } from "./context/localization-context";

export function App(){
    return (
        <LocalizationContextProvider>
            <ModalContextProvider>
                <PostContextProvider>
                    <AppRoutes/>
                </PostContextProvider>
            </ModalContextProvider>
        </LocalizationContextProvider>
    )
            
            
}

    

