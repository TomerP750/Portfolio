import { Technology } from "../Models/Technology.ts";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import {
    SiSpring,
    SiTypescript,
    SiJavascript,
    SiMysql,
    SiMongodb,
    SiTailwindcss,
    SiDocker, SiSocketdotio, SiPostman,
    SiFramer,
    SiNodedotjs,
    SiExpress,
    SiNestjs
} from "react-icons/si";

export const technologiesData: Record<string, Technology> = {
  java: new Technology("Java", "#ca8d1a", FaJava),
  spring: new Technology("Spring", "#6DB33F", SiSpring),
  react: new Technology("React", "#61DAFB", FaReact),
  typescript: new Technology("TypeScript", "#3178C6", SiTypescript),
  javascript: new Technology("JavaScript", "#F7DF1E", SiJavascript),
  mysql: new Technology("MySQL", "#4479A1", SiMysql),
  mongodb: new Technology("MongoDB", "#47A248", SiMongodb),
  html5: new Technology("HTML5", "#E34F26", FaHtml5),
  css3: new Technology("CSS3", "#1572B6", FaCss3Alt),
  tailwindcss: new Technology("TailwindCSS", "#38B2AC", SiTailwindcss),
  docker: new Technology("Docker", "#2496ED", SiDocker),
  python: new Technology("Python", "#3776AB", FaPython),
  nodejs: new Technology("Node.Js", "#3776AB", SiNodedotjs),
  nestjs: new Technology("NestJS", "#E0234E", SiNestjs),
  expressjs: new Technology("Express.js", "#000000", SiExpress),
  websocket: new Technology("WebSocket", "#339933", SiSocketdotio),
  postman: new Technology("Postman", "#FF6C37", SiPostman),
  framer: new Technology("Framer Motion", "#0055FF", SiFramer),
  redis: new Technology("Redis", "#E34F26", FaHtml5),
};


