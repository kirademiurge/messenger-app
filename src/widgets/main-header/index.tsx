import { userStore } from "../../entities/user";
import { Avapic } from "../../shared/ui";
import styles from "./styles.module.scss";

export const MainHeader = () => {
	return (
		<div class={styles.header}>
			<Avapic name={userStore.name} size="2.25rem" color={userStore.color} />
			<p class={styles.projectName}>{userStore.username}</p>
		</div>
	)
}
