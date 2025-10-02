import { useState, useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // ✅ fixed imports
import profilePic from "../assets/professional_photo.jpg";

export default function Hero() {
  const [text, setText] = useState('');
  const roles = ['Frontend Developer', 'Data Scientist', 'UI/UX Enthusiast'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // ✅ typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white px-6 py-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: Math.random() * 5 + 's'
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left side text */}
        <div className="text-left space-y-6">
          <div className="space-y-2">
            <p className="text-lg text-purple-300 font-light tracking-wide">
              Hello, I'm
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Dhanusri
            </h1>
          </div>

          {/* Typing animation */}
          <div className="h-16 flex items-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              <span className="text-gray-400">I'm a </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                {text}
              </span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Passionate about crafting elegant web experiences and extracting insights from data. 
            I blend creativity with technical expertise to build solutions that make an impact.
          </p>

          {/* Social icons */}
          <div className="flex gap-5 pt-4">
            {[
              { Icon: FaEnvelope, href: 'mailto:youremail@example.com', color: 'hover:text-red-400' },
              { Icon: FaGithub, href: 'https://github.com/yourusername', color: 'hover:text-gray-300' },
              { Icon: FaLinkedin, href: 'https://linkedin.com/in/yourprofile', color: 'hover:text-blue-400' },
              { Icon: FaTwitter, href: 'https://twitter.com/yourhandle', color: 'hover:text-sky-400' }
            ].map(({ Icon, href, color }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:bg-white/20 ${color} border border-white/20`}
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="/resume.pdf"
              download
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold shadow-lg shadow-purple-500/50 transition-all duration-300 hover:shadow-purple-500/80 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Download CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-purple-400/50 rounded-full font-semibold backdrop-blur-sm hover:bg-purple-400/10 transition-all duration-300 hover:border-purple-400"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right side profile image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Profile container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Spinning border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-spin" style={{ animationDuration: '3s' }}></div>
              
              {/* Placeholder image */}
              {/* Profile image */}
            <div className="absolute inset-1 rounded-full overflow-hidden bg-slate-900">
            <img 
                src={profilePic} 
                alt="Dhanusri" 
                className="w-full h-full object-cover"
                />
            </div>

            </div>

            {/* Decorative blobs */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-60 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-xl opacity-60 group-hover:scale-125 transition-transform duration-500"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-purple-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
