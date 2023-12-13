import { DefaultIconProps } from '@/assets/types';

export const ShorArrow = ({ className }: DefaultIconProps) => {
  return (
    <svg
      className={className}
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 4.5L4 1.5L1 4.5" stroke="currentColor" />
    </svg>
  );
};
