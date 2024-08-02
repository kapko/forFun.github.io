import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { Button, Card, Flex, Typography } from "antd";
import './registration.styles.scss';
import { useAuthStore } from "@/store/auth/auth.store";
import { useTranslation } from "@common/locale/translation";
import useValidationSchemes from "@common/validations/authScheme";
import { FormValues } from "@/store/auth/auth.type";
import AlertInfo from "@common/components/AlertInfo/AletInfo";
import { Paths } from "@/routers/paths";
import InputComponent from "@common/components/Input/Input";
const { Title,Text} = Typography;

const Registration = () => {
  const { signInError, signUp } = useAuthStore();
  const { auth } = useTranslation();
  const { RegisterScheme} = useValidationSchemes();

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(RegisterScheme)
  });

  const onSubmit = async (data: FormValues) => {
    await signUp(data);
  };

  return (
    <Flex justify='center' align='center' className='register'>
      <Card className='card'>
        <Title className='title' level={2}>Регистрация</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex justify='center' align='center' className='register__form'>
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
      </Card>
    </Flex>
  );
};

export default Registration;
