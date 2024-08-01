import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { FormValues, inputFormType, RegisterProps } from "../auth/type";
import { RegisterScheme } from "../../utils/authScheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import './style.scss';
import { Button, Input } from "antd";
import { UserOutlined } from '@ant-design/icons';

const Registration: React.FC<RegisterProps> = ({ onSubmit, error }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(RegisterScheme)
  });

  const inputForm: inputFormType[] = [
    { placeholder: 'email', name: 'username', type: 'email' },
    { placeholder: 'password', name: 'password', type: 'password' },
    { placeholder: 'confirm password', name: 'confirmpassword', type: 'password' },
  ];

  return (
    <div className='container'>
      <div className='register'>
        <form className='register__form' onSubmit={handleSubmit(onSubmit)}>
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
          <div>{error}</div>
          <button className='register__button'>У вас уже есть аккаунт? <Link to={'/auth'} className='link'>Войти</Link></button>
          <Button type="primary" htmlType="submit">Зарегистрироваться</Button>
        </form>
      </div>
    </div>
  );
};

export default Registration;