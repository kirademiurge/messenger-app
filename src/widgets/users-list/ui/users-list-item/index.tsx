import { User } from "../../../../entities/user";

export const UsersListItem = (props: User) => {
	return (
		<div>
			<div>{props.avapic}</div>

			<div>
				<p>{props.name}</p>
				<p>last message</p>
			</div>

		</div>
	)
}
