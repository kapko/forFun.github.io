import { FormValues } from "../../components/auth/type";
import Registration from "../../components/registration/registration";
import { useRegisterStore} from "../../store/actions";

const RegistrationContainers = () => {
  const { error, email } = useRegisterStore();

  const onSubmit = async (data: FormValues) => {
    await email(data.username, data.password);
  };
  return <Registration onSubmit={onSubmit} error={error}/>
};

export default RegistrationContainers;