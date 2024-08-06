import React from "react";
import {useForm} from "react-hook-form";
import {Form} from "antd-mobile";
import { Typography, Flex } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import useValidationSchemes from "../../../validation/schema";
import InputMobile from "@common/components/mobile/Input/Input.mobile";
import {AuthData} from "@/store/auth/auth.type";
import {SignInFooter} from "@/pages/signIn/mobile/SignInFooter";
import "./styles.scss"
import {useAuthStore} from "@/store/auth/auth.store";

const { Title } = Typography;
function MyForm() {
  const {  signIn } = useAuthStore();
  const { AuthScheme} = useValidationSchemes();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<AuthData>({
    resolver: yupResolver(AuthScheme)
  });

  const onSubmit = async (data: AuthData) => {
    await signIn(data);
  };

  return (
    <>
      <Flex justify="center"><Title level={4}>Вход</Title></Flex>
      <Form className="sign-form" onFinish={handleSubmit(onSubmit)} footer={<SignInFooter />}>
        <InputMobile
          label='Имя'
          name='username'
          control={control}
          placeholder='Enter your user name'
          type='text'
          error={errors.username?.message}
        />
        <InputMobile
          control={control}
          name="password"
          placeholder="Пароль"
          type="password"
          error={errors.password?.message}
          label="Пароль"
        />
      </Form>
    </>
  );
}

export default MyForm;
