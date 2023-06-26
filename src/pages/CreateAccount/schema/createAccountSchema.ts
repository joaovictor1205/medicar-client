import { object, string } from 'yup';
import { REQUIRED_MESSAGE } from '../../../constants/requiredMessage';

export const createAccountSchema = object().shape({
  email: string().required(REQUIRED_MESSAGE),
  password: string().required(REQUIRED_MESSAGE),
  name: string().required(REQUIRED_MESSAGE),
  confirmPassword: string().required(REQUIRED_MESSAGE),
});
