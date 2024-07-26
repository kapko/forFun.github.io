import './style.scss';
import { AuthData, AuthProps } from "./type";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthScheme } from "../../utils/authScheme";
import { Link } from "react-router-dom";
import { Button } from "antd";
import InputComponent from "../inputComponent";

const Authorization: React.FC<AuthProps> = ({ error, onSubmit }) => {
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
          {error && <div className='auth_error'>{error}</div>}
          <Link to={'/'} className='auth__button'>У вас еще нет учетной записи? <span className='link'>Зарегистрируйтесь сейчас</span></Link>
          <Button className='auth__button' type="primary" htmlType="submit">Войти</Button>
        </form>
      </div>
    </div>
  );
};

export default Authorization;