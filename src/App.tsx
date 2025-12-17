import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./app/Layout/layout";
import { HomePage } from "./pages/Home";

export function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Layout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}