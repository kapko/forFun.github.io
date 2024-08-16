import React from 'react';
import {Form, Button} from 'antd';
import MainLayout from "@common/layouts/main/MainLayout";
import "./procuring.styles.scss";
import {useForm} from "react-hook-form";
import SelectComponent from "@common/components/Select/select";
import UploadComponent from "@common/components/Upload/upload";
import TextAreaComponent from "@common/components/TextArea/textArea";
import DatePickerComponent from "@common/components/DatePicker/datePicker";
import InputComponent from "@common/components/web/Input/Input";
import useValidationSchemesForm from "@common/validations/formSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import {ProcuringFormData} from "@/store/procuring/type";
import {useProcuringStore} from "@/store/procuring/procuring.store";


const ProcuringPage: React.FC = () => {
  const { FormScheme } = useValidationSchemesForm();
  const [form] = Form.useForm();
  const {  add } = useProcuringStore();

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<ProcuringFormData>({
    resolver: yupResolver(FormScheme)
  });
  const onSubmit = async (data: ProcuringFormData) => {
      await add(data);
  };
  const user = [
    { id: 1, name: "John Doe", roles: [{ id: 1, name: "Admin" }] },
    { id: 2, name: "Jane Doe", roles: [{ id: 2, name: "User" }] },
  ];
  return(
    <MainLayout>
      <Form className="procuring-form" form={form} layout="vertical"
            onFinish={handleSubmit(onSubmit)}
      >
        <InputComponent
          control={control}
          name={'title'}
          placeholder={'Название'}
          type={'text'}
          errors={errors.title?.message}
          label='Название'/>
        <SelectComponent
          control={control}
          name='user_id'
          placeholder="Пожалуйста, выберите категорию"
          label='пользователь'
          errors={errors.user_id?.message}
          options={user.map(u => ({value: u.id, label: u.name}))}/>
        <SelectComponent
          control={control}
          name='material_id'
          placeholder='выберите материал'
          label='материал'
          errors={errors.material_id?.message}
          options={user.map(u => ({value: u.id, label: u.name}))}
        />
        <InputComponent
          control={control}
          name='coil_count'
          placeholder=''
          type={'text'}
          errors={errors.coil_count?.message}
          label='Общ. количество рулонов'/>
        <SelectComponent
          control={control}
          name='material_unit_id'
          placeholder='Выберите единицу измерения'
          errors={errors.material_unit_id?.message}
          options={user.map(u => ({value: u.id, label: u.name}))}
          label='Единица материала'/>
        <InputComponent
          control={control}
          name='unit_value'
          placeholder=''
          type={'text'}
          errors={errors.unit_value?.message}
          label={'Сколько метров в одном кг'}/>
        <InputComponent
          control={control}
          name={'price'}
          placeholder={''}
          type={'text'}
          errors={errors.price?.message}
          label={'Цена за метр/кг/ярд'}/>
        <SelectComponent
          control={control}
          name={'currency_id'}
          placeholder={'Выберите валюту'}
          options={user.map(u => ({value: u.id, label: u.name}))}
          errors={errors.currency_id?.message}
          label={'Валюта'}
        />
        <InputComponent
          control={control}
          name={'currency_value'}
          placeholder={''}
          type={'text'}
          errors={errors.currency_value?.message}
          label={'Курс валют на данный момент закупки'}/>
        <InputComponent
          control={control}
          name={'spent_count'}
          placeholder={''}
          type={'text'}
          errors={errors.spent_count?.message}
          label={'Сколько потрачено в валюте'}/>
        <UploadComponent
          control={control}
          name={'receipts_photo'}
          errors={errors.receipts_photo?.message}
          label={'Чеки фото'}/>
        <TextAreaComponent
          control={control}
          name={'notes'}
          placeholder={''}
          rows={4}
          errors={errors.notes?.message}
          label={'Примечания'}/>
        <DatePickerComponent
          control={control}
          name={'date'}
          placeholder={'Дата закупки'}
          errors={errors.date?.message}
          label={'Дата закупки'}
        />
        <SelectComponent
          control={control}
          name={'approved_by'}
          placeholder={''}
          options={user.map(u => ({value: u.id, label: u.name}))}
          errors={errors.approved_by?.message}
          label={'Проверено кем?'}/>
        <DatePickerComponent
          control={control}
          name={'check_date'}
          errors={errors.check_date?.message}
          placeholder={'Дата проверки'}
          label={'Дата проверки'}
        />
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </MainLayout>
  )
}
export default ProcuringPage;