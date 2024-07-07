import { fetcher } from './fetcher';

const url = '/slackTest'
const method = 'POST'

export async function sendMessage(text: string, isLocal: boolean) {
  console.log(`sending slack message ${text} - local enviroment ${isLocal}`);
  const response = await fetcher(url, method, { text: text });
  console.log(response);
}
