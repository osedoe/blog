import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { Logo } from '../Logo';

const Container = styled(motion.nav)`
  background: transparent;
  box-sizing: border-box;
  color: var(--dirty-white);
  font-family: var(--space-mono);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-right: 30px;
  height: 60px;
  width: 100%;
  max-width: 1080px;
  z-index: 2;
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

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  max-width: 1080px;
`;

const Li = styled(Link)`
  color: var(--dirty-white);
  font-size: 1.2em;
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
    left: 50%;
    position: absolute;
    top: 50%;
    transition: all 500ms ease-in-out;
    width: 20%;
    z-index: -1;
    opacity: 0;
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
      opacity: .8;
    }
  }

  &:active, &:focus {
    transform: scaleX(1.2em);
  }
`;

export const DesktopHeader: FC = () => {
  return <Container>
    <Header>
      <Logo/>
      <div>
        <Li to="/">_Blog</Li>
        {/*<Link to={`/projects`}>Projects</Link>*/}
        <Li to="/About">_About</Li>
      </div>
    </Header>
  </Container>;
};
