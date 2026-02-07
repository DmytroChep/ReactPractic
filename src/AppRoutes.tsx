import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./app/Layout";
import { HomePage } from "./pages/Home/";
import { PostPage } from "./pages/onePostPage";
import { LoginPage } from "./pages/signIn-page";
import { RegistrationPage } from "./pages/signUp-page";
import { AuthLayout } from "./app/AuthLayout";
import { ProfilePage } from "./pages/Profile";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element= {<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/post/:id/" element={<PostPage />} />
                    <Route path="/me/" element={<ProfilePage />} />
                </Route>
                <Route path="/auth/" element= {<AuthLayout />}>
                    <Route path="signIn/" element={<LoginPage />} />
                    <Route path="signUp/" element={<RegistrationPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

