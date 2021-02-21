import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { useMedia } from '../../hooks';

const Container = styled.div`
  background: transparent;
  border-radius: 6px;
  box-sizing: border-box;
  margin-bottom: 30px;
  padding: 18px;
  position: relative;
  width: 100%;

  :before {
    background: linear-gradient(135deg, var(--blue-alpha), var(--pink-alpha));
    border-radius: 6px;
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    opacity: .7;
    transition: all 400ms ease-in-out;
    height: 100%;
    width: 100%;
    max-width: calc(100vw - 30px);
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
    transition: all 300ms ease-in-out;

    small {
      text-decoration: underline;
    }

    :before {
      background: linear-gradient(45deg, var(--blue-alpha), var(--pink-alpha));
      transition: all 200ms ease-in-out;
      opacity: .9;
      top: 44px;
      height: calc(100% - 38px);
      box-shadow: var(--shadow);

      @media (max-width: 960px) {
        top: 65px;
      }
    }

    h2 {
      color: var(--dirty-white);
      text-decoration: underline;
      text-shadow: var(--grey-shadow);
    }

    span {
      color: var(--pale-grey);
      transition: opacity 300ms ease-in-out 0ms;
      opacity: 1;
    }

    &:active, :focus {
      transform: translateX(80px);
      opacity: 0;
    }
  }
`;

const BlogLink = styled(Link)`
  text-decoration: none;
`;

const Date = styled.small`
  color: var(--pale-grey);
  font-family: var(--work-sans);
  font-style: italic;
  margin: 3px 0;

  :hover {
    text-decoration: underline;
  }
`;

const Title = styled.div`
  color: var(--dirty-white);
  display: flex;
  align-items: center;
  font-size: 26px;
  margin: 6px 0;

  h2 {
    font-size: 1.3em;
    margin: 0;
  }

  @media (max-width: 890px) {
    font-size: 20px;
  }
`;

const TimeToRead = styled.span`
  color: var(--dirty-white);
  font-family: var(--work-sans);
  font-size: .8em;
  margin-left: 10px;
  opacity: 0;
  transition: opacity 300ms ease-in-out 200ms;
  width: 100px;
`;

const Text = styled.p`
  color: var(--pale-grey);
  font-family: var(--work-sans);
  margin: 0;
`;

export interface MiniPostProps {
  data: NodeModel;
}

interface NodeModel {
  id: string;
  // fields: {
  //   slug: string;
  // }
  frontmatter: {
    title: string;
    date: string;
    spoiler: string;
    slug: string;
  }
  timeToRead: string;
  excerpt: string;
}

export const MiniPost: FC<MiniPostProps> = ({ data: node }) => {
  const { id, timeToRead, frontmatter: { title, date, spoiler, slug } } = node;
  const isMobile = useMedia('(max-width: 960px)');

  const blogPostRoute = `posts/${slug}`;

  return <Container key={id}>
    <BlogLink to={blogPostRoute}>
      <Date>{date}</Date>
      {!isMobile && <TimeToRead> / {timeToRead} min</TimeToRead>}
      <Title>
        <h2>{title}{' '}</h2>
      </Title>
      <Text>{spoiler}</Text>
    </BlogLink>
  </Container>;
};
