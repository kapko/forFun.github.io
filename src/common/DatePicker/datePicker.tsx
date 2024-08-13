import React from 'react';
import {DatePicker, Form} from 'antd';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import './date.styles.scss'

type SelectComponentProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  placeholder: string;
  errors?: string;
  label?: string;
}

const DatePickerComponent = <T extends FieldValues>(rest: SelectComponentProps<T>) => {
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
          <DatePicker
            className='datePicker'
            {...rest}
            {...field}
            />
        </Form.Item>
      )}
    />
  );
};

export default DatePickerComponent;
