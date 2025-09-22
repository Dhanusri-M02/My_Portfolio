import bgHero from "../assets/theme_hero_bg.jpg"; // <-- add your hero image in assets

export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center text-white px-6 bg-gradient-to-br from-gray-900 to-black"
      style={{ backgroundImage: `url(${bgHero})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I’m <span className="text-pink-500">Dhanusri</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
          A passionate developer who loves building modern, elegant, and impactful web experiences.
        </p>

        {/* Extra tagline */}
        <p className="text-md md:text-lg text-pink-300 italic mb-10">
          🚀 Hackathon Enthusiast • 📜 Certified in Web Development • 💡 Always Learning & Creating
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg shadow-md transition font-medium"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg shadow-md transition font-medium"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow-md transition font-medium"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
