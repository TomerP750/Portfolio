import { FaJava } from "react-icons/fa";
import {
    SiCss3, SiDocker,
    SiExpress,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiPostman,
    SiReact,
    SiRedis,
    SiSpring,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";
import { Role } from "../Models/Skill";


export const skills = [
    {
        name: 'Java',
        icon: FaJava,
        color: '#f89820',
        role: 'backend' as Role 
        
    },
    {
        name: 'Spring',
        icon: SiSpring,
        color: '#6db33f',
        role: 'backend' as Role 
    },
    {
        name: 'React',
        icon: SiReact,
        color: '#61dafb',
        role: 'frontend' as Role 
        
    },
    {
        name: 'TypeScript',
        icon: SiTypescript,
        color: '#3178c6',
        role: 'frontend' as Role 
        
    },
    {
        name: 'JavaScript',
        icon: SiJavascript,
        color: '#f7df1e',
        role: 'frontend' as Role 
        
    },
    {
        name: 'MySQL',
        icon: SiMysql,
        color: '#4479a1', 
        role: 'database' as Role 
        
    },
    {
        name: 'MongoDB',
        icon: SiMongodb,
        color: '#47a248',
        role: 'database' as Role 
        
    },
    {
        name: 'HTML5',
        icon: SiHtml5,
        color: '#e34f26',
        role: 'frontend' as Role 
    },
    {
        name: 'CSS3',
        icon: SiCss3,
        color: '#264de4',
        role: 'frontend' as Role 
    },
    {
        name: 'TailwindCSS',
        icon: SiTailwindcss,
        color: '#06b6d4',
        role: 'frontend' as Role 
    },
    {
        name: 'Docker',
        icon: SiDocker,
        color: '#2496ed',
        role: 'tools' as Role 
    },
    {
        name: 'Node.JS',
        icon: SiNodedotjs,
        color: '#339933',
        role: 'backend' as Role 
    },
    {
        name: 'Express.JS',
        icon: SiExpress,
        color: '#ffffff',
        role: 'backend' as Role 
    },
    {
        name: 'Postman',
        icon: SiPostman,
        color: '#FF6C37',
        role: 'tools' as Role 
    },
   

]