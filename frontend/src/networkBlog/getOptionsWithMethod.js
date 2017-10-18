// const headers = new Headers()
// headers.append("Authorization", "test1");

const headers = {
  Authorization: 'test1',
  'Content-Type': 'application/json',
}


export const getOptionsWithMethod = method => ({
	method,
	headers,
	// mode: "cors",
	// cache: "default"
});


