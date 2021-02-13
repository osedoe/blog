import React, { FC } from 'react';
import { DesktopHeader } from './nav/DesktopHeader';
import useMedia from '../../hooks/useMedia';
import { MobileHeader } from './nav/mobile/MobileHeader';
import styled from '@emotion/styled';

const Container = styled.div`
  grid-area: header;
  width: 100%;
`;

export const Header: FC = () => {
  const isMobile = useMedia('(max-width: 960px)');

  const renderNavigation = () => {
    if (isMobile) {
      return <MobileHeader/>;
      // return <MobileNav/>;
    }
    return <DesktopHeader/>;
  };

  const renderNav = renderNavigation();

  return <Container>{renderNav}</Container>;
};
