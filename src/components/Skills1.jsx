// components/Skills.jsx
import React from "react";

const electricalSkills = [
  "Electrical Wiring (Single-phase & Three-phase)",
  "Motor Control & Induction Motor Troubleshooting",
  "Switchgear, Transformer Installation & Maintenance",
  "Star-Delta Starters and Motor Winding Techniques",
  "Preventive and Predictive Maintenance",
  "Project Execution & Site Supervision",
  "Safety Compliance and Protocol Implementation",
  "Team Leadership and Technical Documentation",
];

const techSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Redux",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Nodemailer",
  "Git & GitHub",
];

const Skills1 = () => {
  return (
    <section className="py-12 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>

      <div className="max-w-5xl mx-auto space-y-10">

        {/* Electrical Engineering Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
            Electrical Engineering Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {electricalSkills.map((skill, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {techSkills.map((skill, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills1;
