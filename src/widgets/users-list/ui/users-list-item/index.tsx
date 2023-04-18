import { A } from "@solidjs/router";
import { User } from "../../../../entities/user";
import styles from "./styles.module.scss";

export const UsersListItem = (props: User) => {
	return (
		<A href={`user/${props.username}`}>
			<div class={styles.item}>
				<div>
					{props.avapic ? <img class={styles.avapic} src={props.avapic} alt="avapic" loading="lazy" /> : <div class={styles.avapic} />}
				</div>

				<div class={styles.textBlock}>
					<p class={styles.name}>{props.name}</p>
					<p class={styles.lastMessage}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quam!</p>
				</div>
			</div>
		</A>
	)
}
