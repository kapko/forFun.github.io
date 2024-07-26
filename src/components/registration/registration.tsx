import React from 'react';
import { useForm } from "react-hook-form";
import { FormValues, RegisterProps} from "../auth/type";
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

  return (
    <div className='container'>
      <div className='register'>
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
          {error && <div className='register_error'>{error}</div>}
          <Link to={'/auth'} className='register__button'>У вас уже есть аккаунт? <span  className='link'>Войти</span></Link>
          <Button type="primary" htmlType="submit">Зарегистрироваться</Button>
        </form>
      </div>
    </div>
  );
};

export default Registration;