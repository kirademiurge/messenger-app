import { createStore } from "solid-js/store";
import { User } from "../api";

export const [userStore, setUserStore] = createStore<User>({
	id: "",
	username: "username",
	name: "name name",
	color: "purple",
});
