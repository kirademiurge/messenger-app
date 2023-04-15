import { lazy } from "solid-js";
import { Routes, Route, Navigate } from "@solidjs/router";

const UsersListPage = lazy( () => import("./users-list") );
const SettingsPage = lazy( () => import("./settings") );

export default function PagesWithRouting () {
	return (
		<Routes>
			<Route path="/" component={UsersListPage} />
			<Route path="/settings" component={SettingsPage} />
			<Route path="*">
				<Navigate href="/" />
			</Route>
		</Routes>
	)
}
