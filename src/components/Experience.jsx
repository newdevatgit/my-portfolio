import React from "react";

// Experience data
const experienceData = [
  {
    role: "Web Development Intern",
    company: "Paathshala EduCare",
    period: "Aug 2023 - Nov 2023",
    details: [
      "Developed and maintained responsive user interfaces for educational platforms using React.js and Vue.js.",
      "Collaborated with UI/UX designers to translate wireframes and mockups into functional web pages.",
      "Assisted in debugging and optimizing code to improve application performance and user experience.",
      "Gained hands-on experience with version control systems like Git."
    ],
    certificateUrl: "https://drive.google.com/file/d/1PgfaUTGcUF8nMgaa_DvWHDOJxLl2bTn3/view?usp=drive_link",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    ),
  },
  
];

const ExperienceCard = ({ role, company, period, details, certificateUrl, icon, isLast }) => (
    <div className="relative flex items-start">
        {/* Timeline Line */}
        {!isLast && <div className="absolute left-6 top-8 w-0.5 h-full bg-indigo-300 dark:bg-indigo-700"></div>}
        
        {/* Timeline Icon */}
        <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 dark:bg-indigo-600 text-white rounded-full flex items-center justify-center z-10">
            {icon}
        </div>
        
        {/* Card Content */}
        <div className="ml-6 flex-1">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 mb-1">{period}</p>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{role}</h4>
                <p className="text-md font-medium text-gray-600 dark:text-gray-300 mt-1 mb-4">{company}</p>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400 list-disc text-left bg-gray-900 p-4 rounded-xl list-inside mb-6">
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
                {certificateUrl && (
                    <a
                        href={certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/50 dark:hover:bg-indigo-900 text-indigo-600 dark:text-indigo-300 font-semibold px-5 py-2 rounded-lg transition-colors duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Certificate
                    </a>
                )}
            </div>
        </div>
    </div>
);

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Work Experience
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-500 dark:text-indigo-400 font-semibold">
            My professional journey
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
                {experienceData.map((exp, index) => (
                    <ExperienceCard 
                        key={exp.role}
                        {...exp}
                        isLast={index === experienceData.length - 1}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
