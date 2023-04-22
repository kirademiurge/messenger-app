import { createSignal, mergeProps } from "solid-js";
import styles from "./styles.module.scss";

export interface TextareaProps {
	placeholder?: string,
	maxHeight?: string,
	text?: any,
	onInput?: any,
	onChange?: any,
}

export const Textarea = (props: TextareaProps) => {
	const merged = mergeProps({maxHeight: "8rem"}, props);

	const [text, setText] = createSignal(props.text || "");

	const onChangeHandler = (event: any) => {
		setText(event.target.value);
		if (props.onChange) props.onChange(event);
		event.target.style.height = "auto";
		event.target.style.height = `${event.target.scrollHeight}px`;
	}
	
	const onInputHandler = (event: any) => {
		event.target.style.height = "auto";
		event.target.style.height = `${event.target.scrollHeight}px`;
		if (props.onInput) props.onInput(event);
	}

	const style = {
		'max-height': merged.maxHeight,
	}

	return (
		<textarea
			style={style}
			class={styles.textarea}
			value={text()}
			placeholder={props.placeholder}
			onChange={ onChangeHandler }
			onInput={ onInputHandler }
			rows={1}
		/>
	)
}
