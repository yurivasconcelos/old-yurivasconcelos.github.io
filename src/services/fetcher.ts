//use local?
const localUrl = 'https://localhost:7004';
const serverUrl = 'https://yurifx.azurewebsites.net';

export function fetcher(
  useLocal: boolean = true,
  url: string,
  method: string,
  body: { [key: string]: unknown } | null
) {
  const baseURL = useLocal ? localUrl : serverUrl;
  const endpoint = baseURL + url;
  const token = localStorage.getItem('token') ?? '';
  const bodyRequest = method == 'POST' ? JSON.stringify(body) : null;

  console.log(`sending request to:${endpoint} with body ${bodyRequest} and token ${token}}`)

  return fetch(`${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    body: bodyRequest,
  })
    .then((res) => {
      res.json().then(responseString => console.log('response', responseString));
    })
    .catch((err) => console.log(err));
}
