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
          <Logo id="logo" src={LogoImg}></Logo>
        </LeftContainer>
        <RightContainer>
          <NavBarLinkContainer>
            <NavBarLink to="/">Home</NavBarLink>
            <a  className="become-cfr" href="https://becomeacfr.ie/#" target="_blank">Become a CFR</a>
            <NavBarLink to="/gallery">Gallery</NavBarLink>
            <NavBarLink to="/team">Meet the Team</NavBarLink>
            <NavBarLink to="/ead">Callan AED's</NavBarLink>

            <OpenLinksButton
              onClick={() => {
                setExtendNavBar((curr) => !curr);
                const logo = document.getElementById('logo');
                logo.style.display = extendNavBar ? 'block' : 'none';
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
          <a  className="become-cfr" href="https://becomeacfr.ie/#" target="_blank">Become a CFR</a>
          <NavBarLinkExtended to="/gallery">Gallery</NavBarLinkExtended>
          <NavBarLinkExtended to="/team">Meet the Team</NavBarLinkExtended>
          <NavBarLinkExtended to="/ead">Callan AED's</NavBarLinkExtended>
        </NavBarExtendedContainer>
      )}
    </NavBarContainer>
  );
}

export default NavBar;
