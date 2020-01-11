import React, { FC } from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  background: var(--black);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 120px;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100px;
  width: 100vw;
`

const Left = styled.div``
const Right = styled.div``

export const Footer: FC = () => {
  const RSS_URL = "/rss.xml"
  const currentYear = new Date().getFullYear()
  return <Container>
    <Left>Made with ❤️ by Ose @{currentYear}</Left>
    <Right><a href={RSS_URL}>RSS</a></Right>
  </Container>
}
