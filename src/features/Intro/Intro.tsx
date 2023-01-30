import React from 'react';
import classes from './Intro.module.scss';
import SvgSelector from 'src/components/SvgSelector/SvgSelector';

type TIntroProps = {};

const Intro: React.FC<TIntroProps> = ({}) => {
  return (
    <div className={classes.intro}>
      <div className={'container'}>
        <div className={classes.inner}>
          <h1>Explore Cryptocurrencies</h1>
          <div className={classes.stats}>
            <p>
              Total market cap:
              <span className={'text_green'}>$1 , 507 , 455 , 642 , 738</span>
            </p>
            <p>
              24h Vol:
              <span className={'text_red'}>$108 , 455 , 642 , 738</span>
            </p>
          </div>
          <div className={classes.search}>
            <SvgSelector id="search" />
            <p>Search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
