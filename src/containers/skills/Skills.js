import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className="skills-heading">{skillsSection.title} </h1>
            <p className="subTitle skills-text-subtitle">
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                const parts = skills
                  .split(/(\*\*.*?\*\*)/g)
                  .map((part, index) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return (
                        <strong key={index} className="skill-emphasis">
                          {part.slice(2, -2)}
                        </strong>
                      );
                    }
                    return part;
                  });
                return (
                  <p
                    key={i}
                    className="subTitle skills-text glassmorphism"
                    style={{padding: "15px", marginBottom: "10px"}}
                  >
                    {parts}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
