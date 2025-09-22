import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import bgImage from "../assets/theme_contact_bg.jpg"; // <-- your background image

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center text-white px-6 py-12"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Glassmorphism box */}
      <div className="bg-black/60 max-w-3xl w-full mx-auto flex flex-col items-center justify-center px-6 py-10 rounded-2xl">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
        <p className="mb-10 text-lg text-center max-w-xl">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat!
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-center w-full">
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-md">
            <FaEnvelope className="text-yellow-400 text-2xl mx-auto mb-2" />
            <p className="font-semibold">Email</p>
            <p className="text-sm">youremail@example.com</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-md">
            <FaPhone className="text-green-400 text-2xl mx-auto mb-2" />
            <p className="font-semibold">Phone</p>
            <p className="text-sm">+91 98765 43210</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-md">
            <FaMapMarkerAlt className="text-red-400 text-2xl mx-auto mb-2" />
            <p className="font-semibold">Location</p>
            <p className="text-sm">Chennai, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-md w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white/80 text-gray-900"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white/80 text-gray-900"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white/80 text-gray-900"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex gap-6 mt-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/dhanusri-m-aa1088290/" // <-- replace with your LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Dhanusri-M02" // <-- replace with your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-gray-300 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
