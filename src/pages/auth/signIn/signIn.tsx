import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { Button, Flex, Typography } from "antd";
import { useAuthStore } from "@/store/auth/auth.store";
import { Paths } from "@/routers/paths";
import { useTranslation } from "@common/locale/translation";
import useValidationSchemes from "@common/validations/authScheme";
import AuthWrapper from "@/pages/auth/authWrapper";
import { AuthData } from "@/store/auth/auth.type";
import InputComponent from "@common/components/web/Input/Input";
import AlertInfo from "@common/components/web/AlertInfo/AletInfo";
const { Title,Text} = Typography;

const SignIn = () => {
  const { signInError, signIn } = useAuthStore();
  const { auth } = useTranslation();
  const { AuthScheme } = useValidationSchemes();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<AuthData>({
    resolver: yupResolver(AuthScheme)
  });
  const onLoginSubmit = async (data: AuthData) => {
    await signIn(data);
  };

  return (
    <AuthWrapper
      title="Вход"
    >
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        <Flex justify='center' align='center' className="form">
          <InputComponent
            control={control}
            name="username"
            placeholder="Email"
            type="email"
            errors={errors.username?.message}
            label="Почта"
          />
          <InputComponent
            control={control}
            name="password"
            placeholder="Пароль"
            type="password"
            errors={errors.password?.message}
            label="Пароль"
          />
          <AlertInfo message={signInError} type='error' />
          <Text className='title'>У вас еще нет учетной записи? <Link to={Paths.SIGN_UP} target="_blank">Зарегистрируйтесь сейчас</Link></Text>
          <Button type="primary" htmlType="submit"><Title level={5}>{auth.signIn}</Title></Button>
        </Flex>
      </form>
    </AuthWrapper>
  );
};

export default SignIn;