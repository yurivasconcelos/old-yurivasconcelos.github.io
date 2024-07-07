const baseURL = 'https://localhost:7004';
// const baseURL = 'https://yurifx.azurewebsites.net';

export async function fetcher(url: string, method: string, body: { [key: string]: unknown } | null) {
  const token = localStorage.getItem('token') ?? '';

  return fetch(`${baseURL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    body: method == "POST" ? JSON.stringify(body) : null,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
