import React, { FC } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Container = styled(Link)`
  border-radius: 10px;
  box-sizing: border-box;
  color: white;
  display: flex;
  height: 31px;
  margin: 5px 0;
  user-select: none;
  width: max-content;
  transition: all 200ms ease-in-out;
  text-decoration: none;
  
  :hover {
    background: var(--blue);
    cursor: pointer;
    
    span:first-of-type {
      background: var(--pink);  
    }
    span:last-of-type {
      background: var(--blue);
      display: inline-block;
      opacity: 1;
    }
  }
`

const LeftPart = styled.span`
  background: var(--blue);
  border-radius: 10px;
  padding: 5px 15px;
  z-index: 1;
`

const RightPart = styled.span`
  background: var(--pink);
  border-radius: 0 10px 10px 0;
  box-sizing: border-box;
  opacity: 0;
  padding: 5px 15px;
  margin-left: -5px;
`

export interface TagPillProps {
  data: {
    tag: string;
    totalCount: number;
  }
}

const parsePosts = (posts: number): string => (posts === 1) ? `${posts} post` : `${posts} posts`

const toKebabCase = (string: string): string => {
  return string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase()
}

export const TagPill: FC<TagPillProps> = ({ data }) => {
  const numberOfPosts = parsePosts(data.totalCount)
  const kebabTagName = toKebabCase(data.tag)

  return <Container to={`/tags/${kebabTagName}`}>
    <LeftPart>{data.tag}</LeftPart>
    <RightPart>{numberOfPosts}</RightPart>
  </Container>
}
