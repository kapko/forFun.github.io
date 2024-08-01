export const useTranslation = () => {
    const auth = {
        signIn: 'Войти',
        signUp: "Зарегестрироваться",
    };

    const schemeText = {
        required: (name: string) => `${name} обязательно для заполнения`,
        minLength: (name: string, min: number) => `${name} должен быть не менее ${min} символов`,
        maxLength: (name: string, max: number) => `${name} должен быть не более ${max} символов`,
        passwordMismatch: 'Пароли должны совпадать',
        confirmPassword: 'Подтверждение пароля обязательно для заполнения',
        usernameMin: 'Имя пользователя должно быть не менее 3 символов',
        usernameMax: 'Имя пользователя должно быть не более 50 символов'    }

    return {
        auth,
        schemeText,
    };
}
