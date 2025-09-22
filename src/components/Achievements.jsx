import React from "react";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";
import bgImage from "../assets/theme_achievements_bg.jpg"; // optional background image

const achievements = [
  {
    icon: <FaTrophy className="text-yellow-400 text-3xl mb-3" />,
    title: "Hackathon Winner",
    description: "Secured 1st place in XYZ Hackathon by developing an AI-powered citizen portal.",
  },
  {
    icon: <FaMedal className="text-red-400 text-3xl mb-3" />,
    title: "Certification",
    description: "Earned certifications in Full-Stack Development, React.js, and Java Programming.",
  },
  {
    icon: <FaStar className="text-green-400 text-3xl mb-3" />,
    title: "Research Paper",
    description: "Published a research paper on 'Deep Learning Based Covid-19 Detection' using chest X-ray images.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center justify-center text-white px-6 py-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black/60 max-w-5xl w-full mx-auto px-8 py-12 rounded-2xl text-center">
        <h2 className="text-4xl font-bold mb-10">Achievements</h2>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-md hover:scale-105 transition"
            >
              {achievement.icon}
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
