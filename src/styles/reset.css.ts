import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
  outline: 'none',
  border: 'none',
  lineHeight: 1.5,
  fontFamily: 'inherit',
  verticalAlign: 'baseline',
});
globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});
globalStyle('img, video', {
  maxWidth: '100%',
  height: 'auto',
});
globalStyle('button, input, textarea', {
  font: 'inherit',
});
globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});
