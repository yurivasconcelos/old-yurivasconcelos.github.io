import { fetcher } from './fetcher';


const url = '/slackTest'
const method = 'POST'

export async function sendMessage(text: string, isLocal: boolean = true) {
  const response = await fetcher(isLocal, url, method, { text: text });
  return response;
}
