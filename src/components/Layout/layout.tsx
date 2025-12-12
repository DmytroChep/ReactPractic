import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import { Main } from "../Home/Main/Main";
import { Header } from "../Home/Header/Header";
export function Layout() {
	return (
		<div className={styles.parentElement}>

            <Main>
                <Outlet></Outlet>
            </Main>
		</div>
	);
}