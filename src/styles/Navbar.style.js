import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.nav`
  width: 100%;
  /* height: ${(props) => (props.extendNavBar ? "100vh" : "80px")}; */
  background-color: white;
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: relative;
  height: 15vh;
`;

export const NavBarInnerContainer = styled.div`

  height: 100%;
  display: flex;
  padding: 5px 40px;
  justify-content: flex-end;

  @media (max-width: 850px) {
    padding: 0 20px;
  }
`;

export const LeftContainer = styled.div``;

export const Logo = styled.img`
  max-height: 170%;
  position: absolute;
  z-index: 1;
  border-radius: 50%;
  left: 40px;

  @media (max-width: 850px) {
    max-height: 140%;
    left: 20px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBarLinkContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavBarLink = styled(Link)`
  color: #278841;
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 1100px) {
    font-size: 1rem;
    margin: 5px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavBarLinkExtended = styled(Link)`
  color: #278841;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #278841;
  font-size: 45px;
  cursor: pointer;
  border-radius: 12px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavBarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  @media (min-width: 768px) {
    display: none;
  }
`;
