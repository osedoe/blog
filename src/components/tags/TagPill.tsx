import React, { FC } from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  background: linear-gradient(to bottom, var(--purple) 50%, var(--pink) 51%);
  border-radius: 10px;
  box-sizing: border-box;
  color: white;
  display: flex;
  height: 31px;
  margin: 5px 0;
  user-select: none;
  width: fit-content;
  
  
  :hover {
    background: linear-gradient(to bottom, var(--pink) 50%, var(--purple) 51%);
    cursor: pointer;
    
    span:first-of-type {
      background: var(--pink);  
    }
    span:last-of-type {
      background: var(--purple);
    }
  }
`

const LeftPart = styled.span`
  background: var(--purple);
  border-radius: 10px 0 17px 10px;
  padding: 5px 15px;
`

const RightPart = styled.span`
  background: var(--pink);
  border-radius: 17px 10px 10px 0;
  box-sizing: border-box;
  padding: 5px 15px;
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
