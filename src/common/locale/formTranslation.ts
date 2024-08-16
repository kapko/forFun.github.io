export const useTranslationForm = () => {

  const schemeTextForm = {
    required: (name: string) => `${name} обязательно для заполнения`,
    Number: 'Должно быть число',
    Positive:'Должно быть положительное значение',
    Integer:'Должно быть число',
    field: 'Поле'
  }

  return {
    schemeTextForm,
  };
}
