import styles from "./styles.module.scss";

export default function TestPage () {
	return (
		<>
			<p><span class={styles.textarea} role="textbox" contenteditable></span></p>
		</>
	)
}
