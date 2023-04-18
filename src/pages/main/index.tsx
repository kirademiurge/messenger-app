import { AddNewchat } from "../../features/add-newchat";
import { Header } from "../../widgets/header";
import { UsersList } from "../../widgets/users-list";

export default function MainPage () {
	return (
		<div class="screen">
			<Header />
			<UsersList />
			<AddNewchat />
		</div>
	)
}
