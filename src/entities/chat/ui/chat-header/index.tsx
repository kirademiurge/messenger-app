import { mergeProps } from "solid-js";
import styles from "./styles.module.scss";
import { A } from "@solidjs/router";
import { BsThreeDotsVertical } from "solid-icons/bs";
import { IoArrowBackOutline } from "solid-icons/io";
import { Avapic } from "../../../../shared/ui";
import { avapicColor } from "../../../../shared/api";

export interface ChatHeaderProps  {
	name: string,
	avapic?: string,
	color: avapicColor,
}

export const ChatHeader = (props: ChatHeaderProps) => {
	const merged = mergeProps( {name: "name name"}, props );

	return (
		<div class={styles.chatHeader}>

			<div class={styles.chatHeaderFirstBlock}>
				<A href="/"><IoArrowBackOutline size={24} class={styles.backButton} /></A>
				<Avapic name={props.name} image={props.avapic} size="2.75rem" color={props.color} />
				<div class={styles.nameBlock}>
					<p class={styles.name}>{merged.name}</p>
					<p class={styles.lastOnline}>last seen recently</p>
				</div>
			</div>

			<BsThreeDotsVertical size={20} class={styles.moreButton} />

		</div>
	)
}
