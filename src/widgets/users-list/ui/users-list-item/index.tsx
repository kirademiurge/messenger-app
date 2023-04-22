import { A } from "@solidjs/router";
import { User } from "../../../../entities/user";
import styles from "./styles.module.scss";
import { Avapic } from "../../../../shared/ui";

export const UsersListItem = (props: User) => {
	return (
		<A href={`user/${props.username}`}>
			<div class={styles.item}>
				<Avapic size="3.25rem" name={props.name} color={props.color} />

				<div class={styles.nameBlock}>
					<p class={styles.name}>{props.name}</p>
					<p class={styles.lastMessage}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quam!</p>
				</div>
			</div>
		</A>
	)
}
