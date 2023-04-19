import { ChatHeader } from "./chat-header";
import { ChatInput } from "./chat-input";
import { ChatScreen } from "./chat-screen";
import { usersListStore } from "../../../widgets/users-list";
import { User } from "../../user";

export interface ChatProps {
	username: string,
}

export const Chat = (props: ChatProps) => {
	const user: User = usersListStore.findUserByUsername(props.username);

	return (
		<>
			<ChatHeader name={user.name} avapic={user.avapic} />
			<ChatScreen />
			<ChatInput />
		</>
	)
}
