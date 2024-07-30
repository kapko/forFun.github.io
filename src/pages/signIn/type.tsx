export type AuthData = {
  username: string;
  password: string;
};
export type FormValues = AuthData & {
  confirmPassword: string;
};

export type LoginProps = {
  error: string | null;
};
