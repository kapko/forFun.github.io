import React from 'react';
import {Form, Select, Typography} from 'antd';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import './select.styles.scss'

const { Text } = Typography
type SelectComponentProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  placeholder: string;
  errors?: string;
  label?: string;
  options?: { value: string | number; label: string }[];
}

const SelectComponent = <T extends FieldValues>(rest: SelectComponentProps<T>) => {
  const { errors, label} = rest;

  return (
    <Controller
      {...rest}
      render={({ field }) => (
        <Form.Item
          label={label ? label : null}
          name={field.name as string}
        >
         <Select
           className='select'
           {...rest}
           {...field}/>
          {errors && <Text type="danger">{errors}</Text>}
        </Form.Item>
      )}
    />
  );
};

export default SelectComponent;
