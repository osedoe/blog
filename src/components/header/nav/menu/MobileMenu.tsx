import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Logo } from '../../Logo';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

export const MobileMenu: FC = () => {
  return <Container>
    <Logo/>
  </Container>;
};
