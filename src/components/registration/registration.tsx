import React from 'react';
import { useForm } from "react-hook-form";
import {FormValues, inputFormType, RegisterProps} from "../auth/type";
import { RegisterScheme } from "../../utils/authScheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import './style.scss';
import { Button } from "antd";
import InputComponent from "../inputComponent";

const Registration: React.FC<RegisterProps> = ({ onSubmit, error }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(RegisterScheme)
  });

  const inputForm: inputFormType<FormValues>[] = [
    { placeholder: 'email', name: 'username', type: 'email' },
    { placeholder: 'password', name: 'password', type: 'password' },
    { placeholder: 'confirm password', name: 'confirmpassword', type: 'password' },
  ];

  return (
    <div className='container'>
      <div className='register'>
        <form className='register__form' onSubmit={handleSubmit(onSubmit)}>
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
          {error && <div className='register_error'>{error}</div>}
          <Link to={'/auth'} className='register__button'>У вас уже есть аккаунт? <span  className='link'>Войти</span></Link>
          <Button type="primary" htmlType="submit">Зарегистрироваться</Button>
        </form>
      </div>
    </div>
  );
};

export default Registration;