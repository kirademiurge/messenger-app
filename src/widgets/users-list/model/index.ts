import { createStore } from "solid-js/store";
import { User } from "../../../entities/user";

export interface UsersListStore {
	users: User[],
	findUserByUsername: Function,
}

export const [usersListStore, setUsersListStore] = createStore<UsersListStore>({
	users: [
		{
			id: "0",
			username: "username0",
			name: "KIRA",
			color: "red",
		},
		{
			id: "1",
			username: "username1",
			name: "YAGAMI",
			color: "orange",
		},
		{
			id: "2",
			username: "username2",
			name: "LIGHT",
			color: "blue",
		},
	],
	findUserByUsername(username: string) {
		const user = this.users.find( user => user.username === username );
		return user;
	},
});
