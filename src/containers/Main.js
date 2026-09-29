import React, {useEffect, useState, Suspense, lazy} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import ScrollToTopButton from "./topbutton/Top";
import SplashScreen from "./splashScreen/SplashScreen";
import NetworkBackground from "../components/NetworkBackground/NetworkBackground";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

// Lazy loading below-the-fold components
const Skills = lazy(() => import("./skills/Skills"));
const StackProgress = lazy(() => import("./skillProgress/skillProgress"));
const WorkExperience = lazy(() => import("./workExperience/WorkExperience"));
const StartupProject = lazy(() => import("./StartupProjects/StartupProject"));
const Achievement = lazy(() => import("./achievement/Achievement"));
const Blogs = lazy(() => import("./blogs/Blogs"));
const Footer = lazy(() => import("../components/footer/Footer"));
const Talks = lazy(() => import("./talks/Talks"));
const Podcast = lazy(() => import("./podcast/Podcast"));
const Education = lazy(() => import("./education/Education"));
const Twitter = lazy(() => import("./twitter-embed/twitter"));
const Profile = lazy(() => import("./profile/Profile"));

const Main = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const fallbackLoader = <div className="section-loader"><span>Loading...</span></div>;

  return (
    <div className={isDark ? "app-shell theme-dark" : "app-shell theme-light"}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <div className="network-background-layer" aria-hidden="true">
          <NetworkBackground isDark={isDark} />
        </div>
        <div className="app-content">
          {isShowingSplashAnimation && splashScreen.enabled ? (
            <SplashScreen />
          ) : (
            <>
              <Header />
              <Greeting />
              <Suspense fallback={fallbackLoader}>
                <Skills />
                <StackProgress />
                <Education />
                <WorkExperience />
                <StartupProject />
                <Achievement />
                <Blogs />
                <Talks />
                <Twitter />
                <Podcast />
                <Profile />
                <Footer />
              </Suspense>
              <ScrollToTopButton />
            </>
          )}
        </div>
      </StyleProvider>
    </div>
  );
};

export default Main;
