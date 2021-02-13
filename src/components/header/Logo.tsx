import React from 'react';
import styled from '@emotion/styled';
import { graphql, Link, useStaticQuery } from 'gatsby';

const Title = styled(Link)`
  box-sizing: border-box;
  grid-area: logo;
  text-decoration: none;
  height: 60px;
`;

const H1 = styled.h1`
  background: transparent;
  box-sizing: border-box;
  background: linear-gradient(to right, var(--blue), var(--pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: .85;
  font-family: var(--space-mono);
  font-size: 2.3em;
  font-weight: bold;
  margin: 0 8px 0 0;
  position: relative;
  height: 100%;
  transition: all .4s;
  user-select: none;
  
  @media (max-width: 1020px) {
    :hover {
      transform: none;
    }
  }

  @media (max-width: 890px) {
    background: linear-gradient(to right, var(--blue), var(--pink));
    content: attr(data-letters);
    font-size: 1.8em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
    transition: width ease-in-out 0.4s;
    margin: 0;
    z-index: 2;
  }
`;

export const Logo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return <Title to="/">
    <H1>{data.site.siteMetadata.title}</H1>
  </Title>;
};
