import React, { Component } from "react";
import {
  FooterContainer,
  FooterColumn,
  FooterLink,
  FooterRow,
  FooterTitle,
  FooterWrapper,
  SponsorShips,
  ogoSponsorShips,
  FooterMedia,
  Media,
  FooterMap,
  FooterColor,
} from "../styles/Footer.style";
import LogoJimmy from "../assests/logo-jimmy.png";
import LogoCityM from "../assests/logo-cityM.png";
import LogoBergin from "../assests/logo-bergin.jpg"
import LogoPoe from "../assests/logo-poe.PNG";
import LogoCallan from "../assests/logo-callan.jpg";

class Footer extends Component {
  iframe = {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4852.7236311608385!2d-7.39011973509714!3d52.54497989999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485d2c10c4d1590f%3A0x1d672c2728ee5ab0!2sCallan%20South%2C%20Co.%20Kilkenny%2C%20R95%20PA48!5e0!3m2!1sen!2sie!4v1666471723133!5m2!1sen!2sie",
    width: "350",
    height: "250",
  };
  render() {
    return (
      <FooterContainer>
        <FooterColumn>
          <FooterTitle>Sponsors</FooterTitle>
          <SponsorShips>
            <img className="jesus" src={LogoCityM} />
            <img className="jesus" src={LogoPoe} />
            <img className="jesus" src={LogoCallan} />
            <img className="jesus" src={LogoJimmy} />
            <img className="jesus" src={LogoBergin} />
          </SponsorShips>
        </FooterColumn>

        <FooterColumn>
          <FooterMedia>
            <FooterTitle>Social Media</FooterTitle>
            <Media>
              <FooterLink
                target="_blank"
                href="https://www.facebook.com/callancfr"
              >
                <i className="fa-brands fa-facebook"></i>
                Facebook
              </FooterLink>
              <FooterLink
                target="_blank"
                href="https://www.instagram.com/callancfr/?hl=en"
              >
                <i className="fa-brands fa-instagram"></i>
                Instagram
              </FooterLink>
              <FooterLink
                target="_blank"
                href="https://www.youtube.com/channel/UCUfN-sC92PrXGn6WHzYfp2w"
              >
                <i className="fa-brands fa-youtube"></i>
                YouTube
              </FooterLink>
              <FooterLink target="_blank" href="https://twitter.com/CallanC">
                <i className="fa-brands fa-twitter"></i>
                Twitter
              </FooterLink>
              <FooterLink target="_blank">
                <i className="fa-solid fa-envelope"></i>
                callanfirstresponders@gmail.com
              </FooterLink>
            </Media>
          </FooterMedia>
          <FooterMap>
            <FooterColor></FooterColor>

            <FooterTitle>Address</FooterTitle>
            <iframe className="footer-map"
              src={this.iframe.src}
              width={this.iframe.width}
              height={this.iframe.height}
            />
          </FooterMap>
        </FooterColumn>
      </FooterContainer>
    );
  }
}

export default Footer;
