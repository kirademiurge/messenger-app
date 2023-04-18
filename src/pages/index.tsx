import { lazy } from "solid-js";
import { Routes, Route, Navigate } from "@solidjs/router";

const MainPage = lazy( () => import("./main") );
const UserChatPage = lazy( () => import("./user-chat") );
const SettingsPage = lazy( () => import("./settings") );

export default function PagesWithRouting () {
	return (
		<Routes>
			<Route path="/" component={MainPage} />
			<Route path="/user/:id" component={UserChatPage} />
			<Route path="/settings" component={SettingsPage} />
		</Routes>
	)
}
