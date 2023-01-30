import React from 'react';
import classes from './Header.module.scss';
import SvgSelector from 'src/components/SvgSelector/SvgSelector';
import logo from 'src/assets/images/logo.png';
import { NavLink } from 'react-router-dom';

type THeaderProps = {};

const Header: React.FC<THeaderProps> = ({}) => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.inner}>
          <NavLink to="/">
            <img src={logo} alt="" />
            <p>CoinFrog</p>
          </NavLink>
          <div className={classes.buttons}>
            <button>
              <SvgSelector id="burger" />
            </button>
            <button>
              <SvgSelector id="bell" />
            </button>
            <button>
              <SvgSelector id="profile" />
            </button>
            <button>
              <SvgSelector id="settings" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
