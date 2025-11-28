import {createRoot} from "react-dom/client"
import { App } from "./App"
import { Home } from "./Home/Home"
import { Registration } from "./Registration/registration"
import { HomeWithPosts } from "./Home-with-posts/HomeWithPosts"

const rootDiv = document.getElementById("root") as HTMLElement
const root = createRoot(rootDiv)

root.render(<App/>)
root.render(<Home/>)
root.render(<Registration/>)
root.render(<HomeWithPosts/>)