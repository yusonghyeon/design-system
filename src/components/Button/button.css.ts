import { style } from '@vanilla-extract/css';
import { vars } from 'src/styles/globalToken/theme.css';

export const button = style({
  backgroundColor: vars.colors.primary.light,
  color: vars.colors.primary.contrastText,
  border: 'none',
});
