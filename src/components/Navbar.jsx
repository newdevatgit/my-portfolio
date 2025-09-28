import React, { useState, useEffect } from "react";

const Navbar = () => {
  // State to manage the mobile menu's visibility
  const [isOpen, setIsOpen] = useState(false);
  // State to track the currently active navigation link
  const [activeLink, setActiveLink] = useState("Home");
  // State to track whether the page has been scrolled
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    "About",
    "Skills",
    "Education",
    "Experience",
    "Projects",
  ];

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for navbar background change
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

     
      let currentSection = "Home"; 
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

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink, navLinks]);


  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-xl z-50 transition-all duration-300 `}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand Name */}
          <div className="flex-shrink-0">
             <a href="#home" className="text-4xl font-bold text-black ">
              ASP
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block bg-black rounded-full px-4 py-4">
            <ul className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeLink === link
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
            <a href="#contact" className="bg-black rounded-full px-4 py-4 text-white text-sm font-medium">Get in touch </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu (hamburger) and close (X) */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
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
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
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
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeLink === link
                      ? "bg-indigo-500 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)} 
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
