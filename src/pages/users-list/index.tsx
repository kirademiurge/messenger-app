import { AddNewchat } from "../../features/add-newchat";
import { MainHeader } from "../../widgets/main-header";
import { UsersList } from "../../widgets/users-list";

export default function UsersListPage () {
	return (
		<>
			<MainHeader />
			<UsersList />
			<AddNewchat />
		</>
	)
}
