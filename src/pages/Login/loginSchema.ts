/* eslint-disable import/no-extraneous-dependencies */
import { object, string } from 'yup';

export const REQUIRED_MESSAGE = 'Campo obrigatório';

export const loginSchema = object().shape({
  email: string().required(REQUIRED_MESSAGE),
  password: string().required(REQUIRED_MESSAGE),
});
