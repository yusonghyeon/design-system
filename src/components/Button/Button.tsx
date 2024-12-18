import { button } from './button.css';

export type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
  const { label, onClick } = props;

  return (
    <button className={`${button}`} onClick={onClick}>
      {label}
    </button>
  );
};
