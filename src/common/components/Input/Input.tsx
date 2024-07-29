import React from 'react';
import {Form, Input} from 'antd';
import { Controller } from 'react-hook-form';

interface InputComponentProps<T> {
  control: any;
  name: keyof T;
  placeholder: string;
  type: string;
  errors?: string;
  label: string
}

const InputComponent = <T,>({ control, name, placeholder, type, errors, label }: InputComponentProps<T>) => {
  return (
      <Controller
        name={name as string}
        control={control}
        render={({ field }) => (
          <Form.Item
            label={label as string}
            name={name as string}
            rules={[{ required: true }]}
            validateStatus={errors ? "error" : ""}
            help={errors}
          >
            <Input
              className='register__input'
              type={type}
              placeholder={placeholder}
              {...field}
            />
          </Form.Item>
        )}
      />
  );
};

export default InputComponent;