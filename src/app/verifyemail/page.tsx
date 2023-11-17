"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import "../../css/verifyemailpage.css";
import Particles from "react-particles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import { useCallback } from "react";
import Typewriter from "typewriter-effect";

export default function verifyemailpage() {
  const [userId, setUserId] = useState(0);
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { userId, token });
      setVerified(true);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=");
    setToken(urlToken[2] || "");
    setUserId(parseInt(urlToken[1]));
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

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
      move: {
        enable: true,
        outModes: "bounce",
        speed: 0.5,
      },
      number: {
        limit: 0,
        value: 150,
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
        value: 2,
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
      color: "#000000",
    },
    fullScreen: false,
  } as ISourceOptions;

  return (
    <>
      <Particles id="tsparticles" options={options1} init={particlesInit} />
      <div className="verifydiv">
        <h1>Verify Email</h1>
        <h2>Verification token: {token ? token : "no token"}</h2>
        {verified ? (
          <>
            <h1>Email Verified</h1>
            <Link href="/login">Proceed to login</Link>
          </>
        ) : (
          <>
            <h1>
              Your email is being verified
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  cursor: "",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("......")
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
              />
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{
                margin: "auto",
                background: "rgb(0,0,0,0)",
                display: "block",
              }}
              width="50px"
              height="50px"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
            >
              <circle
                cx="50"
                cy="50"
                fill="none"
                stroke="#fff"
                stroke-width="10"
                r="35"
                stroke-dasharray="164.93361431346415 56.97787143782138"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  dur="1s"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                ></animateTransform>
              </circle>
            </svg>
          </>
        )}
      </div>
    </>
  );
}
