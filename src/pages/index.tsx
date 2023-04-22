import { lazy } from "solid-js";
import { Routes, Route, Navigate } from "@solidjs/router";
import UsersListPage from "./users-list";
import ChatPage from "./chat";

const TestPage = lazy( () => import("./test") );

export default function PagesWithRouting () {
	return (
		<Routes>
			<Route path="/" component={UsersListPage} />
			<Route path="/user/:username" component={ChatPage} />
			<Route path="/test" component={TestPage} />
		</Routes>
	)
}
