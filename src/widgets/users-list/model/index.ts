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
		},
		{
			id: "1",
			username: "username1",
			name: "YAGAMI",
		},
		{
			id: "2",
			username: "username2",
			name: "LIGHT",
		},
	],
	findUserByUsername(username: string) {
		const user = this.users.find( user => user.username === username );
		return user;
	},
});
