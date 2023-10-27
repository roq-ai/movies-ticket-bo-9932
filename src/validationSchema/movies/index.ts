import * as yup from 'yup';

export const movieValidationSchema = yup.object().shape({
  title: yup.string().required(),
  director: yup.string().required(),
  duration: yup.number().integer().required(),
  genre: yup.string().required(),
  rating: yup.number().integer().required(),
  release_date: yup.date().required(),
});
