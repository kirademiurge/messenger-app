import { createStore } from "solid-js/store";
import { User } from "../api";

export const [userStore, setUserStore] = createStore<User>({
	id: "",
	name: "name name",
});
