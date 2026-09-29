import React from "react";
import "./Skills.scss";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className="main" id="skills">
      <section className="what-i-do-section" aria-labelledby="skills-heading">
        <Fade bottom duration={800} distance="20px">
          <header className="skills-section-header">
            <div className="skills-header-copy">
              <p className="skills-eyebrow">CORE CAPABILITIES</p>
              <h1 className="skills-heading" id="skills-heading">
                {skillsSection.title}
              </h1>
              <p className="subTitle skills-text-subtitle">
                {skillsSection.subTitle}
              </p>
            </div>
            <div className="skills-illustration" aria-hidden="true">
              <DisplayLottie animationData={codingPerson} />
            </div>
          </header>
        </Fade>

        <div className="skills-capability-grid">
          {skillsSection.skills.map((skill, index) => (
            <Fade bottom duration={700} distance="16px" key={skill.title}>
              <article className="skills-capability-card glassmorphism">
                <div className="skills-card-topline">
                  <span className="skills-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <i className={skill.icon} aria-hidden="true"></i>
                </div>
                <h2>{skill.title}</h2>
                <p className="subTitle">{skill.description}</p>
                <ul className="skills-tool-list" aria-label="Technologies">
                  {skill.tools.map(tool => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </article>
            </Fade>
          ))}
        </div>
      </section>
    </div>
  );
}
