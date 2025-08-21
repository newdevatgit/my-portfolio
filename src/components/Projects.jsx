import React from "react";

// Reusable Icon for buttons
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d={path} />
  </svg>
);

// Project data
const projects = [
    {
      title: "Event Management UI",
      description: "A user-friendly Event Management UI built with React and Tailwind CSS for planning, organizing, and managing events.",
      imageUrl: "src/assets/Home_page_EM.png",
      tags: ["React", "Tailwind CSS", "firebase"],
      githubUrl: "https://github.com/newdevatgit/event-management-ui",
      liveUrl: "https://neweventique.netlify.app/", 
    },
    {
    title: "Intern Portal",
    description: "An Intern Portal project featuring login/signup, dashboard, leaderboard, and Firebase integration for intern management.",
    imageUrl: "src/assets/Intern_portal_Dashboard.png",
    tags: ["React", "Tailwind CSS","Firebase"],
    githubUrl: "https://github.com/newdevatgit/intern-portal",
    liveUrl: "https://intern-portal-five.vercel.app/", 
  },
    {
      title: "Helpdesk App",
      description: "A Helpdesk web application designed to streamline customer support and issue tracking with a modern UI.",
      imageUrl: "src/assets/Helpdesk.png",
      tags: ["React", "Tailwind CSS"],
      githubUrl: "https://github.com/newdevatgit/helpdesk-app",
      liveUrl: "https://helpdesk-web.netlify.app/", 
    },
  {
    title: "AAO",
    description: "Explore tutorials, productivity tools, learning platforms, and job boards — all in one sleek and responsive web app.",
    imageUrl: "src/assets/AAO-home.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/newdevatgit/AAO",
    liveUrl: "https://newdevatgit.github.io/AAO/", 
  },
  {
    title: "Gradient Generator Tool",
    description: "A simple yet powerful Gradient Generator tool that helps users create and copy custom CSS gradients.",
    imageUrl: "src/assets/gradient_Home-page.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/newdevatgit/Gradient-generator-tool",
    liveUrl: "https://newdevatgit.github.io/Gradient-generator-tool/", 
  },
];


const ProjectCard = ({ title, description, imageUrl, tags, githubUrl, liveUrl }) => (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700">
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Not+Found'; }}/>
        <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => (
                    <span key={tag} className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <div className="flex gap-4">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 w-full justify-center bg-gray-700 hover:bg-gray-800 dark:bg-gray-200 dark:hover:bg-white dark:text-gray-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
                    <Icon path="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" className="w-5 h-5"/>
                    Code
                </a>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 w-full justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
                     <Icon path="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" className="w-5 h-5"/>
                    Live Demo
                </a>
            </div>
        </div>
    </div>
);


export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            My Projects
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-500 dark:text-indigo-400 font-semibold">
            A selection of my recent work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </div>
      </div>
    </section>
  );
}
