import React, { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  background: var(--blue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 0;
  width: 0;
  overflow: hidden;
`;

const menuLayoutAnimation = {
  initial: {
    height: '0vh',
    width: '0vw',
    borderBottomLeftRadius: '6px',
    borderTopLeftRadius: '6px',
    borderBottomRightRadius: '6px'
  },
  animate: {
    height: '100vh',
    width: '100vw',
    borderBottomLeftRadius: '0px',
    borderTopLeftRadius: '0px',
    borderBottomRightRadius: '0px'
  },

  exit: {
    height: '0vh',
    width: '0vw',
    borderBottomLeftRadius: '6px',
    borderTopLeftRadius: '6px',
    borderBottomRightRadius: '6px'
  },
  transition: {
    delay: .1,
    duration: .4
  }
};

export const AbsoluteMobileMenu: FC = () => {
  return <Container layout
                    initial={menuLayoutAnimation.initial}
                    animate={menuLayoutAnimation.animate}
                    exit={menuLayoutAnimation.exit}
                    transition={menuLayoutAnimation.transition}>
    MENU
  </Container>;
};
