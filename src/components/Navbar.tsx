"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = document.querySelector("nav")?.offsetHeight;
      const elementPosition =
        element.getBoundingClientRect().top +
        window.scrollY -
        10 -
        (offset || 0);
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white/20 backdrop-blur-lg shadow-lg text-white p-4 flex justify-between items-center fixed w-full z-10 ">
      <div className="heading-with-image flex justify-center items-center">
        <Image
          alt="profile"
          src={"/profile_1.jpg"}
          width={40}
          height={40}
          priority
          className="h-14 w-14 rounded-full shadow-md md:hidden"
          style={{ objectFit: "cover" }}
        />
        <h1 className="font-bold text-2xl px-4 lg:px-8">
          <span className="glitter-text">Hamdan</span> Vohra
        </h1>
      </div>
      <div>
        <ul className="hidden space-x-10 text-primary-200 px-6 md:flex">
          <li>
            <button onClick={() => handleScroll("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleScroll("education")}>Education</button>
          </li>
          <li>
            <button onClick={() => handleScroll("skills")}>Skills</button>
          </li>
          <li>
            <button onClick={() => handleScroll("projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => handleScroll("contact-me")}>Contact</button>
          </li>
        </ul>
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full right-0 w-64 bg-white/40 backdrop-blur-lg shadow-lg rounded-b-lg md:hidden border border-white/50 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col space-y-3 p-4 text-gray-700">
            <li>
              <button
                onClick={() => handleScroll("home")}
                className="block w-full text-left py-2 px-4 hover:bg-gray-200/30 rounded"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("education")}
                className="block w-full text-left py-2 px-4 hover:bg-gray-200/30 rounded"
              >
                Education
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("skills")}
                className="block w-full text-left py-2 px-4 hover:bg-gray-200/30 rounded"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("projects")}
                className="block w-full text-left py-2 px-4 hover:bg-gray-200/30 rounded"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("contact-me")}
                className="block w-full text-left py-2 px-4 hover:bg-gray-200/30 rounded"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
