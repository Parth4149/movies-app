import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const styles = {
  input: {
    color: theme.palette.mode === 'light' && 'black',
    filter: theme.palette.mode === 'light' && 'invert(1)',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-10px',
      marginBottom: '10px',
    },
  },
};
export default styles;