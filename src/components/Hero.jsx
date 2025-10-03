import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-95vh flex items-center justify-center  bg-gray-300  text-white pt-20"
    >
      <div className="max-h-6xl mx-auto px-[10%] py-5 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 font-title text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-700 font-bold mb-4">
            Hi, I’m <span className="text-black">Arvind Singh Panwar</span>
          </h1>
          <h2 className="text-xl font-serif sm:text-2xl mb-6 text-gray-700">
            A Passionate{" "}
            <span className="font-serif text-indigo-700">Web Developer</span>
          </h2>
          <p className="text-gray-600 font-reading max-w-lg mb-8">
            I create modern, responsive, and user-friendly websites with clean
            code and engaging UI/UX designs. Let's build something amazing
            together!
          </p>
          <div className="flex justify-center font-reading md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-lg font-medium transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-gray-800 text-gray-800 hover:bg-black hover:text-white px-6 py-3 rounded-lg font-medium transition"
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
            className="rounded-full max-h-96 shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
