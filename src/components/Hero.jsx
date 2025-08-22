import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center  bg-gray-900  text-white pt-20"
    >
      <div className="max-h-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I’m <span className="text-indigo-400">Arvind Singh Panwar</span>
          </h1>
          <h2 className="text-xl sm:text-2xl mb-6 text-gray-300">
            A Passionate{" "}
            <span className="text-purple-400">Web Developer</span>
          </h2>
          <p className="text-gray-400 max-w-lg mb-8">
            I create modern, responsive, and user-friendly websites with clean
            code and engaging UI/UX designs. Let's build something amazing
            together!
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/Profile-pic.jpeg"
            alt="Profile"
            className="rounded-full max-h-96 border-4 border-indigo-500 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
