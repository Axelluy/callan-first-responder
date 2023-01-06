import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      <div>
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
              <Phone>(+353) 086 1604273</Phone>
              <Link className="link-button" to="/form">Join Us</Link>
            </Info>
          </Right>
        </IntroContainer>
        <div className="intro-general">
          <p>
            Our services
          </p>
          <div className="general">
            <div className="intro-bio">
              <div className="icon-bio">

              </div>
              <h3>
                Callan first responders

              </h3>
              are alerted directly, by the national ambulance service,
              to potentially life threatening emergency calls such as Cardiac Arrest,
              chest pains and stroke calls.
              At present we respond to calls within a 5km radius of Callan.

            </div>
            <div className="intro-bio">
              <div className="icon-bio">

                <i className="fa-solid fa-person"></i>
              </div>
              <h3>
                Community training
              </h3>
              With more volunteers we will be in a position to extend this distance,
              if you are interested in hearing more, click on "Join us" for more information.

            </div>
            <div className="intro-bio">
              <div className="icon-bio">
                <i className="fa-solid fa-truck-medical"></i>
              </div>
              <h3>
                Community first responders
              </h3>
              If we arrive before the emergency services, we initially assess the patient's condition,
              allowing us to accurately communicate this information to the paramedics on route.
              The responder on call will always carry a mobile AED (Automated external defibrillators).

            </div>
            <div className="intro-bio">
              <div className="icon-bio">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>
              <h3>
                Public access CPR & AED
              </h3>
              In the case of a cardiac arrest immediate resustition can commence by combining CPR & AED to double that patient's chance of survival.
              When you call 999/112 always give your EIRCODE address, turn your house lights on and ask somebody to go outside and wait for the ambulance.

            </div>

          </div>
          {/* <img className="img-general" src={img14} /> */}
        </div>

      </div>
    );
  }
}

export default Intro;
