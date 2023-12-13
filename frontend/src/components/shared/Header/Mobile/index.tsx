'use client';

import { Logo } from '@/assets/brand/Logo';
import './styles.scss';
import { Budget } from '@/assets/icons/Budget';
import { IconButton } from '../../IconButton';
import { Menu } from '@/assets/icons/Menu';
import { useState } from 'react';
import { Dropdown } from './components/Dropdown';

export const MobileHeader = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const toggleMenu = () => setOpenMenu((state) => !state);

  return (
    <>
      <header className="header-mobile">
        <nav>
          <h1 className="logo">
            <Logo />
          </h1>
        </nav>
        <div className="buttons-container">
          <IconButton icon={<Budget width="22" height="22" />} />
          <IconButton onClick={toggleMenu} noPadding scheme="transparent" icon={<Menu />} />
        </div>
      </header>
      <Dropdown open={openMenu} />
    </>
  );
};
