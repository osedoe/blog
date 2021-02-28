import React, { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  box-sizing: border-box;
  color: var(--dirty-white);
  font-family: var(--work-sans);
  text-align: justify;

  & img {
    border-radius: 6px;
    display: block;
    box-sizing: border-box;
    width: 90%;
    margin: 6px auto;
  }

  @media (max-width: 790px) {
    & iframe {
      width: 100%;
    }

  }
`;

export interface MainBodyProps {
  data: any;
}

export const MainBody: FC<MainBodyProps> = ({ data }) => {
  return <Container dangerouslySetInnerHTML={{ __html: data.html }}/>;
};
