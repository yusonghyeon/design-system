import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    primary: {
      light: '#DCE775',
      main: '#8BC34A',
      dark: '#558B2F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#FF80AB',
      main: '#F50057',
      dark: '#C51162',
      contrastText: '#FFFFFF',
    },
    neutral: {
      100: '#FFFFFF',
      200: '#F5F5F5',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    error: '#D32F2F',
    warning: '#FFA000',
    success: '#388E3C',
    info: '#1976D2',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.25rem', // 20px
      xl: '1.5rem', // 24px
      xxl: '2rem', // 32px
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700',
    },
    lineHeight: {
      normal: '1.5',
      dense: '1.25',
    },
  },
  spacing: {
    none: '0px',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '64px',
  },
  radius: {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    round: '50%',
  },
  shadows: {
    level1: '0px 1px 3px rgba(0, 0, 0, 0.2)',
    level2: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    level3: '0px 5px 15px rgba(0, 0, 0, 0.12)',
  },
  sizes: {
    xs: '24px',
    sm: '32px',
    md: '40px',
    lg: '48px',
    xl: '64px',
  },
});
