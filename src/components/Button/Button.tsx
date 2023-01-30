import React, { useEffect, useState } from 'react';
import classes from './Button.module.scss';
import SvgSelector from 'src/components/SvgSelector/SvgSelector';
import { TRipple } from 'src/components/Button/Button,types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

type TButtonProps = {
  label: string;
  icon?: string;
  rippleSize?: number;
  animationDuration?: number;
  type?: 'button' | 'link';
  href?: string;
  activeClassName?: string;
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>
  ) => void;
};

const Button: React.FC<TButtonProps> = ({
  label,
  icon,
  onClick,
  href,
  activeClassName = '',
  rippleSize = 10,
  animationDuration = 500,
  type = 'button',
}) => {
  const [ripples, setRipples] = useState<TRipple[]>([]);

  const handleClick = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>
  ) => {
    const offset = (rippleSize * 10) / 2;
    console.log(event.pageY - event.currentTarget.getBoundingClientRect().top);
    setRipples([
      ...ripples,
      {
        x:
          event.clientX -
          event.currentTarget.getBoundingClientRect().left -
          offset,
        y:
          event.clientY -
          event.currentTarget.getBoundingClientRect().top -
          offset,
      },
    ]);
    onClick && onClick(event);
  };

  useEffect(() => {
    let timeoutId = setTimeout(() => setRipples([]), animationDuration);
    return () => clearTimeout(timeoutId);
  }, [ripples.length]);
  if (type === 'button')
    return (
      <button className={classes.button} onClick={handleClick}>
        {icon && <SvgSelector id={icon} />}
        <p>{label}</p>
        {ripples.map((element, index) => (
          <div
            key={index}
            className={classes.ripple}
            style={{
              top: `${element.y}px`,
              left: `${element.x}px`,
              width: `${rippleSize}rem`,
              height: `${rippleSize}rem`,
              animationDuration: `${animationDuration}ms`,
            }}
          />
        ))}
      </button>
    );
  else
    return (
      <NavLink
        to={href ? href : ''}
        className={({ isActive }) =>
          clsx(classes.button, {
            [activeClassName]: isActive && activeClassName,
          })
        }
        onClick={handleClick}
        draggable={false}
      >
        {icon && <SvgSelector id={icon} />}
        <p>{label}</p>
        {ripples.map((element, index) => (
          <div
            key={index}
            className={classes.ripple}
            style={{
              top: `${element.y}px`,
              left: `${element.x}px`,
              width: `${rippleSize}rem`,
              height: `${rippleSize}rem`,
              animationDuration: `${animationDuration}ms`,
            }}
          />
        ))}
      </NavLink>
    );
};

export default Button;
