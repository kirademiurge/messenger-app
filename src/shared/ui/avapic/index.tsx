import { avapicColor } from "../../api";
import styles from "./styles.module.scss";

export interface AvapicProps {
	image?: string,
	size: string,
	name: string,
	color: avapicColor,
}

export const Avapic = (props: AvapicProps) => {
	let color = `
		${props.color === "red" && styles.red}
		${props.color === "orange" && styles.orange}
		${props.color === "yellow" && styles.yellow}
		${props.color === "green" && styles.green}
		${props.color === "blue" && styles.blue}
		${props.color === "purple" && styles.purple}
	`;

	const style = {
		width: props.size,
		height: props.size,
		'font-size': `${parseInt(props.size) / 1.5}rem`,
	}

	return (
		<>
			{
				props.image ?
				<img style={style} class={`${styles.avapic} ${color}`} src={props.image} alt="avapic" loading="lazy" />
				:
				<div style={style} class={`${styles.avapic} ${color}`}>{props.name[0]}</div>
			}
		</>
	)
}
