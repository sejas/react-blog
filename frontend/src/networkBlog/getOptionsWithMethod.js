const headers = new Headers()
headers.append("Authorization", "test1");


export const getOptionsWithMethod = method => ({
	method,
	headers,
	// mode: "cors",
	// cache: "default"
});
