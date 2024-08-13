import React from 'react';
import {Form, Button} from 'antd';
import MainLayout from "@common/layouts/main/MainLayout";
import "./procuring.styles.scss";
import InputComponent from "@common/components/Input/Input";
import {useForm} from "react-hook-form";
import SelectComponent from "@common/components/Select/select";
import UploadComponent from "@common/components/Upload/upload";
import TextAreaComponent from "@common/components/TextArea/textArea";
import DatePickerComponent from "@common/DatePicker/datePicker";
import {ProcuringFormData} from "@/pages/procuring/type";


const ProcuringPage: React.FC = () => {
  const [form] = Form.useForm();

  const {
    control,
    handleSubmit
  } = useForm<ProcuringFormData>({
  });

  const onFinish = () => {
    // console.log('Success:', values);
  };

  const user = [
    { id: 1, name: "John Doe", roles: [{ id: 1, name: "Admin" }] },
    { id: 2, name: "Jane Doe", roles: [{ id: 2, name: "User" }] },
  ];
  return(
    <MainLayout>
      <Form className="procuring-form" form={form} layout="vertical" onFinish={handleSubmit(onFinish)}>
        <InputComponent
          control={control}
          name={'title'}
          placeholder={'Название'}
          type={'text'}
          label='Название'/>
        <SelectComponent
          control={control}
          name='user_id'
          placeholder="Please select a category"
          label='User'
          options={user.map(u => ({ value: u.id, label: u.name }))}/>
        <SelectComponent
          control={control}
          name='material_id'
          placeholder='select a material'
          label='Material'
          options={user.map(u => ({ value: u.id, label: u.name }))}
          />
       <InputComponent
         control={control}
         name='coil_count'
         placeholder=''
         type={'text'}
         label='Общ. количество рулонов'/>
        <SelectComponent
          control={control}
          name='material_unit_id'
          placeholder='Select a unit'
          label='Material Unit'/>
        <InputComponent
          control={control}
          name='unit_value'
          placeholder=''
          type={'text'}
          label={'Сколько метров в одном кг'}/>
        <InputComponent
          control={control}
          name={'price'}
          placeholder={''}
          type={'number'}
          label={'Цена за метр/кг/ярд'}/>
        <SelectComponent
          control={control}
          name={'currency_id'}
          placeholder={'Select a currency'}
          label={'Currency'}/>
        <InputComponent
          control={control}
          name={'currency_value'}
          placeholder={''}
          type={'number'}
          label={'Курс валют на данный момент закупки'}/>
        <InputComponent
          control={control}
          name={'spent_count'}
          placeholder={''}
          type={'number'}
          label={'Сколько потрачено в валюте'}/>
        <UploadComponent
          control={control}
          name={'receipts_photo'}
          label={'Чеки фото'}/>
        <TextAreaComponent
          control={control}
          name={'notes'}
          placeholder={''}
          rows={4}
          label={'Примечания'}/>
        <DatePickerComponent
          control={control}
          name={'date'}
          placeholder={'Дата закупки'}
          label={'Дата закупки'}
        />
        <SelectComponent
          control={control}
          name={'approved_by'}
          placeholder={''}
          label={'Проверено кем?'}/>
        <DatePickerComponent
          control={control}
          name={'date'}
          placeholder={'Дата проверки'}
          label={'Дата проверки'}
        />
        <InputComponent
          control={control}
          name={'created_at'}
          placeholder={''}
          type={'text'}
          label={'Время создания'}/>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </MainLayout>
  )
}
export default ProcuringPage;