import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { Button, Card } from "antd";
import InputComponent from "../inputComponent";
import Error from "../error";
import './style.scss';

import { FormValues, AuthProps } from "../auth/type";
import { RegisterScheme } from "../../utils/authScheme";

const Registration: React.FC<AuthProps<FormValues>> = ({ onSubmit, error }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(RegisterScheme)
  });

  return (
    <div className='container'>
      <div className='register'>
        <Card className='card'>
          <form className='register__form' onSubmit={handleSubmit(onSubmit)}>
            <InputComponent
              control={control}
              name="username"
              placeholder="Email"
              type="email"
              errors={errors.username?.message}
            />
            <InputComponent
              control={control}
              name="password"
              placeholder="Пароль"
              type="password"
              errors={errors.password?.message}
            />
            <InputComponent
              control={control}
              name="confirmpassword"
              placeholder="Подтвердите пароль"
              type="password"
              errors={errors.confirmpassword?.message}
            />
            <Error error={error}/>
            <Link to={'/auth'} className='register__link'>У вас уже есть аккаунт? <span className='link'>Войти</span></Link>
            <Button type="primary" htmlType="submit">Зарегистрироваться</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Registration;