import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticleBackground = () => {
  const options = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["", "", "", ""],
      },
      shape: {
        type: "triangle",
      },
      opacity: {
        value: 0.75,
      },
      size: {
        value: { min: 1, max: 8 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#fff",
        opacity: 0.4,
        width: 1.5,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "bottom-right",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="App">
      <Particles options={options} init={particlesInit} />
    </div>
  );
};

export default ParticleBackground;
