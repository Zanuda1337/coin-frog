import React from 'react';
import classes from './Footer.module.scss';
import logo from 'src/assets/images/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.inner}>
          <div className={classes.block}>
            <div className={classes.logo}>
              <img src={logo} alt="" />
              <p>CoinFrog</p>
            </div>
            <p className={classes.about}>
              CoinFrog provides a fundamental analysis of the crypto market. In
              addition to tracking price, volume and market capitalisation,
              CoinFrog tracks community growth, open-source code development,
              major events and on-chain metrics.
            </p>
          </div>
          <p className={classes.last}>© 2023 CoinFrog. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
