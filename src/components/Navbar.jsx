import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("About");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    "About",
    "Skills",
    "Education",
    "Experience",
    "Projects",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      let currentSection = "About"; 
      navLinks.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            currentSection = link;
          }
        }
      });

      if (currentSection !== activeLink) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink, navLinks]);


  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center my-2 justify-between h-15 font-reading">
          
          <div className="flex-shrink-0">
            <a href="/" className={`text-3xl font-bold font-cursive transition-colors duration-300 ${scrolled || isOpen ? 'text-white' : 'text-gray-800'}`}>
              Arvind singh panwar
            </a>
          </div>

          
          <div className="hidden md:block bg-black shadow-xl rounded-full px-4 py-3">
            <ul className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                      ${activeLink === link
                        ? "bg-indigo-500 text-white shadow-lg"
                        : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                      }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="bg-indigo-500 hover:bg-indigo-700 rounded-full px-5 py-3 text-white shadow-xl text-sm font-medium transition-colors duration-300">Get in touch </a>
          </div>

          
          <div className="-mr-2 flex md:hidden">
            {/* Hamburger button: only visible when menu is CLOSED */}
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className={`${isOpen ? 'hidden' : 'inline-flex'} items-center justify-center p-2 rounded-full text-gray-400 hover:text-white bg-black/50 hover:bg-black/80 transition-colors duration-300`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 flex flex-col items-center justify-center z-40 transition-opacity duration-300">
          {/* Close button: absolute positioned on the full screen overlay */}
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="absolute top-6 right-6 inline-flex items-center justify-center p-3 rounded-full text-white hover:text-gray-300 bg-white/10 hover:bg-white/20 transition-colors duration-300 z-50"
            aria-label="Close main menu"
          >
            <span className="sr-only">Close main menu</span>
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          
          <div className="w-full max-w-md mx-auto p-8 rounded-lg font-reading">
            <ul className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`block text-xl font-extrabold px-4 py-3 rounded-full transition-all duration-300 
                      ${activeLink === link
                        ? "bg-indigo-500 text-white shadow-lg"
                        : "text-gray-300 hover:text-white hover:underline hover:underline-offset-8"
                      }`}
                    onClick={() => setIsOpen(false)} 
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="mt-6 block text-xl font-extrabold px-4 py-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-500 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
