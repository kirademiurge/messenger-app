import { useParams } from "@solidjs/router"

export default function UserChatPage () {
	const params = useParams();
	return (
		<div>
			{params.id}
		</div>
	)
}
