import { SmallPointLintes } from '@/assets/icons/SmallPointLines';
import './styles.scss';
import clsx from 'clsx';
import { SmallPointLinesBlack } from '@/assets/icons/SmallPointLinesBlack';

type Props = {
  category: string;
  icon: JSX.Element;
  label: string;
  accent?: boolean;
  blackLines?: boolean;
};

export const CategoryCard = ({ category, icon, label, accent, blackLines }: Props) => {
  return (
    <div className={clsx('card-container', accent ? 'accent' : '')}>
      <span className="card-category">{category}</span>
      <div className="label-container">
        {icon}
        <h3 className="cart-label">{label}</h3>
      </div>
      {blackLines ? (
        <SmallPointLinesBlack className="small-point-lines" />
      ) : (
        <SmallPointLintes className="small-point-lines" />
      )}
    </div>
  );
};
