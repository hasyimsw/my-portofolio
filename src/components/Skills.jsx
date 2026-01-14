import React from "react";

import { skillData } from "../lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 sm:mb-28 max-w-[40rem] mx-auto text-center"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        My Skills
      </h2>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 ">
        {skillData.map((skill, index) => (
          <li
            className="bg-gray-50 border border-black/[0.2] rounded-sm px-5"
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
