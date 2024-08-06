import * as yup from 'yup';
import { useTranslation } from "@common/locale/translation";

const useValidationSchemes = () => {
  const { schemeText } = useTranslation();

  const requiredStringWithName = (name: string = schemeText.field) => yup.string().required(schemeText.required(name)).trim();

  const passwordValidation = yup.string()
    .min(6, schemeText.minLength(schemeText.password, 6))
    .required(schemeText.required(schemeText.password));

  const scheme = {
    username: requiredStringWithName('Имя пользователя')
      .min(3, schemeText.minLength(schemeText.username, 3))
      .max(50, schemeText.minLength(schemeText.username, 50)),
    password: passwordValidation,
  };

  return {
    AuthScheme: yup.object({
      username: scheme.username,
      password: scheme.password,
    }),
    useAuthSchema: yup.object({
      ...scheme,
      confirmPassword: passwordValidation
        .oneOf([yup.ref('password')], schemeText.passwordMismatch)
        .required(schemeText.confirmPassword)
    }),
  };
};

export default useValidationSchemes;
