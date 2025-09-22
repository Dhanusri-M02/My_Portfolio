import myPhoto from "../assets/professional_photo.jpg";
import bgImage from "../assets/theme_about_bg.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Profile Image */}
        <div className="flex justify-center">
          <img
            src={myPhoto}
            alt="About Me"
            className="rounded-full shadow-lg w-80 h-80 object-cover border-4 border-white"
          />
        </div>

        {/* Right Side - About Content */}
        <div className="space-y-8 text-white">
          {/* Title */}
          <div>
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-4 leading-relaxed">
              Hi, I’m <span className="font-semibold text-orange-300">Dhanusri</span>. 
              I am passionate about web development and problem solving. 
              I enjoy building modern, user-friendly applications and I’m always 
              exploring new technologies to grow my skillset.
            </p>
          </div>

          {/* Highlight Card 1 */}
          <div className="bg-orange-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold uppercase">Hackathons & Achievements</h3>
            <p className="mt-2 text-sm">
              Participated in multiple hackathons, building impactful solutions 
              such as Citizen Portal and Student Stress Tracker App. 
              Gained hands-on experience in teamwork, deadlines, and pitching ideas.
            </p>
          </div>

          {/* Highlight Card 2 */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Certifications & Skills</h3>
            <p className="mt-2 text-sm">
              Certified in Web Development and Cloud Basics. Skilled in 
              <span className="font-semibold text-orange-400"> HTML, CSS, JavaScript, React, TailwindCSS, and GitHub</span>.
              Constantly improving my coding and design skills.
            </p>
          </div>

          {/* Download Resume Button */}
          <div>
            <a
              href="/resume.pdf"  // Place your resume file in "public/resume.pdf"
              download
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
