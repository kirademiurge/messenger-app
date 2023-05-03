export interface Message {
	sender: string,
	receiver: string,
	body: string,
	editedBody?: string,
	sentTime: string,
	isChecked: boolean,
	isNew: boolean,
	// I HAVE TO ADD EXTRA VALUES
}
