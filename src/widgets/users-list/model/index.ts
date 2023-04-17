import { createStore } from "solid-js/store";
import { User } from "../../../entities/user";

export interface UsersListStore {
	usersList: User[],
}

export const [usersListStore, setUsersListStore] = createStore<UsersListStore>({
	usersList: [
		{
			id: "0",
			name: "KIRA",
		},
		{
			id: "1",
			name: "YAGAMI",
		},
		{
			id: "2",
			name: "LIGHT",
		},
		{
			id: "0",
			name: "KIRA",
		},
		{
			id: "1",
			name: "YAGAMI",
		},
		{
			id: "2",
			name: "LIGHT",
		},
		{
			id: "0",
			name: "KIRA",
		},
		{
			id: "1",
			name: "YAGAMI",
		},
		{
			id: "2",
			name: "LIGHT",
		},
		{
			id: "0",
			name: "KIRA",
		},
		{
			id: "1",
			name: "YAGAMI",
		},
		{
			id: "2",
			name: "LIGHT",
		},
		{
			id: "0",
			name: "KIRA",
		},
		{
			id: "1",
			name: "YAGAMI",
		},
		{
			id: "2",
			name: "LIGHT",
		},
		{
			id: "0",
			name: "KIRA",
		},
		{
			id: "1",
			name: "YAGAMI",
		},
		{
			id: "2",
			name: "LIGHT",
		},
		{
			id: "0",
			name: "KIRA",
		},
		{
			id: "1",
			name: "YAGAMI",
		},
		{
			id: "2",
			name: "LIGHT",
		},
	],
});
