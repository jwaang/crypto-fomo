import * as React from "react";
import Particles from "react-particles-js";
import { themes } from "../styles/themes";

const ParticlesBackground = ({ theme }) => {
  return (
    <Particles
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "70%",
      }}
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: themes[theme.name].primary,
          },
          opacity: {
            value: 0.5,
            anim: {
              enable: true,
            },
          },
          size: {
            value: 7,
            random: true,
            anim: {
              enable: true,
              speed: 3,
            },
          },
          line_linked: {
            shadow: {
              enable: true,
              color: themes[theme.name].primary,
            },
          },
          move: {
            speed: 0.2,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
