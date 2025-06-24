import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import fotoProfil from "../assets/images.jpeg";

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] mx-auto text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="pt-28 sm:pt-36 flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <img
              src={fotoProfil}
              alt="Me"
              width="192"
              height="192"
              className="h-24 w-24 rounded-full object-cover border-[0.25rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Hasyim.</span> I'm a{" "}
        <span className="font-bold">front-end developer</span> with a passion
        for creating <span className="italic">interactive and visually</span>{" "}
        appealing web experiences. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-sm font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition shadow-sm"
        >
          Contact me here <BsArrowRight />
        </a>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer shadow-sm"
          href="../assets/CV.pdf"
          download="Hasyim CV.pdf"
        >
          Download CV <HiDownload />
        </a>

        <a
          className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] transition cursor-pointer shadow-sm"
          href="https://linkedin.com"
          target="_blank"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] transition cursor-pointer shadow-sm"
          href="https://github.com/hasyimsw"
          target="_blank"
        >
          <FaGithub size={24} />
        </a>
      </motion.div>
    </section>
  );
}
