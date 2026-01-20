import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./app/Layout";
import { HomePage } from "./pages/Home/";
import { PostPage } from "./pages/onePostPage";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
    <Route path="/" element= {<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id/" element={<PostPage />} />
    </Route>
            </Routes>
        </BrowserRouter>
    )
}

