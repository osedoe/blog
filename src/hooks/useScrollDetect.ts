import { useEffect, useState } from 'react';

type ScrollDirection = 'down' | 'up';

interface useScrollResponse {
  scrollY: number;
  scrollX: number;
  scrollDirection?: ScrollDirection;
}

export const useScroll = (): useScrollResponse => {
  const boundingClientRect = document.body.getBoundingClientRect();

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(boundingClientRect);
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>();

  const listener = () => {
    setBodyOffset(boundingClientRect);
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? 'up' : 'down');
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection
  };
};
