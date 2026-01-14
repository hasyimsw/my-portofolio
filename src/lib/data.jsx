import corpcommentImg from "../assets/corpcomment.png";
import rmtdevImg from "../assets/rmtdev.png";
import wordanalyticsImg from "../assets/wordanalytics.png";
import { GiGraduateCap } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
];

export const skillData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "SQL",
  "Microsoft office",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "PHP",
  "Python",
  "Figma",
];

export const experiencesData = [
  {
    title: "Vocational High School Graduate",
    location: "Klaten, Indonesia",
    description:
      "Graduated from SMK N 2 Klaten, majoring in Electrical Engineering. Developed a strong technical foundation in electrical systems, industrial automation, and logical problem-solving.",
    icon: <FaSchool />,
    date: "2019",
  },
  {
    title: "Bachelor of Computer Science",
    location: "Yogyakarta, Indonesia",
    description:
      "Pursued a degree in Informatics at Universitas Amikom Yogyakarta. Developed a solid foundation in software engineering, algorithms, and full-stack web development while actively participating in various tech-driven academic projects.",
    icon: <GiGraduateCap />,
    date: "2021 - 2025",
  },
  {
    title: "IT Staff (Internship)",
    location: "Yogyakarta, Indonesia",
    description:
      "Currently serving as an IT Staff intern at PT HS Silver. Responsible for maintaining IT infrastructure, troubleshooting hardware and software issues, and supporting digital operations to ensure seamless business workflows within the company.",
    icon: <MdWork />,
    date: "2025 - Present",
  },
];
