"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";


export default function ToggleButton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check user's saved theme in localStorage
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark"); // Ensure light mode is the default
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-24 h-12 rounded-full p-1 shadow-md transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 relative bg-gray-200 dark:bg-gray-800"
      aria-label="Toggle theme"
    >
      
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full shadow-sm transition-all duration-300 ease-in-out ${
          isDark ? "translate-x-12 rotate-180 bg-blue-500" : "translate-x-0 rotate-0 bg-blue-500"
        }`}
      >
        {isDark ? (
          <Moon className="h-6 w-6 text-white transition-all duration-300 rotate-180" />
        ) : (
          <Sun className="h-6 w-6 text-white transition-all duration-300" />
        )}
      </div>
      <div className="absolute inset-1 pointer-events-none">
        <Sun className={`absolute left-0 h-10 w-10 p-2 text-blue-500 transition-opacity duration-300 ${isDark ? "opacity-30" : "opacity-0"}`} />
        <Moon className={`absolute right-0 h-10 w-10 p-2 text-blue-500 transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-30"}`} />
      </div>
    </button>
    
  );
}

