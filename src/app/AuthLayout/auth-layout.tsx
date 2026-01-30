import { Outlet } from "react-router-dom";
import styles from "./auth-layout.module.css";
import { Header } from "../Header/Home-Header";
import { Main } from "../Main";
import { isLogin } from "../../shared/types";
import { Entry } from "../../shared/Entry";
export function AuthLayout() {
	return (
		<div className={styles.parentElement}>	
			
			<Header></Header>
			<div className={styles.main}>
				<Outlet></Outlet>
			</div>

		</div>
	);
}