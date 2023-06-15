import { AlertTitle, Alert } from '@mui/material';
import { CustomAlertType } from './types';

function CustomAlert(props: CustomAlertType) {
  const { severity, text, title } = props;
  return (
    <Alert severity={severity} sx={{ width: '100%' }}>
      <AlertTitle>{title}</AlertTitle>
      <strong>{text}</strong>
    </Alert>
  );
}

export default CustomAlert;
