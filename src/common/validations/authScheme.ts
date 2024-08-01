import * as yup from 'yup';
import { useTranslation } from '../locale/translation';

const useValidationSchemes = () => {
  const { schemeText } = useTranslation();

  const requiredStringWithName = (name: string = 'Поле') => yup.string().required(schemeText.required(name)).trim();

  const passwordValidation = yup.string()
    .min(6, schemeText.minLength('Пароль', 6))
    .required(schemeText.required('Пароль'));

  const scheme = {
    username: requiredStringWithName('Имя пользователя')
      .min(3, schemeText.usernameMin)
      .max(50, schemeText.usernameMax),
    password: passwordValidation,
  };

  return {
    AuthScheme: yup.object({
      username: scheme.username,
      password: scheme.password,
    }),
    RegisterScheme: yup.object({
      ...scheme,
      confirmPassword: passwordValidation
        .oneOf([yup.ref('password')], schemeText.passwordMismatch)
        .required(schemeText.confirmPassword)
    }),
  };
};

export default useValidationSchemes;
