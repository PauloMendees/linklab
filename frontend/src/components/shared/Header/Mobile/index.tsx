'use client';

import { Logo } from '@/assets/brand/Logo';
import './styles.scss';
import { Budget } from '@/assets/icons/Budget';
import { IconButton } from '../../IconButton';
import { Menu } from '@/assets/icons/Menu';
import { Dropdown } from './components/Dropdown';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { toggle } from '../slice';

export const MobileHeader = () => {
  const openDropdown = useAppSelector((state) => state.header);
  const dispatch = useAppDispatch();

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
          <IconButton
            onClick={() => dispatch(toggle())}
            noPadding
            scheme="transparent"
            icon={<Menu />}
          />
        </div>
      </header>
      <Dropdown open={openDropdown} />
    </>
  );
};
