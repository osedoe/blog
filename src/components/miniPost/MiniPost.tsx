import React, { FC } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Container = styled.div`
  background: transparent;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 30px;
  padding: 20px;
  position: relative;
  :before {
      background: linear-gradient(to right, var(--purple), var(--pink));
      border-radius: 4px;
      content: '';
      height: 0;
      left: 25%;
      position: absolute;
      top: 50%;
      transition: all 500ms ease-in-out;
      width: 50%;
      z-index: -1;
    }
  
  &:hover {
    cursor: pointer;
    transition: all 300ms ease-in-out;
  
    small {
      text-decoration: underline;
    }
  
    :before {
      background: linear-gradient(to right, var(--purple), var(--pink));
      border-radius: 8px;
      content: '';
      position: absolute;
      top: 69px;
      left: 0;
      height: 50%;
      width: 100%;
      transition: all 200ms ease-out;
      opacity: .6;
      z-index: -1;
    }
    
    h2 {
      color: var(--white);
      text-decoration: underline;
    }
    
    span {
      color: var(--pale-grey)
    }
    
    &:active, :focus {
      transform: translateX(500px);
      opacity: 0;
    }
  }
`

const BlogLink = styled(Link)`
  text-decoration: none;
`

const Date = styled.small`
  color: var(--grey);
  font-family: 'Georgia', serif;
  font-style: italic;
  
  :hover {
  text-decoration: underline;
  }
`

const Title = styled.div`
  color: var(--pink);
  display: flex;
  align-items: center;
  font-size: 26px;
  margin: 3px 0 6px;
  
  h2 {
    font-size: 1.3em;
    margin: 0;
  }
  
  @media (max-width: 890px) {
    font-size: 20px;
  }
`

const TimeToRead = styled.span`
  color: var(--purple);
  font-family: 'Georgia', serif;
  font-size: .8em;
  width: 100px;
  margin-left: 10px;
`

const Text = styled.p`
  color: var(--pale-grey);
  font-family: 'Georgia', serif;
  margin: 0;
`

export interface MiniPostProps {
  data: NodeModel;
}

interface NodeModel {
  id: string;
  fields: {
    slug: string;
  }
  frontmatter: {
    title: string;
    date: string;
    spoiler: string;
  }
  timeToRead: string;
  excerpt: string;
}

export const MiniPost: FC<MiniPostProps> = props => {
  const { data: node } = props
  return <Container key={node.id}>
    <BlogLink to={node.fields.slug}>
      <Date>{node.frontmatter.date}</Date>
      <Title>
        <h2>{node.frontmatter.title}{" "}</h2>
        <TimeToRead> / {node.timeToRead} min</TimeToRead>
      </Title>
      <Text>{node.frontmatter.spoiler}</Text>
    </BlogLink>
  </Container>
}
