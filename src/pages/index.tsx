import { lazy } from "solid-js";
import { Routes, Route, Navigate } from "@solidjs/router";

const MainPage = lazy( () => import("./main") );
const AboutPage = lazy( () => import("./about") );

export default function PagesWithRouting () {
	return (
		<Routes>
			<Route path="/" component={MainPage} />
			<Route path="/about" component={AboutPage} />
			<Route path="*">
				<Navigate href="/" />
			</Route>
		</Routes>
	)
}
