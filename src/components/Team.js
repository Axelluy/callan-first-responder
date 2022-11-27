import React, { Component } from "react";
import team1 from "../assests/team1.jpg";
import team2 from "../assests/team2.jpg";
import team3 from "../assests/team3.jpg";
import team4 from "../assests/team4.jpg";

class Team extends Component {
  render() {
    return (
      <div className="team">
        <div className="team-member">
          <img src={team1} />
          <div>
            <p>
              My name is Billy Bergin. I am a father of two. I have lived in
              callan all my life & joined Callan CFR as I’d like to make a
              measurable contribution to my community. Being part of the team
              has improved my personal development.
            </p>
            <p>
              The training provided allows me to confidently assess the patients
              condition & accurately communicate with the emergency services
              before they arrive on scene.
            </p>
            <p>
              In the case of a cardiac arrest: always remember our key message:
              Check the patient - call 999/112 & compress the chest hard and
              fast, delivering a shock with an AED.
            </p>
            <p>Effective CPR can save a life.</p>
          </div>
        </div>
        <div className="team-member">
          <img src={team2} />
          <div>
            <p>
              Deirdre Cunningham joined CFR Callan in February 2021 to immerse
              herself into the community & to make a difference by volunteering.
              Her background is in healthcare so a lot of experience in the
              specialised area.
            </p>
            <p>
              Her aim is to reach a potential life threatening emergency in the
              first vital minutes before the ambulance crew arrives. Following
              the CFR training she went on to qualify as an EMT (Emergency
              Medical Technician) with Lifeline Ambulance Service.
            </p>
            <p>
              Joining the group opened up so many opportunities for her and in
              turn increased the quality care she can offer as a volunteer to
              the community. Deirdre is a huge asset to our team.
            </p>
            <p>Effective CPR can save a life.</p>
          </div>
        </div>

        <div className="team-member">
          <img src={team3} />
          <div>
            <p>
              Cian Murphy is a qualified EMT (Emergency Medical Technician) and
              joined the group in January 2022. His role, when on call, is to
              help stabilise the patient and provide the appropriate care
              including CPR & defibrillation, until the more highly skilled
              ambulance crew arrives on scene to take over the treatment.
            </p>
            <p>
              The most important function of a CFR is assessment of your patient
              upon arrival. This means finding out what is wrong with your
              patient and communicating this to the Paramedics before they
              arrive to assist them
            </p>
            <p>
              Care required for a patient can range from simple emotional
              support and using CPR/defibrillation. Ciam is a huge asset to our
              team.
            </p>
            <p>Effective CPR can save a life.</p>
          </div>
        </div>
        <div className="team-member">
          <img className="img4" src={team4} />
          <div>
            <p>
              Miriam Grace is from Callan and joined the group in April 2021
              with previous first aid experience as a first responder. Miriam
              works locally & can respond to an emergency within minutes, when
              on call
            </p>
            <p>
              n rural areas around Ireland an ambulance may need to travel a
              long distance to assist someone suffering from a cardiac or
              respiratory arrest, ineffective breathing or choking.
            </p>
            <p>
              By volunteering, Miriam can be that vital link in the chain of
              survival. All CFR's carry a defibrillator on calls & have been
              fully trained to PHECC standards. Miriam is a huge asset to our
              team.
            </p>
            <p>Effective CPR can save a life.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
