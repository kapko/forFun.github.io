import React from 'react';
import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import { UserOutlined } from '@ant-design/icons';

interface InputComponentProps<T> {
  control: any;
  name: keyof T;
  placeholder: string;
  type: string;
  errors?: string;
}

const InputComponent = <T,>({ control, name, placeholder, type, errors }: InputComponentProps<T>) => {
  return (
    <label className='label'>
      <Controller
        name={name as string}
        control={control}
        render={({ field }) => (
          <Input
            className='register__input'
            type={type}
            placeholder={placeholder}
            {...field}
          />
        )}
      />
      {errors && <span className='auth_error'>{errors}</span>}
    </label>
  );
};

export default InputComponent;