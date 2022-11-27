import React, { Component } from "react";
import {
  Button,
  Contact,
  ContactText,
  Desc,
  Info,
  IntroContainer,
  ColorContainer,
  Left,
  Phone,
  Right,
  Title,
} from "../styles/Intro.style";

class Intro extends Component {
  render() {
    return (
      <IntroContainer>
        <ColorContainer></ColorContainer>
        <Title>
          Become a Community<br></br>First Responder
        </Title>
        <Left>
          <Desc>
            Community First Responders (CFR) are volunteers who are trained to
            attend certain types of emergency calls in the area where they live
            or work. Their aim is to reach a potential life threatening
            emergency in the first vital minutes before the ambulance crew
            arrives. Their role is to help stabilise the patient and provide the
            appropriate care including CPR & defibrillation, until the more
            highly skilled ambulance crew arrives on scene to take over the
            treatment.
          </Desc>
        </Left>
        <Right>
          <Info>
            <Contact>
              <Phone>(+353) 086 1604273</Phone>
              <ContactText>Questions</ContactText>
            </Contact>
            <Button>Join Us</Button>
          </Info>
        </Right>
      </IntroContainer>
    );
  }
}

export default Intro;
