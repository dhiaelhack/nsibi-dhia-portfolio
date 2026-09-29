import React from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import profilePhoto from "../../assets/images/NsibiDhiaElhack.jpeg";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button
                  text="Contact me"
                  href="#contact"
                  className="greeting-action"
                />
                {greeting.resumeLink && (
                  <Button
                    text="Download my resume"
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="greeting-action"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="profile-photo-frame">
              <img
                alt="Dhia Elhack Nsibi"
                src={profilePhoto}
                className="profile-photo-img"
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
