import React from "react";
import Link from "next/link";
import "../css/home.css";
import Particles from "react-particles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);

  const options1 = {
    name: "Polygon Mask",
    interactivity: {
      detect_on: "window",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onDiv: {
          elementId: "repulse-div",
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "repulse",
          // mode: "trail",
          parallax: {
            enable: false,
            force: 1,
            smooth: 10,
          },
        },
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 10,
          opacity: 10,
          size: 10,
        },
        connect: {
          distance: 50,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 400,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 10,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 80,
          duration: 10,
        },
        slow: {
          active: false,
          radius: 0,
          factor: 1,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        blink: false,
        color: "#ffffff",
        consent: false,
        distance: 60,
        enable: true,
        opacity: 0.5,
        width: 3,
      },
      move: {
        enable: true,
        outModes: "bounce",
        speed: 1,
      },
      number: {
        limit: 0,
        value: 500,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 2,
          sync: false,
        },
        value: {
          min: 0.05,
          max: 0.4,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 1,
      },
    },
    polygon: {
      draw: {
        enable: true,
        lineColor: "rgba(255,255,255,0.7)",
        lineWidth: 1,
      },
      enable: true,
      move: {
        radius: 10,
      },
      inline: {
        arrangement: "equidistant",
      },
      scale: 1.7,
      type: "inline",
    },
    background: {
      repeat: "no-repeat",
      z_index: 500,
      size: "100% 100%",
    },
    fullScreen: false,
  } as ISourceOptions;
  return (
    <div className="home">
      <Particles id="tsparticles" options={options1} init={particlesInit} />
      <div className="homevideodiv">
        <img src="/images/image1.jpg" alt="" />
      </div>
      <div className="overlay">
        <div>
          <h1>Your dream </h1>
        </div>

        <div className="slidingVertical">
          <h1>
            <span>Apartment</span>
            <span>Bungalow</span>
            <span>Office</span>
            <span>Plot</span>
            <span>Property</span>
          </h1>
        </div>

        <div>
          <h1>awaits. Find them Here</h1>
        </div>

        <div>
          <a href="/login">
            <button>Get Started</button>
          </a>
        </div>
      </div>
      {/* <Link href="/postproperty">Post Property</Link> */}
    </div>
  );
}
