import { lazy } from "solid-js";
import { Routes, Route, Navigate } from "@solidjs/router";

const MainPage = lazy( () => import("./main") );
const SettingsPage = lazy( () => import("./settings") );

export default function PagesWithRouting () {
	return (
		<Routes>
			<Route path="/" component={MainPage} />
			<Route path="/settings" component={SettingsPage} />
			<Route path="*">
				<Navigate href="/" />
			</Route>
		</Routes>
	)
}
