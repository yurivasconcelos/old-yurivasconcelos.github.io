//use local?
const localUrl = 'https://localhost:7004';
const serverUrl = 'https://yurifx.azurewebsites.net';

export function fetcher(isLocal: boolean = true, url: string) {
  const endpoint = (isLocal ? localUrl : serverUrl) + url;
  const token = localStorage.getItem('token') ?? '';

  console.log(`sending get request to:${endpoint} with token ${token ?? `null`}`);

  return fetch(`${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export function poster(isLocal: boolean = true, url: string, body: { [key: string]: unknown } | null) {
  const endpoint = (isLocal ? localUrl : serverUrl) + url;
  const token = localStorage.getItem('token') ?? '';
  const bodyRequest = JSON.stringify(body);

  console.log(`sending post request to:${endpoint} with body ${bodyRequest} and token ${token ?? `null`}`);

  return fetch(`${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    body: bodyRequest,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export const getTest = (isLocal: boolean) => () => fetcher(isLocal, '/test');

export const getGoogle = (isLocal: boolean) => () => fetcher(isLocal, '/test/google');
