import axios from 'axios';

// const baseURL = 'https://localhost:7251';
const baseURL = 'https://yurifx.azurewebsites.net/';
// const baseURL = 'https://bookaapi.azurewebsites.net/';


axios.interceptors.request.use((config) => {
  config.baseURL = baseURL;
  const token = localStorage.getItem('token');
  if (token) {  
    config.headers.Authorization = token;
  }
  return config;
});

const fetcher = (url: string) =>
  axios
    .get(`${baseURL}${url}`, {
      // withCredentials: true,
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then((x) => x.data);

export { fetcher, axios };
