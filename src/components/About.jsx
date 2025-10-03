import { 
  FaCode, 
  FaAward, 
  FaBullseye, 
  FaLightbulb, 
  FaRocket, 
  FaStar, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaFileDownload 
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 min-h-screen"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-indigo-500 mb-4">
            About Me
          </h2>
          <div className="flex items-center justify-center gap-2 text-orange-300">
            <FaStar className="w-5 h-5" />
            <p className="text-lg">Full Stack Developer • Problem Solver • Tech Enthusiast</p>
            <FaStar className="w-5 h-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Profile & Contact */}
          <div className="space-y-6">
            {/* Main Profile Card */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                  <FaCode className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Dhanusri</h3>
                  <p className="text-orange-300">Web Developer</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-sm">
                Computer Science student with a passion for creating innovative web solutions. 
                I transform ideas into functional, elegant applications that make a difference.
              </p>
            </div>

            {/* Contact Links */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-700/50">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <FaEnvelope className="w-5 h-5 text-indigo-400" />
                Let's Connect
              </h4>
              <div className="space-y-3">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition">
                  <FaGithub className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition">
                  <FaLinkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition">
                  <FaEnvelope className="w-5 h-5" />
                  <span className="text-sm">Email Me</span>
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <FaFileDownload className="w-6 h-6 text-white" />
                <div>
                  <h4 className="text-white font-bold">My Resume</h4>
                  <p className="text-indigo-100 text-xs">View my complete profile</p>
                </div>
              </div>
              <a
                href="/resume.pdf"
                download
                className="block text-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-indigo-50 transition-all transform hover:scale-105"
              >
                Download PDF
              </a>
            </div>
          </div>

          {/* Middle & Right Columns - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* My Story */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaLightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    My journey into web development started with curiosity and evolved into a passion. 
                    What began as tinkering with HTML and CSS has grown into building full-stack applications 
                    that solve real-world problems. I believe technology should be accessible, intuitive, and impactful.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Currently pursuing my degree in Computer Science, I'm focused on mastering modern web 
                    technologies and contributing to meaningful projects that make a difference in people's lives.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience & Achievements */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Hackathons */}
              <div className="bg-gradient-to-br from-orange-500/90 to-pink-500/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-orange-400/30 hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <FaAward className="w-6 h-6 text-white flex-shrink-0" />
                  <h3 className="text-lg font-bold text-white uppercase">
                    Hackathons & Competitions
                  </h3>
                </div>
                <ul className="text-white/90 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-white/70">•</span>
                    <span>Built <strong>Citizen Portal</strong> - streamlining government services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/70">•</span>
                    <span>Developed <strong>Student Stress Tracker</strong> - mental health monitoring app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/70">•</span>
                    <span>Gained experience in rapid prototyping, team collaboration, and pitching</span>
                  </li>
                </ul>
              </div>

              {/* Skills & Certifications */}
              <div className="bg-gradient-to-br from-indigo-600/90 to-purple-600/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-indigo-400/30 hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <FaCode className="w-6 h-6 text-white flex-shrink-0" />
                  <h3 className="text-lg font-bold text-white uppercase">
                    Skills & Certifications
                  </h3>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  Certified in <strong>Web Development</strong> and <strong>Cloud Basics</strong>. 
                  Continuously expanding my expertise in modern technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "JavaScript", "TailwindCSS", "HTML/CSS", "Git", "GitHub"].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium border border-white/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* What I Offer & Philosophy */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Value Proposition */}
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-700/50">
                <div className="flex items-start gap-3 mb-4">
                  <FaBullseye className="w-6 h-6 text-orange-400 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-white">What I Bring</h3>
                </div>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>Clean, maintainable code that scales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>User-focused design thinking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>Fast learner with strong problem-solving skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>Collaborative team player</span>
                  </li>
                </ul>
              </div>

              {/* Philosophy */}
              <div className="bg-gradient-to-br from-indigo-900/90 to-purple-900/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-indigo-500/30">
                <div className="flex items-start gap-3 mb-4">
                  <FaRocket className="w-6 h-6 text-indigo-300 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-white">My Approach</h3>
                </div>
                <p className="text-indigo-100 text-sm leading-relaxed italic">
                  "I believe in writing code that's not just functional, but elegant. 
                  Every project is an opportunity to learn something new and create 
                  something meaningful. Quality over quantity, always."
                </p>
              </div>
            </div>

            {/* Currently Learning */}
            <div className="bg-gradient-to-r from-pink-600/20 to-orange-600/20 backdrop-blur-sm p-6 rounded-2xl border border-pink-500/30">
              <div className="flex items-center gap-3">
                <FaStar className="w-6 h-6 text-pink-400" />
                <div>
                  <h4 className="text-white font-bold">Currently Exploring</h4>
                  <p className="text-gray-300 text-sm">
                    Advanced React patterns, TypeScript, Node.js, and cloud deployment strategies
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
