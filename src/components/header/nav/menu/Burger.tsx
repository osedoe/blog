import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled.div`
  grid-area: burger;
  position: relative;
  z-index: 2;
`;

const TopBar = styled(motion.span)`
  background: var(--blue);
  content: '';
  position: absolute;
  height: 3px;
  width: 20px;
  top: -10px;
  left: 10px;
`;

const MiddleBar = styled(motion.span)`
  background: var(--pink);
  display: block;
  position: relative;
  height: 3px;
  width: 30px;
`;

const BottomBar = styled(motion.span)`
  background: var(--pink);
  content: '';
  position: absolute;
  height: 3px;
  width: 30px;
  top: 10px;
  left: 0;
`;

const Span = styled.span`


  :before {

  }

  :after {
    background: var(--blue);
    content: '';
    position: absolute;
    height: 3px;
    width: 20px;
    top: -10px;
    left: 10px;
  }
`;

const Menu = styled(motion.div)`
  background: var(--dark-grey);
  box-sizing: border-box;
  border-radius: 150px;
  position: absolute;
  top: 0;
  right: 0;
  height: 0;
  width: 0;
  z-index: 2;
  overflow: hidden;
`;
const generateAnimation = (isMenuOpen: boolean) => {
  if (isMenuOpen) {
    return {
      rotate: 0,
      position: 'fixed',
      height: '100vh',
      width: '100vw',
      top: 0,
      left: 0
    };
  }

  return {
    rotate: 180,
    position: 'absolute',
    height: '3px',
    width: '20px',
    top: '-10px',
    left: '10px'
  };

};

export const Burger: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);


  {/*{isMenuOpen && <Menu animate={{ height: 'calc(100vh + 200px)', width: 'calc(100vw + 500px)', left: '-250px' }}>*/
  }
  return <Container onClick={handleClick}>
    <TopBar animate={generateAnimation(isMenuOpen)}/>
    <MiddleBar/>
    <BottomBar/>
    {/*<Span/>*/}
  </Container>;
};
