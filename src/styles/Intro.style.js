import styled from "styled-components";

export const IntroContainer = styled.div`
  background-image: url(https://scontent.fdub3-2.fna.fbcdn.net/v/t39.30808-6/317975751_740024140885736_5505161808569938983_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5Gdy4YDWCCEAX_xOMo1&_nc_ht=scontent.fdub3-2.fna&oh=00_AfDXmcMBnji_2UNBYVCmT-bGKTBhlnMUhYt8glhO6HtTXA&oe=63B833AE);
  background-size: cover;
  background-position: center center;
  background-attachment: scroll;
  background-repeat: no-repeat;
  height: 85vh;
  position: relative;
  display: grid;
  padding: 0 20px;

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

export const Title = styled.h1`
  font-size: 48px;
  color: white;
  text-align: center;
  z-index: 1;
  margin: 100px 0 0 0;

  @media only screen and (max-width: 768px) {
    font-size: 2.188rem;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export const Desc = styled.p`
  color: white;
  width: 100%;
  max-width: 800px;
  font-size: 18px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

export const Right = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;

  /* @media only screen and (max-width: 480px) {
    flex-direction: column;
  } */
`;

export const Info = styled.div`
  flex-direction: column;
  display: flex;
 
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
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
