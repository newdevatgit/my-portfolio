import React from "react";

// Education data
const educationHistory = [
  {
    level: "Graduation (B.Tech CSE)",
    institution: "Mahakal Institute of Technology and Management, Ujjain (RGPV University)",
    period: "2022 - 2026",
    grades: "CGPA: 6.95 (up to 6th semester)",
    details: "Pursuing a Bachelor of Technology in Computer Science. Key coursework includes C, Data Structures, Algorithms, Operating Systems, Computer Networks, and Database Management.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 12l11 6 11-6" />
      </svg>
    ),
  },
  {
    level: "Higher Secondary (XII)",
    institution: "Jawahar Navodaya Vidyalaya, Laduna Mandsaur",
    period: "2020 - 2021",
    grades: "Percentage: 86.4%",
    details: "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics, achieving a strong academic record.",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    ),
  },
  {
    level: "Secondary (X)",
    institution: "Jawahar Navodaya Vidyalaya, Laduna Mandsaur",
    period: "2018 - 2019",
    grades: "Percentage: 92.8%",
    details: "Built a strong academic foundation across all core subjects, developing key analytical and problem-solving skills.",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
    ),
  },
];

const EducationCard = ({ level, institution, period, grades, details, icon, isLast }) => (
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
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{level}</h4>
                <p className="text-md font-medium text-gray-600 dark:text-gray-300 mt-1 mb-3">{institution}</p>
                <p className="text-gray-700 dark:text-gray-200 mb-2">{grades}</p>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{details}</p>
            </div>
        </div>
    </div>
);


export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            My Education
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-500 dark:text-indigo-400 font-semibold">
            My academic journey
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
                {educationHistory.map((edu, index) => (
                    <EducationCard 
                        key={edu.level}
                        {...edu}
                        isLast={index === educationHistory.length - 1}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
