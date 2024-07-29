import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import {Alert, Button, Card} from "antd";
import InputComponent from "../../common/components/Input/Input";
import './SignIn.styles.scss';

import { AuthScheme } from "../../utils/authScheme";
import { Typography } from 'antd';
import {useAuthStore} from "../../store/actions";
import {AuthData} from "./type";
const { Title } = Typography;

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<AuthData>({
    resolver: yupResolver(AuthScheme)
  });

  const { error, email } = useAuthStore();

  const onLoginSubmit = async (data: AuthData) => {
    await email(data);
  };


  return (
    <div className="container">
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
            {error && <Alert message={error} type="error" />}
            <Link to={'/'} className='auth__link'>У вас еще нет учетной записи? <span className='link'>Зарегистрируйтесь сейчас</span></Link>
            <Button type="primary" htmlType="submit"><Title level={5}>Войти</Title></Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;