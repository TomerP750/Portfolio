import { Project } from "../Models/Project.ts";
import { ProjectType } from "../Models/ProjectType.ts";
import socialMediaImg from "../assets/socialMediaProject.jpg";
import { technologiesData } from "./TechnologiesData.ts";

import gropulyChat from "../assets/grouply/chat.jpg";
import groplyDashboardIndex from "../assets/grouply/dashboard-index-1.jpg";
import groplyDashboardTable from "../assets/grouply/dashboard-projects.jpg";
import grouplyFeed from "../assets/grouply/feed.jpg";
import grouplyLightMode from "../assets/grouply/lightmode.jpg";
import grouplySettings from "../assets/grouply/settings.jpg";

import auraFitMain from "../assets/auraFitImage.jpg";
import auraFitCartPage from "../assets/AuraFitImages/cart-page.jpg";
import auraFitCheckoutPage from "../assets/AuraFitImages/checkout-page.jpg";
import auraFitItemList from "../assets/AuraFitImages/item-list.jpg";
import auraFitItemPage from "../assets/AuraFitImages/item-page.jpg";
import auraFitOrderHistory from "../assets/AuraFitImages/order-history.jpg";
import auraFitOrderSuccessPage from "../assets/AuraFitImages/order-success.jpg";
import auraFitItemReviews from "../assets/AuraFitImages/reviews.jpg";


// import bugLogDashboard from "../assets/buglog/dashboard.jpg";
// import bugLogDashboard2 from "../assets/buglog/dashboard2.jpg";
// import bugLogSignInPage from "../assets/buglog/signinpage.jpg";

import appliBoardHero from "../assets/appliboard/hero.jpg";
import appliBoardStats from "../assets/appliboard/stats.jpg";
import appliboardSettings from "../assets/appliboard/settings.jpg";
import appliboardList from "../assets/appliboard/list.jpg";
import appliboardListWithFilters from "../assets/appliboard/withFilters.jpg"
import appliboardDialog from "../assets/appliboard/dialog.jpg";


export const projectsData: Project[] = [
    new Project(
        1,
        "AppliBoard",
        "AppliBoard is a full-stack job application tracking app that helps users organize their job search in one dashboard. It supports authentication, application CRUD, favorites, search/filtering, pagination, analytics, activity tracking, and account settings.",
        [
            "Track job applications with company, role, city, status, favorite state, and application date",
            "Create, edit, delete, search, filter, and paginate applications from a dashboard",
            "View analytics such as total applications, weekly activity, and status breakdowns",
            "Sign up and log in with JWT-based authentication and user-specific data",
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
        "https://github.com/TomerP750/AppliBoard",
        "",
        [
            appliBoardHero,
            appliBoardStats,
            appliboardList,
            appliboardListWithFilters,
            appliboardSettings,
            appliboardDialog
        ],
        "",
    ),
    new Project(
        2,
        "AuraFit E-Commerce",
        "AuraFit E-Commerce is a full-stack e-commerce project built with a Java Spring, Spring Security, and MySQL backend and a React frontend. The application demonstrates common e-commerce functionality, allowing users to browse a catalog of athletic apparel, footwear, and workout equipment, add products to a shopping cart and wishlist, apply discount codes, place simulated orders, and view their order history. The project was developed to showcase full-stack development skills, including secure authentication, REST API design, database integration, and a modern responsive user interface.",
        [
            "Browse product catalogs by category (apparel, shoes, accessories)",
            "View detailed product pages with multiple images and descriptions",
            "Add items to wishlist or shopping cart",
            "checkout and review order history",
            "Review on a products"
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
        [
            auraFitMain, auraFitItemList, auraFitItemPage, auraFitItemReviews,
            auraFitCartPage, auraFitCheckoutPage,
            auraFitOrderSuccessPage, auraFitOrderHistory
        ],

    ),
    new Project(
        3,
        "Grouply",
        "Grouply is a collaborative platform for developers to connect, form study or development groups, and work together on projects. It helps users find other juniors based on shared interests, technologies, and roles—allowing them to create or join projects, post open positions, send invitations, and collaborate through integrated chat and notifications. Designed to simulate real teamwork and boost portfolio-building, Grouply combines social networking with project management in one modern platform.",
        [
            "Create and manage projects with detailed descriptions, roles, and statuses",
            "Invite other developers or request to join existing projects",
            "Browse and filter projects by technologies, positions, and activity",
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
        ],
        "https://github.com/TomerP750/Grouply",
        "",
        [grouplyFeed, grouplyLightMode, gropulyChat, groplyDashboardIndex, groplyDashboardTable, grouplySettings],
    ),
    new Project(
        4,
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
        undefined
    ),
    new Project(
        5,
        "Social Media",
        "This Social Media platform pairs a Java Spring backend with a React frontend to deliver a full community experience. Users register and customize profiles; create posts with text, images, or hashtags; follow and unfollow other members; like, comment on posts.",
        [
            "User registration and customizable profiles",
            "Create, edit, and delete posts",
            "Follow/unfollow other users to curate personalized feeds",
            "Like and comment on posts",
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
        [socialMediaImg]
    ),

    
    
    // new Project(
    //     5,
    //     "BugLog",
    //     "A full-stack bug and issue tracking platform designed for teams to manage tickets, monitor progress, and collaborate efficiently. The project focuses on clean dashboard UX, structured ticket workflows, authentication, and scalable backend architecture.",
    //     [
    //         "User authentication and authorization",
    //         "Create, update, and manage bug tickets",
    //         "Ticket priority and status tracking",
    //         "Personal ticket dashboard",
    //         "Detailed ticket description panel",
    //         "Activity history and comments section",
    //         "Team-oriented issue management",
    //         "Responsive dark SaaS-style interface",
    //     ],
    //     [ProjectType.FULLSTACK],
    //     [
    //         technologiesData["nodejs"],
    //         technologiesData["expressjs"],
    //         technologiesData["react"],
    //         technologiesData["typescript"],
    //         technologiesData["tailwindcss"],
    //         technologiesData["mongodb"],
    //     ],
    //     "https://github.com/TomerP750/BugLog",
    //     "",
    //     [
    //         bugLogDashboard,
    //         bugLogDashboard2,
    //         bugLogSignInPage
    //     ],
    //     "",
    //     true
    // ),




];


