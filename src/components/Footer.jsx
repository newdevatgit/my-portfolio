import React from "react";

const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-center sm:text-left mb-4 sm:mb-0">
          &copy; {currentYear} Arvind Singh Panwar. All Rights Reserved.
        </p>
        <div className="flex items-center">
          <button
            onClick={scrollToTop}
            className="text-sm hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2"
          >
            Back to Top
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
