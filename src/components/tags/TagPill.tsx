import React, { FC } from "react"
import styled from "@emotion/styled"

const Container = styled.div`
    border-radius: 10px;
  box-sizing: border-box;
  color: white;
  display: flex;
  height: 31px;
  margin: 5px 0;
  user-select: none;
  width: max-content;
  transition: all 200ms ease-in-out;
  
  :hover {
    background: var(--purple);
    cursor: pointer;
    
    span:first-of-type {
      background: var(--pink);  
    }
    span:last-of-type {
      background: var(--purple);
      display: inline-block;
      opacity: 1;
    }
  }
`

const LeftPart = styled.span`
  background: var(--purple);
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

export const TagPill: FC<TagPillProps> = ({ data }) => {

  const numberOfPosts = parsePosts(data.totalCount)
  return <Container>
    <LeftPart>{data.tag}</LeftPart>
    <RightPart>{numberOfPosts}</RightPart>
  </Container>
}
