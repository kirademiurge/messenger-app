import { For } from "solid-js";
import styles from "./styles.module.scss";
import { UsersListItem } from "./users-list-item";
import { usersListStore } from "../model";
import { Loading } from "../../../shared/ui";

export const UsersList = () => {
	return (
		<main class={styles.main}>
			<For each={usersListStore.usersList} fallback={<Loading />}>
				{
					(user, index) => (
						<UsersListItem id={user.id} username={user.username} name={user.name} avapic={user.avapic} />
					)
				}
			</For>
		</main>
	)
}
