import { createEffect, createSignal } from "solid-js";
import { Textarea } from "../../../../shared/ui";
import styles from "./styles.module.scss";
import { IoSend } from "solid-icons/io";

export const ChatInput = () => {
	const [text, setText] = createSignal("");

	const onChangeHandler = (event: any) => {
		setText(event.target.value);
		event.target.value = "";
	}
	
	const handleSubmit = (event: any) => {
		event.preventDefault();
		setText("");
	}

	return (
		<form onSubmit={handleSubmit} class={styles.chatInput}>
			<Textarea text={text()} onChange={onChangeHandler} placeholder="Type a message..." />
			<button type="submit" class={styles.sendButton}><IoSend size={24} /></button>
		</form>
	)
}
