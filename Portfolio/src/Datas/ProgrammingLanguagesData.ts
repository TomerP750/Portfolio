import { ProgrammingLanguage } from "../Models/ProgrammingLanguage";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import {
    SiSpring,
    SiTypescript,
    SiJavascript,
    SiMysql,
    SiMongodb,
    SiTailwindcss,
    SiDocker,
} from "react-icons/si";

export const programmingLanguagesData: ProgrammingLanguage[] = [
    new ProgrammingLanguage("Java", "#ca8d1a", FaJava),
    new ProgrammingLanguage("Spring", "#6DB33F", SiSpring),
    new ProgrammingLanguage("React", "#61DAFB", FaReact),
    new ProgrammingLanguage("TypeScript", "#3178C6", SiTypescript),
    new ProgrammingLanguage("JavaScript", "#F7DF1E", SiJavascript),
    new ProgrammingLanguage("MySQL", "#4479A1", SiMysql),
    new ProgrammingLanguage("MongoDB", "#47A248", SiMongodb),
    new ProgrammingLanguage("HTML5", "#E34F26", FaHtml5),
    new ProgrammingLanguage("CSS3", "#1572B6", FaCss3Alt),
    new ProgrammingLanguage("TailwindCSS", "#38B2AC", SiTailwindcss),
    new ProgrammingLanguage("Docker", "#2496ED", SiDocker),
    new ProgrammingLanguage("Python", "#3776AB", FaPython),
];
