import React, { FC, useContext } from "react"
import styled from "@emotion/styled"
import { Logo } from "./Logo"
import { Nav } from "./nav/Nav"
import useMedia from "../../utils/useMedia"
import { MobileNav } from "./nav/mobileNav/MobileNav"
import { BlogContext } from "../../context/Context"

const Container = styled.div`
  display: flex;
  grid-area: header;
  justify-content: center;
`

const Wrapper = styled.header`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 60px;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  max-width: 1080px;
`

export const Header: FC = () => {
  const isMobile = useMedia("(max-width: 960px)")
  const { menu: { isMenuOpen } } = useContext(BlogContext)

  const nav = () => {
    if (isMobile) {
      return <MobileNav/>
    }
    return <Nav/>
  }

  const renderNav = nav()
  return <Container>
    <Wrapper>
      {!isMenuOpen && <Logo/>}
      {renderNav}
    </Wrapper>
  </Container>
}
