import { ButtonHTMLAttributes } from 'react';
import './styles.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  scheme?: 'orange' | 'transparent';
  icon: JSX.Element;
  noPadding?: boolean;
};

export const IconButton = ({
  scheme = 'orange',
  className,
  icon,
  noPadding = false,
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={`${scheme} ${className} icon-button-container ${noPadding ? '' : 'padding'}`}
    >
      {icon}
    </button>
  );
};
