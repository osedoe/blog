import React, { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  font-family: var(--work-sans);
  color: var(--dirty-white);
  text-align: justify;

  & img {
    border-radius: 6px;
    display: block;
    box-sizing: border-box;
    width: 90%;
    margin: 6px;
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
