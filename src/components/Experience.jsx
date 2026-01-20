import React, { useEffect, useState } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiencesData } from "../lib/data";

export default function Experience() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 👀 observe dark mode change
  useEffect(() => {
    const updateTheme = () => {
      setIsDarkMode(
        document.documentElement.classList.contains("dark")
      );
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="scroll-mt-28 mt-28 sm:mb-28 max-w-[60rem] mx-auto text-center"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center dark:text-white">
        My Experience
      </h2>

      <VerticalTimeline
        lineColor={
          isDarkMode
            ? "rgba(255, 255, 255, 0.35)"
            : "rgba(0, 0, 0, 0.1)"
        }
      >
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            icon={item.icon}
            contentStyle={{
              background: isDarkMode ? "#111827" : "#f9fafb",
              boxShadow: "none",
              border: isDarkMode
                ? "3px solid rgba(255,255,255,0.2)"
                : "3px solid rgba(0,0,0,0.06)",
              textAlign: "left",
              padding: "1.3rem 2rem",
              color: isDarkMode ? "#f9fafb" : "#111827",
            }}
            contentArrowStyle={{
              borderRight: isDarkMode
                ? "0.4rem solid rgba(255,255,255,0.4)"
                : "0.4rem solid gray",
            }}
            iconStyle={{
              background: isDarkMode ? "#111827" : "#f9fafb",
              color: isDarkMode ? "#ffffff" : "#000000",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-bold text-lg">
              {item.title}
            </h3>
            <h4 className="text-sm mt-1 opacity-80">
              {item.location}
            </h4>
            <h5 className="text-md font-semibold mt-2">
              {item.description}
            </h5>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
