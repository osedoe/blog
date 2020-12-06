import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { BlogContext } from '../../../context/Context';
import { Logo } from '../Logo';
import { useScroll } from '../../../hooks/useScrollDetect';
import { AnimatePresence, motion } from 'framer-motion';

const Container = styled(motion.nav)`
  background: transparent;
  box-sizing: border-box;
  color: var(--dirty-white);
  font-family: var(--space-mono);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 120px;
  margin-right: 30px;
  height: 60px;
  width: 100%;
  z-index: 2;
`;

const FixedContainer = styled(Container)`
  position: fixed;
  
  :before {
    content: '';
    background: var(--grey);
    position: absolute;
    top: -140px;
    left: 0;
    right: 0;
    bottom: 0;
    height: 200px;
    width: 100vw; 
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;
`;

const Li = styled(Link)`
  color: var(--dirty-white);
  font-size: 22px;
  padding: 15px 0 15px 30px;
  text-decoration: none;
  text-shadow: var(--text-shadow);
  user-select: none;
  position: relative;
  z-index: 2;
  
  :before {
      background: linear-gradient(to right, var(--blue), var(--pink));
      border-radius: 4px;
      content: '';
      height: 0;
      left: 25%;
      position: absolute;
      top: 50%;
      transition: all 500ms ease-in-out;
      width: 50%;
      z-index: -1;
    }
  
  &:hover {
    color: var(--dirty-white);
  
    :before {
      background: linear-gradient(to right, var(--blue), var(--pink));
      box-shadow: var(--shadow);
      border-radius: 4px;
      content: '';
      position: absolute;
      top: 52%;
      left: 25%;
      height: 30%;
      width: 85%;
      transition: all 200ms ease-out;
      z-index: -1;
    }
  }
  
  @media (max-width: 890px) {
    font-size: 16px;
  }
  
  @media (max-width: 890px) {
    font-size: 16px;
  }
`;

const NavWrapper = styled.div`
  
`;

const heightAnimation = {
  initial: { y: -80 },
  animate: { y: 0 }
  // exit: { y: 40 }
};

const opacityAnimation = {
  initial: { opacity: 0.4 },
  animate: { opacity: 1 },
  exit: { opacity: 0.4 }
};

export const DesktopNav: FC = () => {
  const { menu: { isMenuOpen } } = useContext(BlogContext);
  const { scrollY } = useScroll();

  const showFixedNav = scrollY >= 50;
  if (showFixedNav) {
    return <AnimatePresence>
      <FixedContainer {...heightAnimation}>
        <Header>
          {!isMenuOpen && <Logo/>}
          <NavWrapper>
            <Li to="/">_Blog</Li>
            {/*<Link to={`/projects`}>Projects</Link>*/}
            <Li to="/About">_About</Li>
          </NavWrapper>
        </Header>
      </FixedContainer>
    </AnimatePresence>;
  }

  return <AnimatePresence>
    <Container {...opacityAnimation}>
      <Header>
        {!isMenuOpen && <Logo/>}
        <NavWrapper>
          <Li to="/">_Blog</Li>
          {/*<Link to={`/projects`}>Projects</Link>*/}
          <Li to="/About">_About</Li>
        </NavWrapper>
      </Header>
    </Container>
  </AnimatePresence>;
};
