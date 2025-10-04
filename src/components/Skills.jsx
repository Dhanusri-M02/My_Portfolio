import React, { useState } from "react";

// ✅ Import logos from your assets folder
import htmlLogo from "../assets/html.jpeg";
import cssLogo from "../assets/css.jpg";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/node.jpg";
import githubLogo from "../assets/github.png";
import tailwindLogo from "../assets/tailwind.png";
import mongoLogo from "../assets/mongo.png";
import pythonLogo from "../assets/python.png";
import cLogo from "../assets/c.png";
import figmaLogo from "../assets/figma.png";
import javaLogo from "../assets/java.png";

const skills = [
  { name: "HTML", logo: htmlLogo, category: "Frontend", level: 95 },
  { name: "CSS", logo: cssLogo, category: "Frontend", level: 90 },
  { name: "JavaScript", logo: jsLogo, category: "Frontend", level: 88 },
  { name: "React JS", logo: reactLogo, category: "Frontend", level: 85 },
  { name: "Node JS", logo: nodeLogo, category: "Backend", level: 80 },
  { name: "GitHub", logo: githubLogo, category: "Tools", level: 85 },
  { name: "Tailwind CSS", logo: tailwindLogo, category: "Frontend", level: 90 },
  { name: "MongoDB", logo: mongoLogo, category: "Backend", level: 75 },
  { name: "Python", logo: pythonLogo, category: "Language", level: 82 },
  { name: "C", logo: cLogo, category: "Language", level: 78 },
  { name: "Figma", logo: figmaLogo, category: "Design", level: 80 },
  { name: "Java", logo: javaLogo, category: "Language", level: 85 },
];

const categories = ["All", "Frontend", "Backend", "Language", "Tools", "Design"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 50%, #0f0524 100%)",
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-violet-600/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-purple-600/30 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-violet-300">My</span>{" "}
            <span className="text-white">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Proficient in{" "}
            <span className="font-semibold text-violet-300">
              C, Java, Python, HTML, CSS, JavaScript, React, Tailwind, Node.js,
              MongoDB, GitHub, and Figma
            </span>
            . <br />
            Hands-on experience through real-world projects and hackathons.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-white text-violet-700 shadow-lg scale-105"
                  : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group relative bg-white/10 backdrop-blur-md p-6 rounded-2xl 
                         border border-white/20 hover:border-white/40 
                         transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
              }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400/0 to-purple-600/0 
                              group-hover:from-violet-400/20 group-hover:to-purple-600/20 
                              rounded-2xl transition-all duration-300"></div>

              <div className="relative z-10 flex flex-col items-center">
                {/* Logo */}
                <div className="w-20 h-20 mb-4 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-white/20 rounded-xl group-hover:rotate-6 transition-transform duration-300"></div>
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-16 h-16 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Skill Name */}
                <p className="text-base font-bold mb-2 text-center">
                  {skill.name}
                </p>

                {/* Category */}
                <span className="text-xs px-3 py-1 bg-white/20 rounded-full mb-3">
                  {skill.category}
                </span>

                {/* Progress bar */}
                <div
                  className={`w-full transition-all duration-300 ${
                    hoveredSkill === index
                      ? "opacity-100 max-h-20"
                      : "opacity-0 max-h-0"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-white/80">Proficiency</span>
                    <span className="text-xs font-bold text-violet-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-400 to-purple-500 rounded-full transition-all duration-700"
                      style={{
                        width:
                          hoveredSkill === index ? `${skill.level}%` : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
