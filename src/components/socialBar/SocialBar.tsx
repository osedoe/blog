import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faRssSquare } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  box-sizing: border-box;
  color: var(--dirty-white);
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  font-size: 28px;
  position: fixed;
  bottom: 0;
  left: 9px;
  opacity: .85;
  overflow-y: hidden;
  overflow-x: visible;
  width: 40px;
  padding: 0 4px;
  z-index: 2;

  :before {
    content: '';
    height: 201px;
    width: 2px;
    background-color: var(--dirty-white);
    margin-bottom: 12px;
    margin-right: 12px;
    border-radius: 2px;
    opacity: .85;
  }

  :after {
    content: "";
    height: 121px;
    width: 2px;
    background-color: var(--dirty-white);
    margin-top: 12px;
    margin-right: 12px;
    border-radius: 2px;
    opacity: .85;
  }

  & a:hover {
    color: var(--blue);
    transform: scale(1.2);
    transition: all 400ms;
    opacity: 1;
  }
    
  @media (max-width: 960px) {
    display: none;
  }
`;

export const SocialBar = () =>
  <Wrapper>
    <a href="mailto:jose.diazg@protonmail.com"><FontAwesomeIcon icon={faEnvelopeSquare}/></a>
    <a href="https://github.com/osedoe"><FontAwesomeIcon icon={faGithubSquare}/></a>
    <a href="https://twitter.com/Osedoe?lang=en"><FontAwesomeIcon icon={faTwitterSquare}/></a>
    <a href="https://linkedin.com/in/jose-diaz-gonzalez-696067107"><FontAwesomeIcon icon={faLinkedin}/></a>
    <a href="/rss.xml"><FontAwesomeIcon icon={faRssSquare}/></a>
  </Wrapper>;
