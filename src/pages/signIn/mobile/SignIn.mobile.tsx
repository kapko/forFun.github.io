import {useForm} from "react-hook-form";
import {Form, Button} from "antd-mobile";
import { Typography, Flex } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import useValidationSchemes from "../../../validation/schema";
import InputMobile from "@common/components/mobile/Input/Input.mobile";
import {AuthData} from "@/store/auth/auth.type";
import {SignInFooter} from "@/pages/signIn/mobile/SignInFooter";
import "./styles.scss"

const { Title } = Typography;
function MyForm() {
  const { AuthScheme} = useValidationSchemes();
  const { handleSubmit, formState: { errors } , control } = useForm<AuthData>({ resolver: yupResolver(AuthScheme) });
  const onSubmit = (data: AuthData) => console.log(data,'data');

  return (
    <>
      <Flex justify="center"><Title level={4}>Вход</Title></Flex>
      <Form className="sign-form" onFinish={handleSubmit(onSubmit)} footer={<SignInFooter />}>
        {/*<Form.Header>Вход</Form.Header>*/}
        <InputMobile
          label='Имя'
          name='username'
          control={control}
          placeholder='Enter your user name'
          type='text'
          error={errors.username?.message}
        />
        <InputMobile
          label='Пароль'
          name='password'
          errors={errors.password?.message}
          control={control}
          placeholder='Enter your password'
          type='text'
        />
      </Form>
    </>
  );
}

export default MyForm;
