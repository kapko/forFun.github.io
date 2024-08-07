import React from 'react';
import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import {Form, Input} from "antd-mobile";
import { Typography } from "antd";
const { Text } = Typography;

type InputComponentProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  placeholder: string;
  type: string;
  error?: string;
  label?: string;
}

const InputMobile = <T extends FieldValues>({error, label, name, control, placeholder, type}:InputComponentProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field}) => (
        <Form.Item
          layout='vertical'
          label={label}
        >
          <Input {...field} type={type} placeholder={placeholder}/>
          {error && <Text type="danger">{error}</Text>}
        </Form.Item>
      )}
    />
  );
};
export default InputMobile;




