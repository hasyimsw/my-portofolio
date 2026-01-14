import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiencesData } from "../lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 sm:mb-28 max-w-[60rem] mx-auto text-center"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        My Experience
      </h2>

      <VerticalTimeline lineColor="rgba(0, 0, 0, 0.1)">
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "#f9fafb",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.2)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid black",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: "#f9fafb",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="vertical-timeline-element-title font-bold text-lg">
              {item.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-sm mt-1">
              {item.location}
            </h4>
            <h5 className="text-md font-semibold mt-2">{item.description}</h5>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
