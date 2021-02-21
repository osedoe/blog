import React, { FC } from 'react';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { DesktopHeader, MobileHeader } from './nav';
import { useMedia, useScrollDetect } from '../../hooks';

const Container = styled.div`
  grid-area: header;
  width: 100%;
`;

const Top = styled(motion.span)`
  background: linear-gradient(to right, var(--blue) 33%, var(--pink) 66%);
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  width: 100vw;
  z-index: 3;
`;

const topBarAnimation = {
  initial: { x: '-100%' },
  animate: { x: '0%' },
  exit: { x: '-100%' },
  transition: { duration: .4, type: 'tween' }
};

export const Header: FC = () => {
  const isMobile = useMedia('(max-width: 960px)');
  const { scrollY } = useScrollDetect();

  const renderNavigation = () => {
    if (isMobile) {
      return <MobileHeader/>;
    }
    return <DesktopHeader/>;
  };

  const renderNav = renderNavigation();

  const showTopBar = scrollY >= 200;
  return <Container>
    {showTopBar && <AnimatePresence>
      <Top {...topBarAnimation}/>
    </AnimatePresence>}
    {renderNav}
  </Container>;
};
