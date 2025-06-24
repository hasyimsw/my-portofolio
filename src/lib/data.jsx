import corpcommentImg from "../assets/corpcomment.png";
import rmtdevImg from "../assets/rmtdev.png";
import wordanalyticsImg from "../assets/wordanalytics.png";

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
  "React",
  "Next.js",
  "TypeScript",
  "MongoDB",
  "Tailwind",
  "Prisma",
  "SQL",
  "Framer",
  "Redux",
  "Node.js",
  "Git",
  "GitHub",
  "VSCode",
  "Postman",
  "Jira",
  "Jira Cloud",
  "Jira Server",
  "Jira Webhook",
  "Jira API",
  "Jira CLI",
  "Jira REST API",
];
