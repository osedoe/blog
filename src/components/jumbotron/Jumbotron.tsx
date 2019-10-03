import React, { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`

`;

const P = styled.p`
  font-family: Exo 2, serif;
`;

const A = styled.a``;

export interface JumbotronProps {

}

export const Jumbotron: FC<JumbotronProps> = props => {
    return <Container>
      <P>Personal blog by <A href="#">Ose</A></P>
    </Container>;
};
