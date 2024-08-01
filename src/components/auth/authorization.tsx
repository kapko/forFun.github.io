import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { Button, Card } from "antd";
import InputComponent from "../inputComponent";
import Error from "../error";
import './style.scss';

import { AuthData, AuthProps } from "./type";
import { AuthScheme } from "../../utils/authScheme";

const Authorization: React.FC<AuthProps<AuthData>> = ({ error, onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<AuthData>({
    resolver: yupResolver(AuthScheme)
  });

  return (
    <div className="container">
      <div className="auth">
        <Card className='card'>
          <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
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
            <Error error={error}/>
            <Link to={'/'} className='auth__link'>У вас еще нет учетной записи? <span className='link'>Зарегистрируйтесь сейчас</span></Link>
            <Button type="primary" htmlType="submit">Войти</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Authorization;