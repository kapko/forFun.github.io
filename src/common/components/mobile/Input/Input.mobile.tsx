import React from 'react';
import {Controller} from 'react-hook-form';
import {Form, Input, InputProps} from "antd-mobile";
import { Typography } from "antd";
const { Text } = Typography;

const InputMobile: React.FC<InputProps & Record<string, any>> = ({error, label, name, control, rules, placeholder, type}) => {
  return (
    <Controller
      name={`${name}`}
      control={control}
      rules={rules}
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
