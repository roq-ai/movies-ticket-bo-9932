import * as yup from 'yup';

export const ticketValidationSchema = yup.object().shape({
  price: yup.number().integer().required(),
  seat_number: yup.number().integer().required(),
  show_time_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
