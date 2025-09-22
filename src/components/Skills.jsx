import React from "react";
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
import bgImage from "../assets/theme_skills_bg.jpeg"; // background image

const skills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React JS", logo: reactLogo },
  { name: "Node JS", logo: nodeLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "Mongo DB", logo: mongoLogo },
  { name: "Python", logo: pythonLogo },
  { name: "C", logo: cLogo },
  { name: "Figma", logo: figmaLogo },
  { name: "Java", logo: javaLogo },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Removed overall blue gradient box */}
      <h2 className="text-4xl font-bold mb-4 text-center">
        <span className="text-yellow-400">My</span>{" "}
        <span className="text-red-400">Skills</span>
      </h2>
      <p className="text-center text-lg mb-12 max-w-3xl">
        Writing code using languages : <b>C++, C#, Java, HTML, CSS, JS, Dart,
        PHP, MySQL, and Python</b>.  
        Experienced in hackathons, problem solving, and certified in modern web technologies.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-900/80 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-16 h-16 mb-4 object-contain"
            />
            <p className="text-sm font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
