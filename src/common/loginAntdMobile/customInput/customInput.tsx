import React from 'react';
import {Controller} from 'react-hook-form';
import { Form, Input} from "antd-mobile";
import {CustomInputProps} from "../type";

const CustomInput = ({ label,
                       name,
                       control,
                       rules,
                       placeholder,
                       type,
                     }: CustomInputProps) => {
  return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState:{error} }) => (
          <Form.Item
            layout='horizontal'
            label={label}
            help={error ? error.message : null}
          >
            <Input {...field} type={type} placeholder={placeholder} />
          </Form.Item>
        )}
      />
  );
};
export default CustomInput;