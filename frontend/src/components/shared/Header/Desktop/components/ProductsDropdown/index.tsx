import clsx from 'clsx';
import './styles.scss';
import { Sliders } from '@/assets/icons/Sliders';
import { Termometer } from '@/assets/icons/Termometer';
import { Glasses } from '@/assets/icons/Glasses';
import { Porcelain } from '@/assets/icons/Porcelain';
import { Plastic } from '@/assets/icons/Plastic';
import { Glass } from '@/assets/icons/Glass';
import { Inox } from '@/assets/icons/Inox';

type Props = {
  open: boolean;
};

export const ProductsDropdown = ({ open }: Props) => {
  return (
    <div className={clsx(`dropdown-container ${open ? '' : 'hidden'}`)}>
      <h2 className="dropdown-title">
        Catálogo completo <br /> de itens para você
      </h2>
      <div className="categories-container">
        <h3 className="dropdown-subtitle">Laboratório</h3>
        <div className="categories-grid">
          <span className="categories-item">
            <Sliders />
            Equipamentos
          </span>
          <span className="categories-item">
            <Termometer />
            Termômetros
          </span>
          <span className="categories-item">
            <Glasses />
            Acessórios
          </span>
        </div>
      </div>
      <div className="categories-container">
        <h3 className="dropdown-subtitle">Utensílios</h3>
        <div className="categories-grid">
          <span className="categories-item">
            <Inox />
            Inox e Ferragens
          </span>
          <span className="categories-item">
            <Glass />
            Vidrarias
          </span>
          <span className="categories-item">
            <Plastic />
            Plásticos
          </span>
          <span className="categories-item">
            <Porcelain />
            Porcelanas
          </span>
        </div>
      </div>
    </div>
  );
};
