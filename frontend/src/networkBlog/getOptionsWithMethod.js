// const headers = new Headers()
// headers.append("Authorization", "test1");

const headers = {
  Authorization: 'utest2',
  'Content-Type': 'application/json',
}


export const getOptionsWithMethod = (method, body) => {
  var result = {
  method,
  headers,
  // mode: "cors",
  // cache: "default"
}
if (body) {
  result.body = JSON.stringify(body)
}
  return result
};


