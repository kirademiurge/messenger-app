import { mergeProps } from "solid-js";
import styles from "./styles.module.scss";

export interface TextareaProps {
	placeholder?: string,
	maxHeight?: string,
}

export const Textarea = (props: TextareaProps) => {
	const merged = mergeProps({maxHeight: "8rem"}, props);

	const onInputHandler: any = (event: any) => {
		event.target.style.height = "auto";
		event.target.style.height = `${event.target.scrollHeight}px`;
	}

	const style = {
		'max-height': merged.maxHeight,
	}

	return (
		<textarea
			style={style}
			class={styles.textarea}
			placeholder={props.placeholder}
			onInput={ onInputHandler }
			rows={1}
		/>
	)
}
