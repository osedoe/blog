import React, { FC } from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  font-family: 'Georgia', serif;
  color: var(--dirty-white);
  
  @media (max-width: 790px) {
    & iframe {
      width: 100%;
    } 
  }
`

export interface MainBodyProps {
  data: any;
}

export const MainBody: FC<MainBodyProps> = ({ data }) => {
  return <Container dangerouslySetInnerHTML={{ __html: data.html }}/>
}
