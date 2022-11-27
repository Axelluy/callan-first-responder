import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 0px 40px;
  background-color: #f2f2f2;
  display: grid;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const FooterLink = styled.a`
  color: #000;
  margin-bottom: 8px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: red;
    transition: 200ms ease-in;
  }
`;
export const SponsorShips = styled.div`
  display: flex;
  height: 100px;
  gap: 30px;
`;

export const ogoSponsorShips = styled.div`
  max-width: 400px;
  display: none;
`;

export const FooterMedia = styled.div``;

export const Media = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
export const FooterMap = styled.div`
  text-align: center;
  display: grid;
  justify-content: center;
  padding-bottom: 40px;
  color: #fff;
  margin: 0 -40px;
  margin-top: 30px;
  background-image: url(https://becomeacfr.ie/wp-content/uploads/2022/07/Partners-Page-NAS-1024x576.jpg);
  background-size: cover;
  background-position: center center;
  background-attachment: scroll;
  background-repeat: no-repeat;
  position: relative;
`;

export const FooterColor = styled.div`
  background-color: #278841;
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.6;
`;

export const FooterTitle = styled.p`
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: bold;
  margin-top: 40px;
  z-index: 2;
`;
