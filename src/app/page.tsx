"use client";
import { useEffect } from "react";
import Info from "@/components/Info";
import Profile from "@/components/Profile";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="pt-[6rem] min-h-screen flex flex-col items-center justify-center bg-transparent-100 p-4 overflow-hidden">
      <section
        id="home"
        className="w-full min-h-screen max-w-6xl flex flex-col md:flex-row bg-gray-600 shadow-lg rounded-lg overflow-hidden text-lg decoration-white items-center justify-center"
      >
        <Info />
        <Profile />
      </section>
      <section
        id="education"
        className="mt-[4rem] w-full min-h-screen max-w-6xl flex flex-col md:flex-row bg-gray-600 shadow-lg rounded-lg overflow-hidden text-lg decoration-white items-center justify-center"
      >
        Education Section
      </section>
      <section
        id="skills"
        className="mt-[4rem] w-full min-h-screen max-w-6xl flex flex-col md:flex-row bg-gray-600 shadow-lg rounded-lg overflow-hidden text-lg decoration-white items-center justify-center"
      >
        Skills Section
      </section>
      <section
        id="projects"
        className="mt-[4rem] w-full min-h-screen max-w-6xl flex flex-col md:flex-row bg-gray-600 shadow-lg rounded-lg overflow-hidden text-lg decoration-white items-center justify-center"
      >
        Projects Section
      </section>
      <section
        id="contact-me"
        className="mt-[4rem] w-full min-h-screen max-w-6xl flex flex-col md:flex-row bg-gray-600 shadow-lg rounded-lg overflow-hidden text-lg decoration-white items-center justify-center"
      >
        Contact Me Section
      </section>
    </main>
  );
}
