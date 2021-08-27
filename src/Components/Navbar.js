import React from 'react';
import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components/macro';
import { menuData } from '../Data/Menudata';
import { Button } from './Button';
import { CgLoadbarSound } from "react-icons/cg";

const Nav = styled.nav`
  height: 60px;

  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  z-index: 10000;
    background: rgba(9, 9, 9, .3);
  );
`;
const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
`

const Logo = styled(Link)`
${NavLink}
color: #fff;
font-style: italic;
`

const Menubars = styled(CgLoadbarSound)`
display: none;

@media screen and (max-width: 768px) {
      color: #fff;
      transform: translate(-50%, 25%) rotate(-90deg);
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;

@media screen and (max-width: 768px){
    display: none;
}
`;

const NavMenuLinks = styled(Link)`
color: #fff;
${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

function Navbar({toggle}) {
    return (
        <>
            <Nav>
                <Logo>
                    Elsa Homes
                </Logo>
                <Menubars onClick={toggle}/>
                <NavMenu>
                    {menuData.map((menu, i) => {
                       return( <NavMenuLinks to={menu.link} key={`menu${i}`}>
                            {menu.title}
                        </NavMenuLinks>)
                    })}
                </NavMenu>
                <NavBtn>
                    <Button to='/contact' primary>
                        Contact 
                    </Button>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
