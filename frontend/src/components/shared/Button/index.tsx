import { ButtonHTMLAttributes } from 'react';
import './styles.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  width?: number | string;
  height?: number;
  scheme?: 'translucid' | 'orange';
};

export const Button = ({
  width = 'fit-content',
  height,
  scheme = 'translucid',
  children,
  className,
  ...rest
}: Props) => {
  return (
    <button
      style={{
        width,
        height,
      }}
      className={`button-container ${scheme} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
