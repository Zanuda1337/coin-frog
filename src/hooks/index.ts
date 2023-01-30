import React, { useEffect, useRef } from 'react';

export const useHoverEffect = () => {
  const ref = useRef<any | null>(null);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      ref.current.style.setProperty(
        '--effect-x',
        `${event.clientX - ref.current.getBoundingClientRect().left}px`
      );
      ref.current.style.setProperty(
        '--effect-y',
        `${event.clientY - ref.current.getBoundingClientRect().top}px`
      );
    };
    document.addEventListener('mousemove', handleMouseMove);

    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [ref]);

  return ref;
};

export const useClickAway = (handleClickAway: () => void) => {
  const node = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (!node.current?.contains(target)) {
        handleClickAway();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  });

  return node;
};
