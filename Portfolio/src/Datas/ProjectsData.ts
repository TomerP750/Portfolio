import {Project} from "../Models/Project.ts";
import socialMediaImg from "../assets/socialMediaProject.jpg"
import {ProjectType} from "../Models/ProjectType.ts";

export const projectsData: Project[] = [

    new Project(1, "FitForge E-Commerce", "This project is a comprehensive fitness-oriented e-commerce platform that integrates seamless shopping experiences for fitness merchandise, workout equipment, and personalized training programs. Built using Java Spring, Spring Security, and MySQL for robust backend services, the application ensures secure user authentication, data integrity, and efficient performance.\n" +
        "On the frontend, React provides a smooth, responsive, and intuitive user interface, delivering an optimal experience across all devices. The platform allows users to browse and purchase merchandise and equipment, enroll in tailored workout programs, and track their fitness progress over time.\n" +
        "Key features include:\n" +
        "Secure Authentication: Utilizing Spring Security to manage user roles and permissions securely.\n" +
        "Dynamic Product Management: Users can easily explore products, view details, and manage their shopping carts.\n" +
        "Workout Program Integration: Offering customized fitness plans and the ability to enroll and monitor individual progress.\n" +
        "Fitness Tracker: Integrated tracking functionalities that enable users to log workouts, track progress, and set fitness goals.\n" +
        "This project demonstrates a full-stack development capability, showcasing expertise in combining backend Java frameworks, secure database management, and modern frontend React practices to create a compelling and functional fitness platform.",[ProjectType.FULLSTACK],["Java, Spring, MySql, React, TypeScript, CSS"],"",""),

    new Project(2, "Coupon System", "This project is an intuitive and efficient Coupon Management System designed to streamline promotional campaigns and customer interactions. Built using Java Spring on the backend, the application provides a robust RESTful API to handle coupon creation, distribution, and redemption securely and effectively.\n" +
        "React powers the frontend, delivering a user-friendly and responsive interface for managing coupons. Users can easily create, edit, track, and manage coupon details, including expiration dates, discount values, and usage limits.\n" +
        "Key features include:\n" +
        "Secure API Management: Leveraging Java Spring for robust, secure, and scalable coupon operations.\n" +
        "Dynamic Coupon Handling: Users can generate and manage coupons with ease, set conditions for redemption, and track coupon performance.\n" +
        "User-Friendly Interface: React-based UI ensures an intuitive experience for administrators and customers alike.\n" +
        "Real-time Tracking: Monitor coupon usage, effectiveness, and promotional analytics directly through the interface.\n" +
        "This project highlights your proficiency in developing comprehensive web solutions using Java Spring for backend robustness and React for an interactive frontend experience.",[ProjectType.FULLSTACK],["Java, Spring, MySql, React, TypeScript, CSS"] ,"",""),

    new Project(3, "Social Media", "This project is a dynamic and interactive social media platform built to facilitate seamless communication and community engagement. Developed using Java Spring for the backend, the application efficiently handles user authentication, data storage, real-time interactions, and secure content management.\n" +
        "On the frontend, React provides a modern, responsive, and engaging user interface. Users can easily create profiles, share updates, interact with posts through comments and likes, and manage their connections effectively.\n" +
        "Key features include:\n" +
        "Secure User Authentication: Robust user authentication and authorization implemented with Java Spring Security.\n" +
        "Real-Time Interactions: Instant notifications and live updates through efficient API integration.\n" +
        "Interactive UI: An intuitive and responsive user experience crafted with React, ensuring usability across all devices.\n" +
        "Content Management: Easy-to-use content creation, editing, and moderation tools.\n" +
        "This project demonstrates your expertise in developing full-stack web applications with a strong emphasis on performance, user engagement, and security using Java Spring and React.",[ProjectType.FULLSTACK],["Java, Spring, MySql, React, TypeScript, CSS"],"","",socialMediaImg),

    new Project(3, "Portfolio", "This project is a modern and visually compelling personal portfolio website created to effectively showcase technical skills, projects, and professional experiences. Built using React and styled with Tailwind CSS, it provides a fast, responsive, and engaging user interface.\n" +
        "Visitors can explore detailed project showcases, clearly presented technical skill sets, professional experiences, and easily reach out through integrated contact forms.\n" +
        "Key features include:\n" +
        "Interactive Project Showcases: Engaging presentations of projects with clear descriptions, technology details, and interactive modals for detailed views.\n" +
        "Responsive Design: Fully optimized for mobile, tablet, and desktop devices, ensuring an exceptional viewing experience across all platforms.\n" +
        "Fast and Lightweight: Built with React and Tailwind CSS for rapid load times and smooth performance.\n" +
        "User-Friendly Navigation: Intuitive layout and navigation enhance user engagement and accessibility of information.\n" +
        "This portfolio project demonstrates strong front-end development skills, emphasizing proficiency in React and the utility-first styling capabilities of Tailwind CSS.",[ProjectType.FRONTEND],["React, TypeScript, Tailwind CSS"],"",""),
]