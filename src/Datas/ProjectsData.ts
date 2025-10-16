import { Project } from "../Models/Project.ts";
import { ProjectType } from "../Models/ProjectType.ts";
import appifyImage from "../assets/AppifyImages/myApplications.jpg";
import auraFitImage from "../assets/auraFitImage.jpg";
// import barberShopImage from "../assets/barberShopImage.jpg";
import portfolioImage from "../assets/porftolioWebImage.jpg";
import socialMediaImg from "../assets/socialMediaProject.jpg";
import grouplyImage from "../assets/grouplyImage.jpg";
// import tdeeImage from "../assets/tdeeProjectImage.jpg"
import { technologiesData } from "./TechnologiesData.ts";
import auraFitDemoVideo from "../../public/aurafit demo.mp4";


export const projectsData: Project[] = [
    new Project(
        1,
        "Coupon System",
        "The Coupon System is a promotional engine built with a Java Spring backend and a React frontend. Marketing teams can generate custom coupon codes with defined values, expiration dates, and usage limits; customers redeem codes during checkout for automatic discounts.",
        [
            "Users can Browse and search for coupons across various categories (e.g. food, travel, retail).",
            "Companies can create, update, and delete their own coupons",
            "Administrators have full control over managing companies and customers, including creating, updating, and deleting them"
        ],
        [ProjectType.FULLSTACK],
        [
            technologiesData["java"],
            technologiesData["spring"],
            technologiesData["css3"],
            technologiesData["react"],
            technologiesData["tailwindcss"],
            technologiesData["mysql"],
            technologiesData["typescript"],
            
        ],
        "",
        "",
        ""
    ),

    new Project(
        2,
        "Social Media",
        "This Social Media platform pairs a Java Spring backend with a React frontend to deliver a full community experience. Users register and customize profiles; create posts with text, images, or hashtags; follow and unfollow other members; like, comment on, and share posts; receive instant notifications for new interactions; and exchange direct messages in a modern, real-time interface.",
        [
            "User registration and customizable profiles",
            "Create, edit, and delete posts",
            "Follow/unfollow other users to curate personalized feeds",
            "Like and comment on posts",
            "Receive notifications for new likes, comments, and follows",
        ],
        [ProjectType.FULLSTACK],
        [
            technologiesData["java"],
            technologiesData["spring"],
            technologiesData["react"],
            technologiesData["mysql"],
            technologiesData["css3"],
        ],
        "https://github.com/TomerP750/My_social_media_project",
        "",
        socialMediaImg
    ),

    new Project(
        3,
        "Portfolio",
        "The Portfolio site is a front-end application built with React and Tailwind CSS to showcase technical skills, projects, and professional experience. Visitors explore interactive galleries of past work; review proficiency indicators for key technologies; follow a chronological career timeline; and reach out via an integrated contact form, all within a fast, responsive design.",
        [
            "Project galleries with screenshots and descriptions",
            "Skillset highlights with proficiency indicators",
            // "Chronological experience timeline",
            "Responsive navigation"
        ],
        [ProjectType.FRONTEND],
        [
            technologiesData["react"],
            technologiesData["typescript"],
            technologiesData["tailwindcss"],
            technologiesData["framer"]
        ],
        "",
        "",
        portfolioImage
    ),

    new Project(
        4,
        "AuraFit E-Commerce",
        "AuraFit E-Commerce is a sport-brand online shop built with a Java Spring/Spring Security/MySQL backend and a React frontend. Customers can seamlessly browse a curated selection of athletic apparel, footwear, and workout equipment; filter products by category, size, color, or price; add items to a wishlist or shopping cart; apply discount codes at checkout; and securely review their order history.",
        [
            "Browse product catalogs by category (apparel, shoes, accessories)",
            "Filter and sort by size, color, price, and brand",
            "View detailed product pages with multiple images and descriptions",
            "Add items to wishlist or shopping cart",
            "Apply discount codes at checkout",
            "Complete secure checkout and review order history"
        ],
        [ProjectType.FULLSTACK],
        [
            technologiesData["java"],
            technologiesData["spring"],
            technologiesData["react"],
            technologiesData["typescript"],
            technologiesData["mysql"],
            technologiesData["tailwindcss"],
            technologiesData["framer"]
        ],
        "https://github.com/TomerP750/AuraFit-E-Commerce-Project",
        "",
        auraFitImage,
        auraFitDemoVideo
    ),

    // new Project(
    //     6,
    //     "TDEE Calculator",
    //     "The TDEE Calculator is a front-end single-page application built with React and TypeScript that helps users determine their Total Daily Energy Expenditure. By entering age, gender, height, weight, and activity level, the app applies the Mifflin–St Jeor formula to generate an immediate calorie-target recommendation, offers optional macronutrient breakdowns, and updates results in real time as inputs change.",
    //     [
    //         "Input age, gender, height, weight, and activity level",
    //         "Calculate daily caloric needs using the Mifflin–St Jeor formula",
    //         "Optional macronutrient breakdown suggestions",
    //         "Real-time result updates as inputs change",
    //         "Responsive design for all devices"
    //     ],
    //     [ProjectType.FULLSTACK],
    //     [
    //         technologiesData[0],
    //         technologiesData[1],
    //         technologiesData[5],
    //         technologiesData[2],
    //         technologiesData[3],
    //         technologiesData[9],
    //         technologiesData[13],
    //     ],
    //     "",
    //     "",
    //     tdeeImage
    // ),

    new Project(
        7,
        "Appify",
        "Appify is a full-stack job-application tracker with a Java Spring backend and a React (TypeScript) frontend that streamlines the job search process. Users add entries for each application—specifying company, role, submission date, status, and notes—then filter and search by company, city, or status. A dashboard summarizes total applications, today’s submissions, average per day, and status distribution, and data can be exported to CSV for offline analysis.",
        [
            "Add, edit, and delete job application entries with company, role, date, status, and notes",
            "Filter and search applications by company, city, or status",
            "Dashboard analytics showing total applications, today’s submissions, average per day, and status distribution",
            "Export application data to CSV",
            "Real-time updates and responsive UI"
        ],
        [ProjectType.FULLSTACK],
        [
            technologiesData["java"],
            technologiesData["spring"],
            technologiesData["react"],
            technologiesData["mysql"],
            technologiesData["tailwindcss"],
            technologiesData["typescript"],
            
        ],
        "https://github.com/TomerP750/Appify",
        "",
        appifyImage
    ),
    new Project(
    8,
    "Grouply",
    "Grouply is a collaborative platform for junior developers to connect, form study or development groups, and work together on projects. It helps users find other juniors based on shared interests, technologies, and roles—allowing them to create or join projects, post open positions, send invitations, and collaborate through integrated chat and notifications. Designed to simulate real teamwork and boost portfolio-building, Grouply combines social networking with project management in one modern platform.",
    [
        "Create and manage projects with detailed descriptions, roles, and statuses",
        "Invite other juniors or request to join existing projects",
        "Browse and filter projects by technologies, positions, and activity",
        "Real-time chat rooms and notifications for collaboration and updates",
        "Personal dashboard with connections, stats, and project insights",
        "Responsive UI with light/dark themes and modern animations"
    ],
    [ProjectType.FULLSTACK],
    [
        technologiesData["java"],
        technologiesData["spring"],
        technologiesData["react"],
        technologiesData["mysql"],
        technologiesData["tailwindcss"],
        technologiesData["typescript"],
        technologiesData["websocket"],
    ],
    "https://github.com/TomerP750/Grouply",
    "",
    grouplyImage,
    "video"
),

];


