import React, {useCallback} from "react";
import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim"; // Ensure to use slim to optimize bundle size

const NetworkBackground = ({isDark}) => {
  const supportsFinePointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;

  const particlesInit = useCallback(async engine => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent"
          }
        },
        fpsLimit: 45,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: false,
              mode: "push"
            },
            onHover: {
              enable: supportsFinePointer,
              mode: ["attract", "grab"]
            },
            resize: true
          },
          modes: {
            attract: {
              distance: 220,
              duration: 1.5,
              factor: 2.2,
              maxSpeed: 4,
              speed: 1.4
            },
            grab: {
              distance: 150,
            links: {
                opacity: isDark ? 0.38 : 0.58
              }
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 100,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: isDark
              ? ["#38bdf8", "#818cf8", "#22d3ee"]
              : ["#075985", "#4338ca", "#0e7490"]
          },
          links: {
            color: isDark ? "#38bdf8" : "#075985",
            distance: 185,
            enable: true,
            opacity: isDark ? 0.14 : 0.3,
            width: isDark ? 0.8 : 1.1
          },
          collisions: {
            enable: false
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 0.42,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 950
            },
            value: window.innerWidth < 700 ? 22 : 42
          },
          opacity: {
            value: {min: isDark ? 0.16 : 0.22, max: isDark ? 0.38 : 0.46},
            animation: {
              enable: true,
              speed: 0.55,
              minimumValue: isDark ? 0.1 : 0.18,
              sync: false
            }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: {min: 1, max: isDark ? 2.4 : 2.8},
            animation: {
              enable: true,
              speed: 0.8,
              minimumValue: 0.8,
              sync: false
            }
          }
        },
        detectRetina: true,
        fullScreen: {enable: false}
      }}
      className="network-particles"
    />
  );
};

export default NetworkBackground;
