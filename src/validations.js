export function isName(name) {
	let notError = false;
	if (/^[a-zA-Z][a-zA-Z.\s-]*$/g.test(name)) {
		notError = true;
	}
	return notError;
}

export function isMobile(mobile) {
	let notError = false;
	if (/^[0-9]{8,12}$/g.test(mobile)) {
		notError = true;
	}
	return notError;
}

export function isEmail(email) {
	let notError = false;
	if (
		/^[a-zA-Z0-9]+(?:[a-zA-Z]|\.(?!(\.|@))|\_(?!(\_|@))|\-(?!(\-|@)))+(?:[\w]|\.(?!(\.|@)))*@{1}[a-zA-Z0-9\-]+(?:\.(?!\.))*[a-zA-Z0-9\-]+(?:\.(?!\.))+[a-zA-Z]{2,7}$/g.test(
			email
		)
	) {
		notError = true;
	}
	return notError;
}

export function isNotEmpty(value) {
	return value != undefined && value != null && value != "";
}