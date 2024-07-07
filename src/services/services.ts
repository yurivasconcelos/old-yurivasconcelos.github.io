import { poster, fetcher } from './fetcher';

export class slackMessageService {
  static postSlackMessage(isLocal: boolean, message: string) {
    return poster(isLocal, '/slackTest', { text: message });
  }
}

export class testService {
  static getTest = (isLocal: boolean) => () => fetcher(isLocal, '/test');
  static getGoogle = (isLocal: boolean) => () => fetcher(isLocal, '/test/google');
}
