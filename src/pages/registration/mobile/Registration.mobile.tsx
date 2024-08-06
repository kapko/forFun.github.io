import React from "react";
import {useAuthStore} from "@/store/auth/auth.store";
import useValidationSchemes from "@common/validations/authScheme";
import {useForm} from "react-hook-form";
import { FormValues} from "@/store/auth/auth.type";
import {yupResolver} from "@hookform/resolvers/yup";
import {Flex, Typography} from "antd";
import {Card} from 'antd-mobile'
import {Form} from "antd-mobile";
import InputMobile from "@common/components/mobile/Input/Input.mobile";
import {FooterRegistration} from "@/pages/registration/mobile/FooterRegistration";

const { Title} = Typography;
const RegistrationMobile = () => {
  const { signUp } = useAuthStore();

  const { RegisterScheme} = useValidationSchemes();

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(RegisterScheme)
  });

  const onSubmit = async (data: FormValues) => {
    await signUp(data);
  };

  return (
      <Card>
        <Flex justify="center"><Title level={4}>Регистрация</Title></Flex>
        <Form className="sign-form" onFinish={handleSubmit(onSubmit)} footer={<FooterRegistration/>}>
          <InputMobile
            label='Почта'
            name='username'
            control={control}
            placeholder='Enter your user name'
            type='email'
            error={errors.username?.message}
          />
          <InputMobile
            label='Пароль'
            name='password'
            error={errors.password?.message}
            control={control}
            type='password'
            placeholder='Enter your password'
          />
          <InputMobile
            control={control}
            name="confirmPassword"
            placeholder="Подтвердите пароль"
            type="password"
            error={errors.confirmPassword?.message}
            label="Подтвердите пароль"
          />
        </Form>
      </Card>
  );
}
export default RegistrationMobile;