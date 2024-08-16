import React from 'react';
import { Form, Input } from 'antd';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import './input.styles.scss'

type InputComponentProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  placeholder: string;
  type: string;
  errors?: string;
  label?: string;
}

const InputComponent = <T extends FieldValues>(rest: InputComponentProps<T>) => {
  const { errors, label} = rest;

  return (
    <Controller
      {...rest}
      render={({ field }) => (
        <Form.Item
          label={label ? label : null}
          name={field.name as string}
          rules={[{ required: false }]}
          validateStatus={errors ? "error" : ""}
          help={errors}
        >
          <Input
            className='input'
            {...rest}
            {...field}
          />
        </Form.Item>
      )}
    />
  );
};

export default InputComponent;
