import "./Skills.css";
import {JSX, useState} from "react";
import {FaCoffee} from "react-icons/fa";
import {
    SiCss3, SiDocker,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiReact,
    SiSpring,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";

export function Skills(): JSX.Element {

    const [openSkill, setOpenSkill] = useState<string | null>(null);

    const toggleSkill = (name: string) => {
        setOpenSkill(prev => (prev === name ? null : name));
    };


    const skills = [
        {
            name: 'Java',
            icon: FaCoffee,
            color: '#f89820',
            details: [
                'Java Basic',
                'Object-Oriented Programming',
                'Collections & Generics',
                'Stream API & Lambdas',
                'JUnit Testing',
            ],
        },
        {
            name: 'Spring',
            icon: SiSpring,
            color: '#6db33f',
            details: [
                'Spring Boot Applications',
                'Spring Security',
                'RESTful Services',
                'Data JPA & Transactions',
            ],
        },
        {
            name: 'React',
            icon: SiReact,
            color: '#61dafb',
            details: [
                'Functional Components & Hooks',
                'Context API & Redux',
                'React Router',
                'Performance Optimization',
            ],
        },
        {
            name: 'TypeScript',
            icon: SiTypescript,
            color: '#3178c6',
            details: [
                'Static Typing',
                'Interfaces & Generics',
                'Advanced Types',
            ],
        },
        {
            name: 'JavaScript',
            icon: SiJavascript,
            color: '#f7df1e',
            details: [
                'ES6+ Syntax',
                'Asynchronous Programming',
                'DOM Manipulation',
            ],
        },
        {
            name: 'MySQL',
            icon: SiMysql,
            color: '#4479a1',
            details: [
                'Database Design',
                'Joins & Indexes',
                'Stored Procedures',
            ],
        },
        {
            name: 'MongoDB',
            icon: SiMongodb,
            color: '#47a248',
            details: [
                'Document Modeling',
                'Aggregation Framework',
                'Mongoose ODM',
            ],
        },
        {
            name: 'HTML5',
            icon: SiHtml5,
            color: '#e34f26',
            details: ['Semantic Markup', 'Forms & Validation', 'Accessibility'],
        },
        {
            name: 'CSS3',
            icon: SiCss3,
            color: '#264de4',
            details: ['Flexbox & Grid', 'Responsive Design', 'Animations'],
        },
        {
            name: 'TailwindCSS',
            icon: SiTailwindcss,
            color: '#06b6d4',
            details: ['Utility-First Styling', 'Custom Configurations', 'Responsive Utilities'],
        },
        {
            name: 'Docker',
            icon: SiDocker,
            color: '#2496ed',
            details: ['Containerization', 'Docker Compose', 'Image Optimization'],
        },
    ];


    return (
        <div className="flex justify-start w-2/3 mb-6">
            <p className="w-1/8 font-semibold">Skills</p>
            <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                    {skills.map(({name, icon: Icon, color, details}) => (
                        <div key={name} className="bg-gray-800 rounded-lg shadow-lg">
                            <button
                                onClick={() => toggleSkill(name)}
                                className="w-full flex items-center justify-between p-4 text-left"
                            >
                                <div className="flex items-center gap-3">
                                    <Icon size={28} color={color}/>
                                    <span className="font-semibold text-lg">{name}</span>
                                </div>
                                <span className="text-xl">{openSkill === name ? '−' : '+'}</span>
                            </button>
                            {openSkill === name && (
                                <div
                                    className="p-4 pt-0 text-sm text-gray-300 space-y-1 border-t border-gray-700">
                                    {details.map((line, i) => (
                                        <p key={i}>• {line}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
