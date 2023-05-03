import { avapicColor } from "../../../../shared/api";

export interface User {
	id: string,
	username: string,
	name: string,
	avapic?: string,
	bio?: string,
	color: avapicColor,
	// I HAVE TO ADD EXTRA VALUES
}
