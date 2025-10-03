import React from "react";

const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d={path} />
  </svg>
);

const contactDetails = [
    {
        name: "Email",
        handle: "arpanwar26@gmail.com",
        href: "mailto:arpanwar26@gmail.com",
        icon: <Icon path="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" className="w-6 h-6 text-indigo-400" />
    },
    {
        name: "LinkedIn",
        handle: "Arvind Singh Panwar",
        href: "https://www.linkedin.com/in/arvind-singh-panwar-924a92281",
        icon: <Icon path="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" className="w-6 h-6 text-indigo-400" />
    },
    {
        name: "GitHub",
        handle: "newdevatgit",
        href: "https://github.com/newdevatgit",
        icon: <Icon path="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" className="w-6 h-6 text-indigo-400" />
    },
    {
      name: "Instagram",
      handle: "@arvindsinghmds",
      href: "https://www.instagram.com/arvindsinghmds",
      icon: <Icon path="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 110 2.24 1.12 1.12 0 010-2.24z" className="w-6 h-6 text-indigo-400" />
    }
];

const ContactCard = ({ detail }) => (
    <a 
        key={detail.name}
        href={detail.href} 
        target={detail.name === 'Location' ? '_self' : '_blank'}
        rel="noopener noreferrer" 
        className={`group p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-indigo-500 transition-all duration-300 flex flex-col items-center text-center space-y-3 ${detail.name === 'Location' ? 'cursor-default' : 'hover:scale-[1.02]'}`}
        onClick={(e) => detail.name === 'Location' && e.preventDefault()}
    >
        <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
            {detail.icon}
        </div>
        <h3 className="text-xl font-semibold text-white">
            {detail.name}
        </h3>
        <p className="text-gray-400 text-sm group-hover:text-indigo-400 transition-colors duration-300">
            {detail.handle}
        </p>
    </a>
);

export default function Contact() {
  return (
    <section id="contact" className="py-10 p-6 bg-black text-white flex items-center">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <div className="space-y-6">
            <h2 className="text-4xl font-title text-left font-extrabold text-white">
              Contact Me
            </h2>
            <p className="text-gray-400 font-reading text-left text-lg max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the platforms below!
            </p>
          </div>

          
          <div className="pt-8 grid sm:grid-cols-2 gap-6 lg:pt-0 font-reading ">
            {contactDetails.map((detail) => (
                <ContactCard key={detail.name} detail={detail} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
