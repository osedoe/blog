import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import "./MobileNav.css";
import { BlogContext } from "../../../../context/Context";

const BurgerWrapper = styled.div`
  cursor: pointer;
  height: 50px;
  width: 50px;
`;

const NavBurger = styled.div`
  box-sizing: border-box;
  color: var(--white);
  font-family: var(--space-mono);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
  position: absolute;
  right: 20px;
  top: 20px;
  height: 32px;
  z-index: 50;
  @media (max-width: 1000px) {
    font-size: 16px;
    margin: 0;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  background: var(--black);
  color: var(--white);
  display: flex;
  flex-direction: column;
  font-family: var(--space-mono);
  font-size: 32px;
  height: 100vh;
  justify-content: center;
  list-style: none;
  overflow: hidden;
  position: absolute;
  right: 0;
  text-shadow: 2px 2px 2px black;
  top: 0;
  width: 0;
  & a {
    color: var(--white);
  }
  & a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const MenuItem = styled.li`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: center;
  margin: 6px;
  user-select: none;
  width: 160px;
`;

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  text-shadow: none;
  transition: all .8s;
  user-select: none;
  :after {
    background: linear-gradient(to right, var(--blue), var(--pink));
    border-radius: 4px;
    content: '';
    position: absolute;
    top: 56%;
    left: -10%;
    height: 0;
    width: 120%;
    transition: all 400ms ease-in-out;
    z-index: -1;
  }
  &:hover {
    text-decoration: underline;
    transform: scale(1.2);
    :after {
      height: 55%;
    }
  }
`;

export const MobileNav = () => {
  const { menu: { isMenuOpen, setIsMenuOpen } } = useContext(BlogContext);

  const toggleNav = () => setIsMenuOpen(!isMenuOpen);

  return <nav>
    <BurgerWrapper onClick={toggleNav}>
      <NavBurger>
        <span className={isMenuOpen ? "burger active" : "burger"}/>
      </NavBurger>
    </BurgerWrapper>
    <NavMenu className={isMenuOpen ? "menu active" : "menu"}>
      <MenuItem key="Blog">
        <StyledLink to="/" onClick={toggleNav}>Blog</StyledLink>
      </MenuItem>
      <MenuItem key="About">
        <StyledLink to="/About" onClick={toggleNav}>About</StyledLink>
      </MenuItem>
    </NavMenu>
  </nav>;
};
