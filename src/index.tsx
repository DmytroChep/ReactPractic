import {createRoot} from "react-dom/client"
import { App } from "./App"
import { Home } from "./components/Home/Home/Home"
import { HomeWithPosts } from "./components/Home-with-posts/Home-with-posts/HomeWithPosts"

const rootDiv = document.getElementById("root") as HTMLElement
const root = createRoot(rootDiv)

root.render(<App/>)
root.render(<Home/>)
root.render(<HomeWithPosts/>)