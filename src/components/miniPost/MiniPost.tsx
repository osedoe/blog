import React, { FC } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Container = styled.div`
background: transparent;
  border-left: 2px solid transparent;
  box-sizing: border-box;
  margin-bottom: 30px;
  padding: 10px;
  width: 500px;
  
  &:hover {
    background: linear-gradient(to right, var(--dirty-white) 10%, transparent);
    border-left: 2px solid black;
    transition: all 600ms ease-in-out;
    
    h3 {
      color: var(--purple);
    }
  }
  
  @media (max-width: 790px) {
  width: auto;
  }
`

const BlogLink = styled(Link)`
  text-decoration: none;
`

const Date = styled.small`
  color: var(--grey);
  font-family: 'Georgia', serif;
  font-style: italic;
`

const Title = styled.h2`
  color: var(--pink);
  font-size: 26px;
  margin: 3px 0 6px;
  
  @media (max-width: 890px) {
    font-size: 20px;
  }
`

const TimeToRead = styled.span`
  color: var(--purple);
  font-family: 'Georgia', serif;
  font-size: 14px;
`

const Text = styled.p`
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
        {node.frontmatter.title}{" "}
        <TimeToRead> / {node.timeToRead} min</TimeToRead>
      </Title>
      <Text>{node.frontmatter.spoiler}</Text>
    </BlogLink>
  </Container>
}
