import {useForm} from "react-hook-form";
import {Form, Button} from "antd-mobile";
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
            Log In
          </Button>
          Or <a href="#">register now!</a>
        </>
        }>
      <Form.Header>Login Form</Form.Header>
      <CustomInput
        label='Username'
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
        label='password'
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