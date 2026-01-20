import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState("light");

  // 🔁 initial theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle(
        "dark",
        savedTheme === "dark"
      );
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (prefersDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  // 🌗 toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed bottom-5 right-5 w-12 h-12
        flex items-center justify-center
        rounded-full
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-700
        shadow-xl backdrop-blur-xl
        transition-all duration-300
        hover:scale-110 active:scale-105
      "
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FiSun className="text-black" />
      ) : (
        <FiMoon className="text-white" />
      )}
    </button>
  );
}
