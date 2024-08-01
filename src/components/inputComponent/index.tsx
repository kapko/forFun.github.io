import React from 'react';
import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import { UserOutlined } from '@ant-design/icons';

interface InputComponentProps<T> {
  control: any;
  name: keyof T;
  placeholder: string;
  type: string;
  error?: string;
}

const InputComponent = <T,>({ control, name, placeholder, type, error }: InputComponentProps<T>) => {
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
            prefix={type === 'email' ? <UserOutlined /> : null}
          />
        )}
      />
      {error && <span className='auth_error'>{error}</span>}
    </label>
  );
};

export default InputComponent;