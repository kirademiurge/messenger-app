import { lazy } from "solid-js";
import { Routes, Route, Navigate } from "@solidjs/router";

const UsersListPage = lazy( () => import("./users-list") );
const ChatPage = lazy( () => import("./chat") );
const SettingsPage = lazy( () => import("./settings") );

export default function PagesWithRouting () {
	return (
		<Routes>
			<Route path="/" component={UsersListPage} />
			<Route path="/user/:username" component={ChatPage} />
			<Route path="/settings" component={SettingsPage} />
		</Routes>
	)
}
