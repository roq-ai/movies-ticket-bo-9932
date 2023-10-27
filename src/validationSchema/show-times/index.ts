import * as yup from 'yup';

export const showTimeValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  movie_id: yup.string().nullable().required(),
  cinema_id: yup.string().nullable().required(),
});
