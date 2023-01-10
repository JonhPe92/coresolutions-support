import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const MyTextInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-outlined': {
    color: theme.palette.primary.light,
    fontWeight: 'bold',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.secondary.main,
    },
    input: {
      color: theme.palette.primary.main,
    },
  },
  '@media (min-width:600px)': {
    width: 300,
  },
  '@media (min-width:900px)': {
    width: 400,
  },
}));

const CustomTextField = (props) => {
  return <MyTextInput {...props} />;
};

export default CustomTextField;
