import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/layout";
import { Home } from "./components/Home/Home/Home";
import { HomeWithPosts } from "./components/Home-with-posts/Home-with-posts/HomeWithPosts";

export function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Layout />}>
                    <Route path="/welcome" element={<Home />} />
                    <Route path="/" element={<HomeWithPosts />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}