const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: <i className="devicon-c-plain text-4xl"></i> },
      { name: "Java", icon: <i className="devicon-java-plain text-4xl"></i> },
      {
        name: "C++", icon: <i className="devicon-cplusplus-plain text-4xl"></i>
      },
      { name: "JavaScript", icon: <i className="devicon-javascript-plain text-4xl"></i> },
      { name: "HTML5", icon: <i className="devicon-html5-plain text-4xl"></i> },
      { name: "CSS3", icon: <i className="devicon-css3-plain text-4xl"></i> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: <i className="devicon-react-original text-4xl"></i> },
      { name: "Tailwind CSS", icon: <i className="devicon-tailwindcss-plain text-4xl"></i> },
    ],
  },
  // {
  //   title: "Tools & Platforms",
  //   skills: [
  //     { name: "Git", icon: <i className="devicon-git-plain text-4xl"></i> },
  //     { name: "GitHub", icon: <i className="devicon-github-original text-4xl"></i> },
  //     { name: "VS Code", icon: <i className="devicon-vscode-plain text-4xl"></i> },
  //     { name: "Figma", icon: <i className="devicon-figma-plain text-4xl"></i> },
  //   ],
  // },
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

  <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-black rounded-xl shadow-md hover:shadow-black/50 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-36 text-center border border-gray-100 dark:border-gray-600">
    <div className="text-indigo-600 dark:text-indigo-400 mb-2">{icon}</div>
    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">{name}</p>
  </div>
);

export default function Skills() {
  return (
 
    <section id="skills" className="py-10 bg-white dark:bg-gray-300 text-gray-800 dark:text-gray-100 lg:p-6">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Title */}
        <div className="text-center font-title mb-12">
          <h2 className="text-4xl font-extrabold text-black sm:text-5xl">
            My Technical Skills
          </h2>
          <p className="mt-4 text-xl leading-8 text-gray-600 dark:text-gray-500 font-medium">
            The technologies I work with and i am currently learning
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 font-reading">
          {skillCategories.map((category) => (
            <div 
              key={category.title} 
              className="p-6 md:p-8 bg-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 "
            >
              <h3 className="text-2xl font-bold text-center mb-6 text-black dark:text-gray-900 border-b pb-3 border-indigo-100 dark:border-indigo-300">
                {category.title}
              </h3>
              
              {/* Flex wrapper for the skill cards */}
              <div className="flex flex-wrap justify-center gap-4">
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
