import React, { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faRssSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Container = styled(motion.div)`
  background: linear-gradient(to bottom,
  var(--black),
  var(--dark-grey));
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 0;
  width: 0;
  overflow: hidden;
`;

const Li = styled(Link)`
  color: var(--dirty-white);
  font-size: 1.3em;
  padding: 1em;
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

  &:active {
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

    &:active {
      transform: scale(1.2);
    }
`;

const NavigationItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 40px;
  width: 80%;
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
    <NavigationItems>
      <Li to="/">_Blog</Li>
      {/*<Link to={`/projects`}>Projects</Link>*/}
      <Li to="/About">_About</Li>
    </NavigationItems>
    <Wrapper>
      <a href="mailto:jose.diazg@protonmail.com"><FontAwesomeIcon size="2x" icon={faEnvelopeSquare}/></a>
      <a href="https://github.com/osedoe"><FontAwesomeIcon size="2x" icon={faGithubSquare}/></a>
      <a href="https://twitter.com/Osedoe?lang=en"><FontAwesomeIcon size="2x" icon={faTwitterSquare}/></a>
      <a href="https://linkedin.com/in/jose-diaz-gonzalez-696067107"><FontAwesomeIcon size="2x" icon={faLinkedin}/></a>
      <a href="/rss.xml"><FontAwesomeIcon size="2x" icon={faRssSquare}/></a>
    </Wrapper>
  </Container>;
};
