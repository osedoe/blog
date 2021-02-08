import React, { FC, useContext } from 'react';
import { Header } from './header/Header';
import { SocialBar } from './socialBar/SocialBar';
import styled from '@emotion/styled';
import useMedia from '../hooks/useMedia';
import { TagsContainer } from './tags/TagsContainer';
import { BlogContext } from '../context/Context';

const Container = styled.div`
  color: var(--dirty-white);
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  grid-template-rows: 60px auto;
  grid-template-areas: "header header"
                       "main     side";
  grid-gap: 60px;
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1080px;
  padding: 30px 90px 200px;
  position: relative;

  @media (max-width: 960px) {
    grid-template-columns: auto;
    grid-template-rows: 60px 1fr 60px;
    grid-template-areas: "header"
                         "main"
                         "social";
    align-items: center;
    padding: 15px;
  }
`;

const MainContent = styled.div`
  grid-area: main;
  align-items: start;
`;

const SideContent = styled.div`
  grid-area: side;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Layout: FC = ({ children }) => {
  const { isMenuOpen } = useContext(BlogContext).menu;
  const isMobile = useMedia('(max-width: 960px)');

  return <Container>
    <Header/>
    <MainContent>
      {children}
    </MainContent>
    {!isMobile && <SideContent>
      <TagsContainer/>
    </SideContent>}
    {!isMenuOpen && <SocialBar/>}
  </Container>;
};

Layout.displayName = 'Layout';
