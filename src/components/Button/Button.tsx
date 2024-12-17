export type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
  const { label, onClick } = props;

  return <button onClick={onClick}>{label}</button>;
};
