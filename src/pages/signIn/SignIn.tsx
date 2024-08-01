import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { Button, Card } from "antd";
import InputComponent from "../../common/components/Input/Input";
import './SignIn.styles.scss';

import useValidationSchemes from "../../common/validations/authScheme";
import { Typography } from 'antd';
import { useAuthStore } from "../../store/auth/auth.store";
import { AuthData } from "../../store/auth/auth.type";
import AlertInfo from "../../common/components/AlertInfo/AletInfo";
import { Paths } from "../../routers/paths";
import { useTranslation } from "../../common/locale/translation";
const { Title, Text } = Typography;

const SignIn = () => {
  const { signInError, signIn } = useAuthStore();
  const { auth } = useTranslation();
  const { AuthScheme} = useValidationSchemes();

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
    <div className="auth">
      <Card className='card'>
        <Title className='title' level={2}>Вход</Title>
        <form className="auth__form" onSubmit={handleSubmit(onLoginSubmit)}>
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
          <Text className='auth__link'>У вас еще нет учетной записи? <Link to={Paths.SIGN_UP} target="_blank">Зарегистрируйтесь сейчас</Link></Text>
          <Button type="primary" htmlType="submit"><Title level={5}>{auth.signIn}</Title></Button>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;
