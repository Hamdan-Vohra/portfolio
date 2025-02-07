"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine, IOptions } from "tsparticles"; // Import types from tsparticles
import { loadFull } from "tsparticles";

// Type definition for the ParticleBackground component
const ParticleBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine); // load the full tsparticles options
  }, []);

  const particlesOptions: IOptions = {
    particles: {
      number: { value: 80 },
      move: { speed: 2 },
      size: { value: 3 },
      color: { value: "#ff0000" },
      links: { enable: true, color: "#ff0000" },
    },
  };

  return <Particles init={particlesInit} options={particlesOptions} />;
};

export default ParticleBackground;
