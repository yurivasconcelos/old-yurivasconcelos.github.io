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
  const token = localStorage.getItem('token') ?? '';

  return fetch(`${baseURL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    body: method == 'POST' ? JSON.stringify(body) : null,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
