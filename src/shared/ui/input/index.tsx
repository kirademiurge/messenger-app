import styles from "./styles.module.scss";

export interface InputProps {
	placeholder?: string,
}

export const Input = (props: InputProps) => {
	return (
		<input class={styles.input} type="text" placeholder={props.placeholder} />
	)
}
