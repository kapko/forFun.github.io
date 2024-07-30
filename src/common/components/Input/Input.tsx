import React from 'react';
import {Form, Input} from 'antd';
import {Control, Controller} from 'react-hook-form';
import { FormValues } from "../../../pages/signIn/type";

interface InputComponentProps<T> {
  control: Control<any>;
  name: keyof T;
  placeholder: string;
  type: string;
  errors?: string;
  label: string;
}

const InputComponent = <T extends FormValues>({ control, name, placeholder, type, errors, label }: InputComponentProps<T>) => {
  return (
    <Controller
      name={name as string}
      control={control}
      render={({ field }) => (
        <Form.Item
          label={label}
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