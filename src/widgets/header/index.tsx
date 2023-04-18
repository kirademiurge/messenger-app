import { userStore } from "../../entities/user";
import styles from "./styles.module.scss";

export const Header = () => {
	return (
		<header class={styles.header}>
			{userStore.avapic ? <img class={styles.avapic} src={userStore.avapic} alt="avapic" loading="lazy" /> : <div class={styles.avapic} />}
			<p class={styles.projectName}>{userStore.username}</p>
		</header>
	)
}
