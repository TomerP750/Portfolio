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
} from "react-icons/si";

export const technologiesData: Technology[] = [
    new Technology("Java", "#ca8d1a", FaJava),
    new Technology("Spring", "#6DB33F", SiSpring),
    new Technology("React", "#61DAFB", FaReact),
    new Technology("TypeScript", "#3178C6", SiTypescript),
    new Technology("JavaScript", "#F7DF1E", SiJavascript),
    new Technology("MySQL", "#4479A1", SiMysql),
    new Technology("MongoDB", "#47A248", SiMongodb),
    new Technology("HTML5", "#E34F26", FaHtml5),
    new Technology("CSS3", "#1572B6", FaCss3Alt),
    new Technology("TailwindCSS", "#38B2AC", SiTailwindcss),
    new Technology("Docker", "#2496ED", SiDocker),
    new Technology("Python", "#3776AB", FaPython),
    new Technology("WebSocket", "#339933", SiSocketdotio),
    new Technology("Postman", "#FF6C37", SiPostman),
];
