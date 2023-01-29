import React, { Component } from "react";
import team1 from "../assests/team1.jpg";
import team2 from "../assests/team2.jpg";
import team3 from "../assests/team3.jpg";
import team4 from "../assests/team4.jpg";
import team5 from "../assests/team5.jpeg";
import team6 from "../assests/team6.jpeg";
import team7 from "../assests/team7.jpeg";
import team8 from "../assests/team8.jpeg";
import team9 from "../assests/team9.jpeg";
import team10 from "../assests/team10.jpeg";


class Team extends Component {
  render() {
    return (
      <div className="team">
        <div className="team-member">
          <img className="img5" src={team5} />
          <div>
            <p>
              Linda Adriano,
            </p>
            <p>
              Scheme Co-Ordinator
            </p>
            <p>
              CFR Instructor
            </p>
          </div>

        </div>
        <div className="team-member">
          <img className="img4" src={team7} />
          <div>
            <p>
              Tanya Mullins
            </p>
            <p>
              CFR Instructo
            </p>
            <p>

            </p>

          </div>

        </div>
        <div className="team-member">
          <img className="img4" src={team4} />
          <div>
            <p>
              Miriam Grace
            </p>
            <p>
              Grace Solicitors
            </p>
            <p>
              Callan
            </p>
          </div>

        </div>
        <div className="team-member">
          <img className="img4" src={team10} />
          <div>
            <p>
              Laura Doheny
            </p>
            <p>
              Legal Secretary at Poe Kiely Solicitors
            </p>
            <p>
              Kilkenny
            </p>

          </div>

        </div>
        <div className="team-member">
          <img className="img4" src={team9} />
          <div>
            <p>
              Kelly Ann Brett
            </p>
            <p>
              First Responder
            </p>

          </div>

        </div>
        <div className="team-member">
          <img src={team2} />
          <div>
            <p>
              Deirdre Cunningham
            </p>
            <p>
              EMT (Emergency Medical Technician)
            </p>
            <p>

            </p>

          </div>
        </div>
        <div className="team-member">
          <img src={team3} />
          <div>
            <p>
              Cian Murphy is a qualified EMT

            </p>
            <p>
              (Emergency Medical Technician)
            </p>
            <p>

            </p>

          </div>
        </div>
        <div className="team-member">
          <img src={team1} />
          <div>
            <p>
              Billy Bergin
            </p>
            <p>
              First Responder
            </p>
            <p>

            </p>

          </div>
        </div>
        <div className="team-member">
          <img className="img4" src={team6} />
          <div>
            <p>
              Ruth Dreeling

            </p>
            <p>
              Secretary & Garda Vetting officer (Not on call)
            </p>
            <p>

            </p>

          </div>

        </div>

        <div className="team-member">
          <img className="img4" src={team8} />
          <div>
            <p>
              Ann Marie Nolan
            </p>
            <p>
              Camphill Callan, Treasurer & Co-founder
            </p>
            <p>

            </p>

          </div>

        </div>


      </div>
    );
  }
}

export default Team;
