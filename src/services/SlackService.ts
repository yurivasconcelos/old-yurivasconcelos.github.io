import { fetcher } from './fetcher';

export async function sendMessage(text: string, isLocal: boolean) {
  console.log(`sending slack message ${text} - local enviroment ${isLocal}`);
  const url = 'slackTest';
  const response = await fetcher(url, 'POST', { text: text });
  console.log(response);
}
