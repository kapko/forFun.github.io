import * as yup from 'yup';

  const schemeText = {
    required: (name: string) => `${name} обязательно для заполнения`,
    minLength: (name: string, min: number) => `${name} должен быть не менее ${min} символов`,
    usernameMin: 'Имя пользователя должно быть не менее 3 символов',
    usernameMax: 'Имя пользователя должно быть не более 50 символов'    }

  const useValidationSchemes = () => {

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
    };
  };

  export default useValidationSchemes;