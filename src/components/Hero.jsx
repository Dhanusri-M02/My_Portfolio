import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/professional_photo.jpg"; // <-- add your profile image
import bgHero from "../assets/theme_hero_bg.jpg"; // <-- optional background

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white px-6"
      style={{
        backgroundImage: `url(${bgHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="text-left">
          <h2 className="text-2xl text-gray-300 mb-2">Hello, It's Me</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Dhanusri
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-pink-400 mb-6">
            And I'm a <span className="text-blue-400">Frontend Developer</span>
          </h3>

          <p className="text-gray-300 mb-8 max-w-md">
            A passionate developer,data scientist who loves building modern, elegant, and impactful web experiences.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            <a href="mailto:youremail@example.com" target="_blank" rel="noreferrer">
              <FaEnvelope className="text-2xl hover:text-pink-400 transition" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl hover:text-gray-400 transition" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer">
              <FaTwitter className="text-2xl hover:text-sky-400 transition" />
            </a>
          </div>

          {/* Download CV Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg shadow-md transition font-medium"
          >
            Download CV
          </a>
        </div>

        {/* Right: Hexagon Profile Image with Hover Animation */}
        <div className="flex justify-center">
          <div
            className="relative w-64 h-64 md:w-80 md:h-80 shadow-lg transition-transform duration-500 transform hover:scale-105"
            style={{
              clipPath:
                "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
              border: "6px solid #ec4899",
              boxShadow: "0 0 25px #ec4899",
            }}
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
