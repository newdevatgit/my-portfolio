import React from "react";


const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: <i className="devicon-c-plain text-4xl"></i> },
      { name: "Java", icon: <i className="devicon-java-plain text-4xl"></i> },
      { name: "JavaScript", icon: <i className="devicon-javascript-plain text-4xl"></i> },
      { name: "HTML5", icon: <i className="devicon-html5-plain text-4xl"></i> },
      { name: "CSS3", icon: <i className="devicon-css3-plain text-4xl"></i> },
    //   { name: "SQL", icon: <i className="devicon-mysql-plain text-4xl"></i> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: <i className="devicon-react-original text-4xl"></i> },
      { name: "Tailwind CSS", icon: <i className="devicon-tailwindcss-plain text-4xl"></i> },
    ],
  },
//   {
//     title: "Tools & Platforms",
//     skills: [
//       { name: "Git", icon: <i className="devicon-git-plain text-4xl"></i> },
//       { name: "GitHub", icon: <i className="devicon-github-original text-4xl"></i> },
//       { name: "VS Code", icon: <i className="devicon-vscode-plain text-4xl"></i> },
//       { name: "Figma", icon: <i className="devicon-figma-plain text-4xl"></i> },
//     ],
//   },
  {
    title: "Backend Tools (Learning)",
    skills: [
        { name: "Node.js", icon: <i className="devicon-nodejs-plain text-4xl"></i> },
        { name: "Express.js", icon: <i className="devicon-express-original text-4xl"></i> },
        { name: "MongoDB", icon: <i className="devicon-mongodb-plain text-4xl"></i> },
        { name: "MySQL", icon: <i className="devicon-mysql-plain text-4xl"></i> },
    ]
  }
];

const SkillCard = ({ name, icon }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-indigo-500/30 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 w-36 text-center">
    <div className="text-indigo-500 dark:text-indigo-400 mb-2">{icon}</div>
    <p className="font-semibold text-gray-700 dark:text-gray-200">{name}</p>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            My Technical Skills
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-500 dark:text-indigo-400 font-semibold">
            The technologies I work with
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      
    </section>
  );
}
