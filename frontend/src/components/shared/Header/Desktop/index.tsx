'use client';
import './styles.scss';
import { Logo } from '@/assets/brand/Logo';
import Link from 'next/link';
import pages from '../pages.json';
import { ShorArrow } from '@/assets/icons/ShortArrow';
import { Button } from '../../Button';
import { Budget } from '@/assets/icons/Budget';
import { ProductsDropdown } from './components/ProductsDropdown';
import { useState } from 'react';

export const DesktopHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdown = () => setOpenDropdown((state) => !state);

  return (
    <header className="header-container">
      <div className="main-header-elements ">
        <nav className="nav-container-desktop">
          <h1 className="logo">
            <Logo />
          </h1>
          {pages.map((page) =>
            page.hasDropdown ? (
              <button onClick={toggleDropdown} key={page.name} className="nav-items">
                {page.name}
                {page.hasDropdown && (
                  <ShorArrow className={openDropdown ? 'arrow-icon-open' : 'arrow-icon-close'} />
                )}
              </button>
            ) : (
              <Link className="nav-items" href={page.href} key={page.name}>
                {page.name}
              </Link>
            ),
          )}
        </nav>
        <Button className="header-button">
          <Budget />
          <span>Orçamento</span>
        </Button>
      </div>
      <ProductsDropdown open={openDropdown} />
    </header>
  );
};
