import { Project } from "../Models/Project.ts";
import socialMediaImg from "../assets/socialMediaProject.jpg";
import tdeeImage from "../assets/tdeeProjectImage.jpg";
import { ProjectType } from "../Models/ProjectType.ts";
import portfolioImage from "../assets/porftolioWebImage.jpg";
import auraFitImage from "../assets/auraFitImage.jpg";
import barberShopImage from "../assets/barberShopImage.jpg";
import { programmingLanguagesData } from "./ProgrammingLanguagesData.ts";

export const projectsData: Project[] = [
    new Project(
        1,
        "AuraFit E-Commerce",
        "This project is a comprehensive fitness-oriented e-commerce platform that integrates seamless shopping experiences for fitness merchandise, workout equipment, and personalized training programs. Built using Java Spring, Spring Security, and MySQL for robust backend services, the application ensures secure user authentication, data integrity, and efficient performance." +
        " On the frontend, React provides a smooth, responsive, and intuitive user interface, delivering an optimal experience across all devices. The platform allows users to browse and purchase merchandise and equipment, enroll in tailored workout programs, and track their fitness progress over time." +
        " Key features include: Secure Authentication, Dynamic Product Management, Workout Program Integration, Fitness Tracker. This project demonstrates a full-stack development capability, showcasing expertise in combining backend Java frameworks, secure database management, and modern frontend React practices to create a compelling and functional fitness platform.",
        [ProjectType.FULLSTACK],
        [
            programmingLanguagesData[0],
            programmingLanguagesData[1],
            programmingLanguagesData[5],
            programmingLanguagesData[2],
            programmingLanguagesData[3],
            programmingLanguagesData[9]
        ],
        "",
        "",
        auraFitImage
    ),
    new Project(
        2,
        "Coupon System",
        "This project is an intuitive and efficient Coupon Management System designed to streamline promotional campaigns and customer interactions. Built using Java Spring on the backend, the application provides a robust RESTful API to handle coupon creation, distribution, and redemption securely and effectively." +
        " React powers the frontend, delivering a user-friendly and responsive interface for managing coupons. Users can easily create, edit, track, and manage coupon details, including expiration dates, discount values, and usage limits. Key features include: Secure API Management, Dynamic Coupon Handling, User-Friendly Interface, Real-time Tracking. This project highlights your proficiency in developing comprehensive web solutions using Java Spring for backend robustness and React for an interactive frontend experience.",
        [ProjectType.FULLSTACK],
        [
            programmingLanguagesData[0],
            programmingLanguagesData[1],
            programmingLanguagesData[5],
            programmingLanguagesData[2],
            programmingLanguagesData[3],
            programmingLanguagesData[8]
        ],
        "",
        "",
        socialMediaImg
    ),
    new Project(
        3,
        "Social Media",
        "This project is a dynamic and interactive social media platform built to facilitate seamless communication and community engagement. Developed using Java Spring for the backend, the application efficiently handles user authentication, data storage, real-time interactions, and secure content management." +
        " On the frontend, React provides a modern, responsive, and engaging user interface. Users can easily create profiles, share updates, interact with posts through comments and likes, and manage their connections effectively. Key features include: Secure User Authentication, Real-Time Interactions, Interactive UI, Content Management. This project demonstrates your expertise in developing full-stack web applications with a strong emphasis on performance, user engagement, and security using Java Spring and React.",
        [ProjectType.FULLSTACK],
        [
            programmingLanguagesData[0],
            programmingLanguagesData[1],
            programmingLanguagesData[5],
            programmingLanguagesData[2],
            programmingLanguagesData[3],
            programmingLanguagesData[8]
        ],
        "",
        "",
        socialMediaImg
    ),
    new Project(
        4,
        "Portfolio",
        "This project is a modern and visually compelling personal portfolio website created to effectively showcase technical skills, projects, and professional experiences. Built using React and styled with Tailwind CSS, it provides a fast, responsive, and engaging user interface." +
        " Visitors can explore detailed project showcases, clearly presented technical skill sets, professional experiences, and easily reach out through integrated contact forms. Key features include: Interactive Project Showcases, Responsive Design, Fast and Lightweight, User-Friendly Navigation. This portfolio project demonstrates strong front-end development skills, emphasizing proficiency in React and the utility-first styling capabilities of Tailwind CSS.",
        [ProjectType.FRONTEND],
        [
            programmingLanguagesData[2],
            programmingLanguagesData[3],
            programmingLanguagesData[9]
        ],
        "",
        "",
        portfolioImage
    ),
    new Project(
        5,
        "Barber Shop",
        "Content",
        [ProjectType.FULLSTACK],
        [
            programmingLanguagesData[0],
            programmingLanguagesData[1],
            programmingLanguagesData[5],
            programmingLanguagesData[2],
            programmingLanguagesData[3],
            programmingLanguagesData[9]
        ],
        "",
        "",
        barberShopImage
    ),
    new Project(
        6,
        "TDEE Calculator",
        "",
        [ProjectType.FULLSTACK],
        [
            programmingLanguagesData[0],
            programmingLanguagesData[1],
            programmingLanguagesData[5],
            programmingLanguagesData[2],
            programmingLanguagesData[3],
            programmingLanguagesData[9]
        ],
        "",
        "",
        tdeeImage
    )
];
