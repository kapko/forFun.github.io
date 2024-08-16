import * as yup from 'yup';
import {useTranslationForm} from "@common/locale/formTranslation";

const useValidationSchemesForm = () => {
  const { schemeTextForm } = useTranslationForm();

  const requiredStringWithName = (name: string = schemeTextForm.field) =>
    yup.string().required(schemeTextForm.required(name)).trim();
  const numberFormValidation = (name: string = schemeTextForm.field) => yup.number()
    .required(schemeTextForm.required(name))
    .typeError(schemeTextForm.Number)
    .positive(schemeTextForm.Positive)
    .integer(schemeTextForm.Integer)

  const scheme = {
    id:requiredStringWithName('Название'),
    title: requiredStringWithName('Название'),
    user_id: requiredStringWithName('пользователь'),
    material_id: requiredStringWithName('материал'),
    coil_count: numberFormValidation('Общ. количество рулонов'),
    material_unit_id: requiredStringWithName('Единица материала'),
    unit_value: numberFormValidation('Сколько метров в одном кг'),
    price: numberFormValidation('Цена за метр/кг/ярд'),
    currency_id: requiredStringWithName('Валюта'),
    currency_value: numberFormValidation('Курс валют на данный момент закупки'),
    spent_count: numberFormValidation('Сколько потрачено в валюте'),
    receipts_photo: requiredStringWithName('Чеки фото'),
    notes: requiredStringWithName('Примечания'),
    date: requiredStringWithName('Дата закупки'),
    approved_by: requiredStringWithName('Проверено кем?'),
    check_date: requiredStringWithName('Дата проверки'),
  };

  return {
    FormScheme: yup.object({
      id:scheme.id,
      title:scheme.title,
      user_id:scheme.user_id,
      material_id:scheme.material_id,
      coil_count:scheme.coil_count,
      material_unit_id:scheme.material_unit_id,
      unit_value:scheme.unit_value,
      price:scheme.price,
      currency_id:scheme.currency_id,
      currency_value:scheme.currency_value,
      spent_count:scheme.spent_count,
      receipts_photo:scheme.receipts_photo,
      notes:scheme.notes,
      date:scheme.date,
      approved_by:scheme.approved_by,
      check_date:scheme.check_date,
    }),
  };
};

export default useValidationSchemesForm;

