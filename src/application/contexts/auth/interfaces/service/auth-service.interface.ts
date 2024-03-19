import { signinArgs, signupArgs } from '../args/args.interface';
import { ISignupResponse } from '../responses/reponses-auth.interface';

export interface IAuthService {
  signin: (args: signinArgs) => Promise<object>;
  signout: () => Promise<void>;
  signup: (args: signupArgs) => Promise<ISignupResponse>;
}
