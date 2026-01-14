import React from "react";
import { projectsData } from "../lib/data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28 mx-auto max-w-[45rem] px-4">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        My Projects
      </h2>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      {/* <div className="max-w-[45rem] mx-auto">
        {projectsData.map((project, index) => (
          <div key={index} className="mb-8">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-32 h-32 object-cover"
            />
            <p>{project.description}</p>
            <p>{project.tags}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
}

function Project({ title, description, tags, imageUrl }) {
  return (
    <article className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-2 sm:mb-8 last:mb-0">
      <div className="py-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <img
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl"
          src={imageUrl}
          alt={title}
        />
      </div>
    </article>
  );
}
