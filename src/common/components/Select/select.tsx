import React from 'react';
import {Form, Select} from 'antd';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

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
          rules={[{ required: true }]}
          validateStatus={errors ? "error" : ""}
          help={errors}
        >
         <Select
           {...rest}
           {...field}/>
        </Form.Item>
      )}
    />
  );
};

export default SelectComponent;
