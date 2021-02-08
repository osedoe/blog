import React, { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  //border: 1px solid red;
  grid-area: burger;
`;

const Span = styled.span`
  display: block;
  background: blue;
  height: 3px;
  width: 30px;
`;

export const Burger: FC = () => {
  return <Container>
    <Span/>
  </Container>;
};
