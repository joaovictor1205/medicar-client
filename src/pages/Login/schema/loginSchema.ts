import { object, string } from 'yup';
import { REQUIRED_MESSAGE } from '../../../constants/requiredMessage';

export const loginSchema = object().shape({
  email: string().required(REQUIRED_MESSAGE),
  password: string().required(REQUIRED_MESSAGE),
});
