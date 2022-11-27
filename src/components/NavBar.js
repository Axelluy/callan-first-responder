import React, { useState } from "react";
import {
  NavBarContainer,
  LeftContainer,
  RightContainer,
  NavBarExtendedContainer,
  NavBarInnerContainer,
  NavBarLinkContainer,
  NavBarLink,
  Logo,
  OpenLinksButton,
  NavBarLinkExtended,
} from "../styles/Navbar.style";
import LogoImg from "../assests/logo.png";

function NavBar() {
  const [extendNavBar, setExtendNavBar] = useState(false);

  return (
    <NavBarContainer extendNavBar={extendNavBar}>
      <NavBarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImg}></Logo>
        </LeftContainer>
        <RightContainer>
          <NavBarLinkContainer>
            <NavBarLink to="/">Home</NavBarLink>
            <NavBarLink>Become a CFR</NavBarLink> 
            <NavBarLink to="/gallery">Gallery</NavBarLink>
            <NavBarLink to="/team">Meet the Team</NavBarLink>

            <OpenLinksButton
              onClick={() => {
                setExtendNavBar((curr) => !curr);
              }}
            >
              {extendNavBar ? <> &#10005; </> : <> &#8801;</>}
            </OpenLinksButton>
          </NavBarLinkContainer>
        </RightContainer>
      </NavBarInnerContainer>
      {extendNavBar && (
        <NavBarExtendedContainer>
          <NavBarLinkExtended to="/">Home</NavBarLinkExtended>
          <NavBarLinkExtended to="">Get Starded</NavBarLinkExtended>
          <NavBarLinkExtended to="/information">Information</NavBarLinkExtended>
          <NavBarLinkExtended to="/contact">Contact</NavBarLinkExtended>
          <NavBarLinkExtended to="/about">About Us</NavBarLinkExtended>
        </NavBarExtendedContainer>
      )}
    </NavBarContainer>
  );
}

export default NavBar;
