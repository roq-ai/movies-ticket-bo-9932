import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  position: yup.string().required(),
  hire_date: yup.date().required(),
  salary: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  cinema_id: yup.string().nullable().required(),
});
