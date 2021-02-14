import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Logo } from '../../Logo';
import { Burger } from './Burger';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const MobileHeader: FC = () => {
  return <Container>
    <Logo/>
    <Burger/>
  </Container>;
};
