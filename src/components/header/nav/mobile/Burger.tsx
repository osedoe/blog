import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { AbsoluteMobileMenu } from './AbsoluteMobileMenu';

const Container = styled(motion.div)`
  grid-area: burger;
  position: relative;
  z-index: 4;
`;

const TopBar = styled(motion.span)`
  background: var(--blue);
  content: '';
  position: absolute;
  height: 3px;
  width: 20px;
  top: -10px;
  right: 0;
  overflow: hidden;
`;

const MiddleBar = styled(motion.span)`
  background: var(--pink);
  display: block;
  position: relative;
  height: 3px;
  width: 30px;
  z-index: 2;
`;

const BottomBar = styled(motion.span)`
  background: var(--pink);
  content: '';
  position: absolute;
  height: 3px;
  width: 30px;
  top: 10px;
  left: 0;
  z-index: 2;
`;

const generateTopBarAnimation = (isMenuOpen: boolean) => {
  if (isMenuOpen) {
    return {
      rotate: -9000,
      opacity: 0,
      scale: 2
    };
  }

  return {
    rotate: 0,
    // height: '3px',
    // width: '20px',
    // top: '-10px',
    // right: '0',
    opacity: 1
  };
};

const generateMiddleBarAnimation = (isMenuOpen: boolean) => ({
  rotate: isMenuOpen ? 225 : 0
});

const generateBottomBarAnimation = (isMenuOpen: boolean) => ({
  rotate: isMenuOpen ? -225 : 0,
  top: isMenuOpen ? '0px' : '10px'
});

const generateBurgerAnimations = (isMenuOpen: boolean) => ({
  topBarAnimation: generateTopBarAnimation(isMenuOpen),
  middleBarAnimation: generateMiddleBarAnimation(isMenuOpen),
  bottomBarAnimation: generateBottomBarAnimation(isMenuOpen)
});

export const Burger: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { topBarAnimation, middleBarAnimation, bottomBarAnimation } = generateBurgerAnimations(isMenuOpen);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return <Container layout onClick={handleClick}>
    <TopBar animate={topBarAnimation}/>
    <MiddleBar animate={middleBarAnimation}/>
    <BottomBar animate={bottomBarAnimation}/>
    <AnimatePresence>
      {isMenuOpen && <AbsoluteMobileMenu/>}
    </AnimatePresence>
  </Container>;
};
