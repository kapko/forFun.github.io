import './style.scss';
import { AuthData, AuthProps, inputFormType } from "./type";
import React from "react";
import { useForm, Controller } from "react-hook-form";
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

  const inputForm: inputFormType<AuthData>[] = [
    { placeholder: 'email', name: 'username', type: 'email' },
    { placeholder: 'Пароль', name: 'password', type: 'password' },
  ];

  return (
    <div className="container">
      <div className="auth">
        <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
          {inputForm.map(({ placeholder, name, type }) => (
            <InputComponent
              key={name}
              control={control}
              name={name}
              placeholder={placeholder}
              type={type}
              error={errors[name]?.message}
            />
          ))}
          {error && <div className='auth_error'>{error}</div>}
          <Link to={'/'} className='auth__button'>У вас еще нет учетной записи? <span className='link'>Зарегистрируйтесь сейчас</span></Link>
          <Button className='auth__button' type="primary" htmlType="submit">Войти</Button>
        </form>
      </div>
    </div>
  );
};

export default Authorization;