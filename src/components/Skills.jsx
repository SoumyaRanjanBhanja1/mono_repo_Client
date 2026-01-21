import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ParticlesBackground from "./ParticlesBackground";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

// Electrical Skills
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

// Technical Skills
// const techSkills = [
//   { name: "HTML", level: 90, description: "Markup language for structuring web pages." },
//   { name: "CSS", level: 85, description: "Used to style and layout web pages." },
//   { name: "JavaScript", level: 80, description: "Adds interactivity to websites." },
//   { name: "React.js", level: 80, description: "Library for building UI components." },
//   { name: "Redux", level: 75, description: "State management for React apps." },
//   { name: "Node.js", level: 75, description: "Backend JavaScript runtime." },
//   { name: "MongoDB", level: 70, description: "NoSQL database for backend." },
//   { name: "Tailwind CSS", level: 80, description: "Utility-first CSS framework." },
// ];

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("list");

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  const filteredTechSkills = techSkills.filter((skill) =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <ParticlesBackground />

      <h2 className="text-4xl font-bold text-center mb-10 relative z-10 drop-shadow-lg" data-aos="fade-up">
        My Skills
      </h2>

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        {/* View Toggle */}
        <div className="flex justify-end mb-4" data-aos="fade-right">
          <button
            onClick={() => setViewMode(viewMode === "list" ? "chart" : "list")}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition font-semibold shadow-md"
          >
            Switch to {viewMode === "list" ? "Chart View" : "List View"}
          </button>
        </div>

        {/* Electrical Skills */}
        <div data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-6 border-b-2 border-gray-600 pb-2">
            Electrical Engineering Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {electricalSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-md shadow hover:shadow-xl transition duration-300"
                data-aos="zoom-in"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        {/* <div data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-6 border-b-2 border-gray-600 pb-2">
            Technical Skills
          </h3>

          {viewMode === "list" ? (
            <>
              {/* Search Bar */}
              {/* <div className="mb-6" data-aos="fade-left">
                <input
                  type="text"
                  placeholder="Search technical skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                /> */}
              </div> */}

              {/* List View */}
              {/* * {filteredTechSkills.length > 0 ? ( */}
                {/* <div className="space-y-6">
                  {filteredTechSkills.map((skill, index) => (
                    <div key={index} className="relative group" data-aos="fade-right">
                      <div className="flex justify-between mb-1 items-center">
                        <span className="text-lg font-medium relative cursor-pointer">
                          {skill.name}
                          <span className="absolute z-10 w-52 px-3 py-2 text-sm rounded-md bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -top-12 left-1/2 -translate-x-1/2 shadow-lg">
                            {skill.description}
                          </span>
                        </span>
                        <span className="text-sm text-gray-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-4">
                        <div
                          className="bg-green-500 h-4 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div> */}
              {/* ) : ( */}
                {/* <p className="text-gray-400">No matching skills found.</p> */}
              {/* )} */}
            {/* </> */ */}
          {/* ) : ( */}
            // Chart View
            {/* <div
              className="w-full h-[400px] bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-700"
              data-aos="fade-up"
            >
              // <ResponsiveContainer width="100%" height="100%"> */}
                {/* <RadarChart outerRadius={120} data={techSkills}>
                  <PolarGrid stroke="#4b5563" />
                  <PolarAngleAxis dataKey="name" stroke="#e5e7eb" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#9ca3af" />
                  <Radar
                    name="Skill Level"
                    dataKey="level"
                    stroke="#34d399"
                    fill="#34d399"
                    fillOpacity={0.6}
                  />
                </RadarChart> */}
              {/* </ResponsiveContainer> */}
            {/* </div>
          )}
        </div>
      </div> */}
    </section>
  );
};

export default Skills;
