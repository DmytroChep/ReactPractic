import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import { Header } from "../Header/Home-Header";
import { Main } from "../Main";
import { isLogin } from "../../shared/types";
import { Entry } from "../../shared/Entry";
export function Layout() {
	return (
		<div className={styles.parentElement}>	
			
            <Main>
                <Outlet></Outlet>
            </Main>
		</div>
	);
}