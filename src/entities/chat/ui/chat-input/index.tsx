import { Input } from "../../../../shared/ui";
import styles from "./styles.module.scss";
import { IoSend } from "solid-icons/io";

export const ChatInput = () => {
	return (
		<div class={styles.chatInput}>
			<Input placeholder="Type a message..." />
			<IoSend size={24} class={styles.sendButton} />
		</div>
	)
}
