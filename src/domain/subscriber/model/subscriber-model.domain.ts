export interface ISubscriber {
  name: string;
  email: string;
  password: string;
  key?: string;
  notify: boolean;
}
