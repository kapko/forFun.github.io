import React from "react";
import {Control, useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { Button, Card } from "antd";
import InputComponent from "../../common/components/Input/Input";
import './registration.styles.scss';

import { FormValues } from "../../store/auth/auth.type";
import { RegisterScheme } from "../../common/validations/authScheme";
import { Typography } from 'antd';
import { useAuthStore } from "../../store/auth/auth.store";
import AlertInfo from "../../common/components/AlertInfo/AletInfo";
import { Paths } from "../../routers/paths";
import { useTranslation } from "../../common/locale/translation";
const { Title,Text} = Typography;

const Registration = () => {
  const { signInError, signUp } = useAuthStore();
  const { auth } = useTranslation();

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(RegisterScheme)
  });

  const onSubmit = async (data: FormValues) => {
    await signUp(data);
  };

  return (
    <div className='container'>
      <div className='register'>
        <Card className='card'>
          <Title className='title' level={2}>Регистрация</Title>
          <form className='register__form' onSubmit={handleSubmit(onSubmit)}>
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
            <InputComponent
              control={control}
              name="confirmPassword"
              placeholder="Подтвердите пароль"
              type="password"
              errors={errors.confirmPassword?.message}
              label="Подтвердите пароль"
            />
            <AlertInfo message={signInError} type='error' />
            <Text>У вас уже есть аккаунт? <Link to={Paths.SIGN_IN} target="_blank">{auth.signIn}</Link></Text>
            <Button type="primary" htmlType="submit"><Title level={5}>{auth.signUp}</Title></Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
