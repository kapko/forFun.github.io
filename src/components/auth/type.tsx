import { SubmitHandler } from 'react-hook-form';


export type AuthData = {
  username: string;
  password: string;
};
export type FormValues = AuthData & {
  confirmpassword: string;
};

type LoginProps = {
  error: string | null;
};

export type AuthProps = LoginProps & {
  onSubmit: SubmitHandler<AuthData>;
};

export type RegisterProps = LoginProps & {
  onSubmit: SubmitHandler<FormValues>;
};