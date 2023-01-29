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
            Community<br></br>First Responders
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
                Callan First Responders
              </h3>
              When a 999/112 call is made our volunteers are dispatched simultaneously with the emergency services.
              We are alerted to potentially life threatening emergency calls such as cardiac arrest, chest pains and stroke calls.
              At present we respond to emergency calls within a 5km radius of Callan.
            </div>
            <div className="intro-bio">
              <div className="icon-bio">

                <i className="fa-solid fa-person"></i>
              </div>
              <h3>
                Community First Responders “On scene”
              </h3>
              As we are all local; our aim is to arrive before the emergency services to assist them by initially assessing the patient's condition.
              This allows us to accurately communicate this information to the paramedics on route & arrival.
              The responder on call will always carry a mobile defibrillator.
              If a cardiac event was to occur whilst on scene, the responders would combine CPR & AED immediately to double or triple the chances of survival.
              They would continue to do so, until the emergency services arrive to take over.
            </div>
            <div className="intro-bio">
              <div className="icon-bio">
                <i className="fa-solid fa-truck-medical"></i>
              </div>
              <h3>
                How can you help?
              </h3>
              When you call 999/112 always give your EIRCODE address, turn your house & car lights on and ask somebody to go outside and wait for the ambulance.
              Possibly pack an overnight bag and gather any prescribed medication the patient takes.

            </div>
            <div className="intro-bio">
              <div className="icon-bio">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>
              <h3>
                Community Training
              </h3>
              We will hold regular training for the community to learn how to do CPR and use a AED effectively.
              We encourage you to learn as you could save a life, the more by-standers who know how to do CPR increases the person’s chances.
              Contact us for information on training. Whilst there is no charge for training, donations are very much appreciated to help towards training equipment, on-going maintenance costs and responder equipment.
            </div>
           

          </div>
          {/* <img className="img-general" src={img14} /> */}
        </div>

      </div>
    );
  }
}

export default Intro;
