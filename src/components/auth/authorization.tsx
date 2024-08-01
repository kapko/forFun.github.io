import './style.scss';
import { AuthProps, inputFormType } from "./type";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthScheme } from "../../utils/authScheme";
import { Link } from "react-router-dom";
import { Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

export type FormValues = {
  username: string;
  password: string;
};

const Authorization: React.FC<AuthProps> = ({ error, onSubmit }) => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(AuthScheme)
  });

  const inputForm: inputFormType[] = [
    { placeholder: 'email', name: 'username', type: 'email' },
    { placeholder: 'Пароль', name: 'password', type: 'password' },
  ];

  return (
    <div className="container">
      <div className="auth">
        <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
          {inputForm.map(({ placeholder, name, type }) => (
            <label className='label' key={name}>
              <Controller
                name={name as keyof FormValues}
                control={control}
                render={({ field }) => (
                  <Input
                    className='register__input'
                    type={type}
                    placeholder={placeholder}
                    {...field}
                    prefix={type === 'email' ? <UserOutlined /> : null}
                  />
                )}
              />
              <span className='auth_error'>{errors?.[name as keyof FormValues]?.message}</span>
            </label>
          ))}
          {error && <div className='auth_error'>{error}</div>}
          <button className='auth__button'>У вас еще нет учетной записи? <Link to={'/'} className='link'>Зарегистрируйтесь сейчас</Link></button>
          <Button className='auth__button' type="primary" htmlType="submit">Войти</Button>
        </form>
      </div>
    </div>
  );
};

export default Authorization;
