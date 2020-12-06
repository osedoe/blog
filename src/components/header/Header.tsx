import React, { FC } from 'react';
import { DesktopNav } from './nav/DesktopNav';
import useMedia from '../../hooks/useMedia';
import { MobileMenu } from './nav/menu/MobileMenu';
import styled from '@emotion/styled';

const Container = styled.div`
  grid-area: header;
  width: 100%;
`;

export const Header: FC = () => {
  const isMobile = useMedia('(max-width: 960px)');

  const renderNavigation = () => {
    if (isMobile) {
      return <MobileMenu/>;
      // return <MobileNav/>;
    }
    return <DesktopNav/>;
  };

  const renderNav = renderNavigation();

  return <Container>{renderNav}</Container>;
};
