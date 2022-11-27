import styled from "styled-components";

export const IntroContainer = styled.div`
  background-image: url(https://becomeacfr.ie/wp-content/uploads/2022/05/NAS_Stills65-scaled.jpg);
  background-size: cover;
  background-position: center center;
  background-attachment: scroll;
  background-repeat: no-repeat;
  height: 85vh;
  position: relative;
  display: grid;
  padding: 20px;

  /* @media only screen and (max-width: 700px) {
    flex-direction: column;
  } */
`;

export const ColorContainer = styled.div`
  background-color: #278841;
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.6;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: white;
  text-align: center;
  z-index: 1;
  /* @media only screen and (max-width: 700px) {
    width: 100%;
  } */
`;

export const Desc = styled.p`
  color: white;
  width: 60%;
  font-size: 18px;
  text-align: center;
  /* @media only screen and (max-width: 700px) {
    width: 100%;
  } */
`;

export const Right = styled.div`
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  text-align: center;

  /* @media only screen and (max-width: 480px) {
    flex-direction: column;
  } */
`;

export const Info = styled.div`
 
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  border-radius: 6px;
  border: none;
  padding: 20px;
  background-color: #42b72a;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  margin-top: 5px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Phone = styled.span`
  color: white;
  font-weight: bold;
`;

export const ContactText = styled.span`
  color: white;
  margin-top: 5px;
  font-size: 18px;
`;
