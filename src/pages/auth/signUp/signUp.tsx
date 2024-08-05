import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { Button, Flex, Typography } from "antd";
import { useAuthStore } from "@/store/auth/auth.store";
import { useTranslation } from "@common/locale/translation";
import useValidationSchemes from "@common/validations/authScheme";
import InputComponent from "@common/components/Input/Input";
import AlertInfo from "@common/components/AlertInfo/AletInfo";
import { Paths } from "@/routers/paths";
import { FormValues } from "@/store/auth/auth.type";
import AuthWrapper from "@/pages/auth/authWrapper";
const { Title,Text} = Typography;

const Registration = () => {
  const { signInError, signUp } = useAuthStore();
  const { auth } = useTranslation();
  const { useAuthSchema } = useValidationSchemes();

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(useAuthSchema)
  });

  const onSubmit = async (data: FormValues) => {
    await signUp(data);
  };

  return (
    <AuthWrapper
      title="Регистрация"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex justify='center' align='center' className='form'>
          <InputComponent
            control={control}
            name="username"
            placeholder="Email"
            type="email"
            errors={errors.username?.message}
            label="Почта"
          />
          <InputComponent
            control={control}
            name="password"
            placeholder="Пароль"
            type="password"
            errors={errors.password?.message}
            label="Пароль"
          />
          <InputComponent
            control={control}
            name="confirmPassword"
            placeholder="Подтвердите пароль"
            type="password"
            errors={errors.confirmPassword?.message}
            label="Подтвердите пароль"
          />
          <AlertInfo message={signInError} type='error'/>
          <Text className='title'>У вас уже есть аккаунт? <Link to={Paths.SIGN_IN} target="_blank">{auth.signIn}</Link></Text>
          <Button className='title' type="primary" htmlType="submit"><Title level={5}>{auth.signUp}</Title></Button>
        </Flex>
      </form>
    </AuthWrapper>
  );
};

export default Registration;
