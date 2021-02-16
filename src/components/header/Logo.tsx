import React from 'react';
import styled from '@emotion/styled';
import { graphql, Link, useStaticQuery } from 'gatsby';

const Title = styled(Link)`
  box-sizing: border-box;
  grid-area: logo;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  background-color: transparent;
  box-sizing: border-box;
  background-image: linear-gradient(to right, var(--blue), var(--pink));
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  display: inline-block;
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

  @media (max-width: 890px) {
    font-size: 1.8em;
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
