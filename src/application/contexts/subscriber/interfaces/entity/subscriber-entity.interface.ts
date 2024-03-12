export interface ISubscriber {
  id: number;
  name: string;
  email: string;
  password: string;
  key?: string;
  notify: boolean;
}
