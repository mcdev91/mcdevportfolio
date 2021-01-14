import React from "react";
import { Particles as ReactParticles } from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    position: "fixed",
    opacity: "1",
    background: "#000000",
  },
}));

const Particles = () => {
  const classes = useStyles();

  return (
    <ReactParticles
      canvasClassName={classes.particlesCanvas}
      params={{
        particles: {
          color: {
            value: "77ff00"
          },
          shape: {
            type: 'circle',
          },
          move: {
            speed: 2
          },
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          size: {
            value: 2,
            random: true,
            anim: {
              sync: true,
            },
          },
          opacity: {
            value: 5,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              opacity_min: 0.1,
              sync: false,
            },
          },
        },
      }}
    />
  );
};

export default Particles;
