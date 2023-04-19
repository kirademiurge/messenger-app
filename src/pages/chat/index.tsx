import { useParams } from "@solidjs/router";
import { Chat } from "../../entities/chat";

export default function ChatPage () {
	const params = useParams();

	return (
		<>
			<Chat username={params.username} />
		</>
	)
}
