import * as yup from 'yup';

const requiredStringWithName = (name = 'Поле') => yup.string().required(`${name} обязательно для заполнения`).trim();

const passwordValidation = yup.string()
  .min(6, 'Пароль должен быть не менее 6 символов')
  .required('Пароль обязательно для заполнения');

const scheme = {
  username: requiredStringWithName('Имя пользователя').min(3, 'Имя пользователя должно быть не менее 3 символов')
    .max(50, 'Имя пользователя должно быть не более 50 символов'),
  password: passwordValidation,
};

export const AuthScheme = yup.object({
  username: scheme.username,
  password: scheme.password,
});

export const RegisterScheme = yup.object({
  ...scheme,
  confirmpassword: passwordValidation
    .oneOf([yup.ref('password')], 'Пароли должны совпадать')
    .required('Подтверждение пароля обязательно для заполнения')
});