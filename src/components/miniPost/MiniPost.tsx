import React, { FC } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Container = styled.div`
  background: transparent;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 30px;
  padding: 20px;
  
  &:hover {
    background: linear-gradient(to bottom right, var(--purple-alpha) , var(--pink-alpha));
    transition: all 300ms ease-in-out;
    
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
