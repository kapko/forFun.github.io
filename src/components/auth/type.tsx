import { SubmitHandler } from 'react-hook-form';

export type FormValues = {
  username: string;
  password: string;
  confirmpassword: string;
};

export type AuthData = {
  username: string;
  password: string;
};

export type inputFormType = {
  placeholder: string;
  name: keyof FormValues | keyof AuthData;
  type: string;
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