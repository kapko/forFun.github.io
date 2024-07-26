import { AuthData } from "../../components/auth/type";
import Authorization from "../../components/auth/authorization";
import { useAuthStore } from "../../store/actions";
const LoginContainer = () => {
  const { error, email } = useAuthStore();

  const onLoginSubmit = async (data: AuthData) => {
    await email(data);
  };

  return <Authorization error={error} onSubmit={onLoginSubmit}/>
};

export default LoginContainer;