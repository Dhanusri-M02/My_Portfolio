import React from "react";

export default function Navbar({ theme, setTheme }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur p-4 flex items-center justify-between">
      {/* Clickable name that scrolls to Hero */}
      <a
        href="#hero"
        className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-500 transition"
      >
        Dhanusri
      </a>

      {/* Navigation links */}
      <div className="flex items-center gap-8">
        <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
          About
        </a>
        <a href="#skills" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
          Skills
        </a>
        <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
          Projects
        </a>
        <a href="#achievements" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
          Achievements
        </a>
        <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
          Contact
        </a>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
