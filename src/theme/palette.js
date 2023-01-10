import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const PRIMARY = {
  light: 'rgb(61, 90, 116)',
  main: '#0D3152',
  dark: '#092239',
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#3F8FAB',
  main: '#107396',
  dark: '#0B5069',
  darker: '#091A7A',
  contrastText: '#FFFFFF',
};

const INFO = {
  lighter: '#64B5F6',
  light: '#64B5F6',
  main: '#2196F3',
  dark: '#1976D2',
  darker: '#1976D2',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: GREY[800],
};

const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff',
};

const palette = {
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: 'rgba(3,71,74,0.78)',
  text: {
    primary: GREY[800],
    secondary: '#ffffff',
    disabled: GREY[500],
  },
  background: {
    paper: 'rgba(205,205,206,0.56)',
    default: '#f2f5f9',
    neutral: GREY[200],
  },
  action: {
    active: '#3a6b94',
    hover: '#4298b8',
    selected: "#3a6b94",
    disabled: "#0D3152",
    disabledBackground: alpha(GREY[500], 0.24),
    focus: '#3a6b94',
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
