import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Ensure to use slim to optimize bundle size

const NetworkBackground = ({ isDark }) => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: isDark ? "#38bdf8" : "#0ea5e9",
          },
          links: {
            color: isDark ? "#38bdf8" : "#0ea5e9",
            distance: 160,
            enable: true,
            opacity: isDark ? 0.2 : 0.14,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.55,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: window.innerWidth < 700 ? 26 : 44,
          },
          opacity: {
            value: isDark ? 0.34 : 0.24,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2.2 },
          },
        },
        detectRetina: true,
        fullScreen: { enable: false },
      }}
      className="network-particles"
    />
  );
};

export default NetworkBackground;
