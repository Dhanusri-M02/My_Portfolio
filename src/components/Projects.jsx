import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/theme_project_bg.jpg"; // <-- background image

// Example project images (replace with your real images)
import stressAppImg from "../assets/stress.jpg";
import citizenPortalImg from "../assets/citizen.png";
import covidImg from "../assets/covid.jpg";

const projects = [
  {
    title: "Student Stress Tracker App",
    description:
      "A mobile app to monitor and analyze stress levels in students with suggestions for improvement.",
    image: stressAppImg,
    github: "https://github.com/your-username/student-stress-tracker",
  },
  {
    title: "Citizen Portal",
    description:
      "A reporting platform for citizens to submit issues related to roads, water, and electricity with tracking.",
    image: citizenPortalImg,
    github: "https://github.com/your-username/citizen-portal",
  },
  {
    title: "Covid-19 Detection System",
    description:
      "Deep learning-based detection of Covid-19 and Pneumonia using chest X-ray images.",
    image: covidImg,
    github: "https://github.com/your-username/covid-detection-system",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.3 }}
            className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg p-4 w-72 hover:scale-105 transition transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              {project.description}
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white text-sm px-3 py-1.5 rounded-md shadow hover:bg-blue-700 transition"
            >
              GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
