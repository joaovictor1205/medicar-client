import { Button, Checkbox, TextField } from '@mui/material';
import { styled } from 'styled-components';

export const PrimaryButton = styled(Button)`
    background-color: #48B4BC;
    text-transform: capitalize;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    &:hover { 
        background-color: #90D3D7
    };
`;

export const SecondButton = styled(Button)`
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
    color: #48B4BC;
    text-transform: capitalize;
    font-weight: 700;
    &:hover { 
        background-color: #D9F1F3
    };
`;

export const PrimaryTextField = styled(TextField)`
    & label.Mui-focused {
      color: #48B4BC;
    };

    & .MuiInput-underline:after {
      border-bottom-color: #48B4BC;
    };

    & .MuiOutlinedInput-root {
      &:hover fieldset {
        border-color: #48B4BC;
      };
      &.Mui-focused fieldset {
        border-color: #48B4BC;
      };
    };
`;

export const PrimaryCheckbox = styled(Checkbox)`
    &.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked {
        color: #48B4BC;
    };
`;
