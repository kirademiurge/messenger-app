import { mergeProps } from "solid-js";
import styles from "./styles.module.scss";
import { A } from "@solidjs/router";
import { BsThreeDotsVertical } from "solid-icons/bs";
import { IoArrowBackOutline } from "solid-icons/io";

export interface ChatHeaderProps  {
	name: string,
	avapic?: string,
}

export const ChatHeader = (props: ChatHeaderProps) => {
	const merged = mergeProps( {name: "name name"}, props );

	return (
		<div class={styles.chatHeader}>

			<div class={styles.chatHeaderFirstBlock}>
				<A href="/"><IoArrowBackOutline size={24} class={styles.backButton} /></A>

				{props.avapic ? <img class={styles.avapic} src={props.avapic} alt="avapic" loading="lazy" /> : <div class={styles.avapic} />}

				<div class={styles.nameBlock}>
					<p class={styles.name}>{merged.name}</p>
					<p class={styles.lastOnline}>last seen recently</p>
				</div>
			</div>

			<BsThreeDotsVertical size={20} class={styles.moreButton} />

		</div>
	)
}
