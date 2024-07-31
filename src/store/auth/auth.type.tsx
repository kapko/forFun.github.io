export type AuthData = {
  username: string;
  password: string;
};
export type FormValues = AuthData & {
  confirmPassword: string;
};

export type LoginProps = {
  signInError: string | null;
  signUpError: string | null;
};
