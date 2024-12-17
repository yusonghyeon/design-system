import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  test('Text를 렌더 한다', () => {
    render(<Button label="text" />);

    const text = screen.getByText('text');
    expect(text).toBeTruthy();
  });
});
