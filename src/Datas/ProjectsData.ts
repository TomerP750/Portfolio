import { Project } from "../Models/Project.ts";
import { ProjectType } from "../Models/ProjectType.ts";
// import { Technology } from "../Models/Technology.ts";
import appifyImage from "../assets/AppifyImages/myApplications.jpg";
import auraFitImage from "../assets/auraFitImage.jpg";
import barberShopImage from "../assets/barberShopImage.jpg";
import portfolioImage from "../assets/porftolioWebImage.jpg";
import socialMediaImg from "../assets/socialMediaProject.jpg";
import { technologiesData } from "./TechnologiesData.ts";


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
            technologiesData[0],
            technologiesData[1],
            technologiesData[5],
            technologiesData[2],
            technologiesData[3],
            technologiesData[8],
            technologiesData[13],
            
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
            "Create, edit, and delete posts with text, images, and hashtags",
            "Follow/unfollow other users to curate personalized feeds",
            "Like, comment on, and share posts",
            "Receive instant notifications for new likes, comments, and follows",
            "Direct messaging between users"
        ],
        [ProjectType.FULLSTACK],
        [
            technologiesData[0],
            technologiesData[1],
            technologiesData[5],
            technologiesData[2],
            technologiesData[3],
            technologiesData[8],
            technologiesData[13],
        ],
        "",
        "",
        socialMediaImg
    ),

    new Project(
        3,
        "Portfolio",
        "The Portfolio site is a front-end application built with React and Tailwind CSS to showcase technical skills, projects, and professional experience. Visitors explore interactive galleries of past work; review proficiency indicators for key technologies; follow a chronological career timeline; and reach out via an integrated contact form, all within a fast, responsive design.",
        [
            "Interactive project galleries with screenshots and descriptions",
            "Skillset highlights with proficiency indicators",
            "Chronological experience timeline",
            "Contact form for inquiries and collaborations",
            "Light/dark theme toggle and responsive navigation"
        ],
        [ProjectType.FRONTEND],
        [
            technologiesData[2],
            technologiesData[3],
            technologiesData[9],
            technologiesData[14]
        ],
        "",
        "",
        portfolioImage
    ),

    new Project(
        4,
        "Barber Shop",
        "The Barber Shop web app is a full-stack solution with a Java Spring backend and a React frontend, offering clients a unified portal for grooming services and retail. Clients select a service type (haircut, shave, styling), choose their preferred barber, pick a date and time, and receive instant confirmation. They can also shop a curated online store of pomades, beard oils, tools, and accessories, complete the checkout flow, and track order status.",
        [
            "Online appointment booking for haircuts, shaves, and styling",
            "Select preferred barber and available date/time",
            "Instant booking confirmation emails",
            "Browse curated online store of pomades, beard oils, and grooming tools",
            "Add products to cart and complete checkout",
            "Basic order tracking and history"
        ],
        [ProjectType.FULLSTACK],
        [
            technologiesData[0],
            technologiesData[1],
            technologiesData[5],
            technologiesData[2],
            technologiesData[3],
            technologiesData[9],
            technologiesData[13],
        ],
        "",
        "",
        barberShopImage
    ),

    new Project(
        5,
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
            technologiesData[0],
            technologiesData[1],
            technologiesData[5],
            technologiesData[2],
            technologiesData[3],
            technologiesData[9],
            technologiesData[13],
            technologiesData[14]
        ],
        "",
        "",
        auraFitImage
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
            technologiesData[0],
            technologiesData[1],
            technologiesData[5],
            technologiesData[2],
            technologiesData[3],
            technologiesData[9],
            technologiesData[12],
            technologiesData[13],
        ],
        "",
        "",
        appifyImage
    )
];


