"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Mail, Instagram, Linkedin } from "lucide-react";

const info = {
  name: "Hamdan Vohra",
  specialization: [
    "Web Developer",
    "Data Scientist",
    "MERN Stack Expert",
    "Open Source Contributor",
  ],
  info_text:
    " Passionate about building scalable web applications, databases, and data\
        structures. Experienced in React.js, MySQL, and MongoDB.",
};
const Info = () => {
  return (
    <div className="flex-1 p-6 md:border-r border-gray-300 flex flex-col justify-center items-start">
      <h2 className="text-6xl font-bold text-gray-800">{info.name}</h2>
      <p className="text-gray-700 mt-2 text-4xl">
        I&apos;m a{" "}
        <span className="text-blue-500 font-semibold">
          <Typewriter
            words={info.specialization}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </p>
      <p className="text-gray-700 mt-6 text-2xl">{info.info_text}</p>
      <div className="flex space-x-6 mt-10">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            size={28}
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
          />
        </a>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram
            size={28}
            className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
          />
        </a>
        <a href="mailto:your.email@example.com">
          <Mail
            size={28}
            className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default Info;
