import React, {useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className="header glassmorphism">
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          checked={menuOpen}
          onChange={event => setMenuOpen(event.target.checked)}
        />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul
          className="menu"
          id="site-menu"
          onClick={event => {
            if (event.target.closest("a")) {
              setMenuOpen(false);
            }
          }}
        >
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li className="menu-theme-toggle">
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
