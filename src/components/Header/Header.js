//Library Imports
import React from 'react'
import { NavLink } from "react-router-dom"
import styled from 'styled-components'
//Component Imports


//Styles
const HeaderContainer$ = styled.header`
    position: sticky;
    z-index: 100;
    top: 0;
    width: 100vw;
    height: 60px;
    background: white;
`
const LeftContainer$ = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50vw;
    height: 60px;
`
const Logo$ = styled.div`
    display: inline-block;
    line-height: 60px;
    margin-left: 3vw;
    font-family: "Swis721 BT", sans-serif;
    font-weight: 800;
    font-size: 16px;
    margin-right: 8px;
`
const SubLogo$ = styled.div`
    display: inline-block;
    line-height: 60px;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
`
const RightContainer$ = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    width: 50vw;
    height: 60px;
`
const NavContainer$ = styled.nav`
    display: inline-block;
    line-height: 60px;
    margin-right: 3vw;
    position: absolute;
    right: 3vw;

`
const NavOption$ = styled(NavLink)`
  margin-left: 30px;
  text-decoration: none;
  color: #000;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  cursor: pointer;
  &:first-of-type{
    margin-left: 0px;
  }
`


function Header() {
    return (
      <HeaderContainer$>
        
        <LeftContainer$>
          <Logo$>Aaron Dormer</Logo$>
          <SubLogo$>film director</SubLogo$>
        </LeftContainer$>

        <RightContainer$>
          <NavContainer$>
            <NavOption$ to="/" exact activeClassName="activeNav" >commercials</NavOption$>
            <NavOption$ to="/short-films" activeClassName="activeNav">short films</NavOption$>  
            <NavOption$ to="/about" activeClassName="activeNav">about</NavOption$>  
            <NavOption$ to="/contact" activeClassName="activeNav">contact</NavOption$>    
          </NavContainer$>
        </RightContainer$>

      </HeaderContainer$>
    )
  }
  export default Header