import {useForm} from "react-hook-form";
import {Form, Button, Space} from "antd-mobile";
import CustomInput from "./customInput/customInput";
import './index.scss'
import {FormData} from "./type";
import { yupResolver } from "@hookform/resolvers/yup";
import useValidationSchemes from "../../validation/schema";

function MyForm() {
  const { AuthScheme} = useValidationSchemes();
  const { handleSubmit,
    formState: { errors },
    control } =
    useForm<FormData>({ resolver: yupResolver(AuthScheme) });

  const onSubmit = (data: FormData) => console.log(data,'data');

  return (
    <Form onFinish={handleSubmit(onSubmit)}
          footer={
        <>
          <Button block type='submit'
                  color='primary'
                  size='large'
          style={{marginBottom:20}}>
            Войти
          </Button>
          Или <a href="#">зарегистрируйтесь сейчас</a>
        </>
        }>
      <Form.Header>Вход</Form.Header>
      <CustomInput
        label='Имя'
        name='username'
        control={control}
        rules={{ required:'username is required' }}
        placeholder='Enter your user name'
        type='text'
      />
      {errors.username && (
        <p className='error-message'>{errors.username.message}</p>
      )}
      <CustomInput
        label='Пароль'
        name='password'
        control={control}
        rules={{ required:'password is required' }}
        placeholder='Enter your password'
        type='text'
      />
      {errors.password && (
        <p className='error-message'>{errors.password.message}</p>
      )}
    </Form>
  );
}

export default MyForm;