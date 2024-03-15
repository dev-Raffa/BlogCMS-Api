import { signinArgs, signupArgs } from '../args/args.interface';

export interface AuthService {
  signin: (args: signinArgs) => Promise<object>;
  signout: () => Promise<void>;
  signup: (args: signupArgs) => Promise<object>;
}
