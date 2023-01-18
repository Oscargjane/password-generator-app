import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary_50: '#F9ECCC',
    primary_100: '#F6E2B3',
    primary_200: '#F3D899',
    primary_300: '#F0CE80',
    primary_400: '#EDC566',
    primary_500: '#EABB4E',
    primary_600: '#E5AC25',
    primary_700: '#C79217',
    primary_800: '#9F7513',
    primary_900: '#77580E',
    gray_50: '#FAFAFA',
    gray_100: '#F5F5F5',
    gray_200: '#E5E5E5',
    gray_300: '#D4D4D4',
    gray_400: '#A3A3A3',
    gray_500: '#737373',
    gray_600: '#525252',
    gray_700: '#404040',
    gray_800: '#262626',
    gray_900: '#171717',
  },

  // Break Points
  bp: {
    large: '75em', // 1200px
    medium: '56.25em', // 900px
    small: '37.5em', // 600px
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
