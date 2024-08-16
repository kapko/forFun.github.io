import React from 'react';
import {Form, Input, Typography} from 'antd';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import './textArea.styles.scss'

const { TextArea } = Input;
const { Text } = Typography
type SelectComponentProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  placeholder: string;
  errors?: string;
  label?: string;
  rows:number;
}

const TextAreaComponent = <T extends FieldValues>(rest: SelectComponentProps<T>) => {
  const { errors, label} = rest;
  return (
    <Controller
      {...rest}
      render={({ field }) => (
        <Form.Item
          label={label ? label : null}
          name={field.name as string}
        >
          <TextArea
            className='textarea'
            {...rest}
            {...field}
          />
          {errors && <Text type="danger">{errors}</Text>}
        </Form.Item>
      )}
    />
  );
}
export default TextAreaComponent;