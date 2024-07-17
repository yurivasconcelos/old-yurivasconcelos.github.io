//use local?
// const url = 'https://localhost:7004';
const baseUrl = 'https://yurifx.azurewebsites.net';
const token = localStorage.getItem('token') ?? '';

export function fetcher(url: string) {
  const endpoint = baseUrl + url;

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



export function poster(url: string, body: { [key: string]: unknown } | null) {
  const endpoint = baseUrl + url;
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

export const getTest = () => fetcher('/test');
