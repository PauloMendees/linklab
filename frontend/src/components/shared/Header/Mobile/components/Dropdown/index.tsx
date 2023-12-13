import clsx from 'clsx';
import './styles.scss';
import pages from '../../../pages.json';
import Link from 'next/link';
import { Sliders } from '@/assets/icons/Sliders';
import { Termometer } from '@/assets/icons/Termometer';
import { Glasses } from '@/assets/icons/Glasses';
import { Inox } from '@/assets/icons/Inox';
import { Glass } from '@/assets/icons/Glass';
import { Plastic } from '@/assets/icons/Plastic';
import { Porcelain } from '@/assets/icons/Porcelain';

type Props = {
  open: boolean;
};

export const Dropdown = ({ open }: Props) => {
  return (
    <nav className={clsx('mobile-dropdown-container ', open ? '' : 'mobile-hidden')}>
      <h2 className="mobile-dropdown-title">
        Navegue por <br /> nosso site
      </h2>
      <div className="links-container">
        {pages.map((page) => (
          <Link className="link" key={page.name} href={page.href}>
            {page.name}
          </Link>
        ))}
      </div>
      <h2 className="mobile-dropdown-title">
        Catálogo completo <br /> de itens para você
      </h2>
      <div className="mobile-category-container">
        <h3 className="mobile-subtitle">Laboratório</h3>
        <div className="category-items-container">
          <span className="categories-item">
            <Sliders />
            Equipamentos
          </span>
          <span className="categories-item">
            <Termometer />
            Termômetros
          </span>
        </div>
        <span className="categories-item">
          <Glasses />
          Acessórios
        </span>
      </div>
      <div className="mobile-category-container">
        <h3 className="mobile-subtitle">Utensílios</h3>
        <div className="category-items-container">
          <span className="categories-item">
            <Inox />
            Inox e Ferragens
          </span>
          <span className="categories-item">
            <Glass />
            Vidrarias
          </span>
        </div>
        <div className="category-items-container">
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
    </nav>
  );
};
