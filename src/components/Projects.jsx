import React from "react";
import { projectsData } from "../lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[62rem] scroll-mt-28 mt-28 px-4"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        My Projects
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function Project({ title, description, tags, imageUrl }) {
  return (
    <div className="bg-gray-50 border border-black/5 rounded-md shadow-md flex flex-col h-full">
      <img
        src={imageUrl}
        alt={title}
        className="mb-4 w-full object-cover h-44 rounded-t-md"
      />

      <div className="px-3 flex flex-col h-full">
        <h3 className="text-2xl font-semibold">{title}</h3>

        <p className="mt-2 text-gray-700 leading-relaxed line-clamp-4">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2 mt-auto pt-4 mb-3">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/70 text-xs px-3 py-1 uppercase tracking-wider text-white rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
