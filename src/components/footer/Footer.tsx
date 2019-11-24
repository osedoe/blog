import React, { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background: var(--black);
  box-sizing: border-box;
  padding: 15px 60px;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100px;
  width: 100vw;
`;

export interface FooterProps {

}

export const Footer: FC<FooterProps> = props => {
    return <Container>

    </Container>;
};
