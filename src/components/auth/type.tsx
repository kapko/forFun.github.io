import { SubmitHandler, FieldValues } from 'react-hook-form';

export type AuthData = {
  username: string;
  password: string;
};
export type FormValues = AuthData & {
  confirmpassword: string;
};

export type LoginProps = {
  error: string | null;
};

export type AuthProps<T extends FieldValues> = LoginProps & {
  onSubmit: SubmitHandler<T>;
};