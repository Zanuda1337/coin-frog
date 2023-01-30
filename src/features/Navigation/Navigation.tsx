import React from 'react';
import classes from './Navigation.module.scss';
import { useHoverEffect } from 'src/hooks';
import Button from 'src/components/Button/Button';

type TNavigationProps = {};

const Navigation: React.FC<TNavigationProps> = ({}) => {
  const nav = useHoverEffect();
  return (
    <div className={classes.navigation} ref={nav}>
      <ul>
        <Link
          label="Explorer"
          href="/"
          imageId="home"
          activeClassName={classes.active}
        />
        <Link
          label="Watchlist"
          href="/1"
          imageId="star"
          activeClassName={classes.active}
        />
        <Link
          label="Trending / New"
          href="/2"
          imageId="graphic"
          activeClassName={classes.active}
        />
        <Link
          label="Portfolio"
          href="/3"
          imageId="case"
          activeClassName={classes.active}
        />
        <Link
          label="Categories"
          href="/4"
          imageId="chart"
          activeClassName={classes.active}
        />
      </ul>
    </div>
  );
};

export default Navigation;

type TLinkProps = {
  label: string;
  href: string;
  imageId?: string;
  activeClassName?: string;
};

const Link: React.FC<TLinkProps> = ({
  label,
  href,
  imageId,
  activeClassName,
}) => {
  return (
    <li>
      <Button
        label={label}
        type="link"
        href={href}
        icon={imageId}
        rippleSize={20}
        activeClassName={activeClassName}
      />
    </li>
  );
};
