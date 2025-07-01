import "./Footer.css";
import {JSX} from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {scrollToSection} from "../../Utils/Scroll.ts";
import {useTheme} from "../../Context/ThemeContext.tsx";


interface FooterProps {
    page?: string;
}

export function Footer({page}: FooterProps): JSX.Element {

    // const themeCtx = useTheme();

    const linkClasses = "text-[#10b981] hover:text-[#e5e7eb] transition-colors duration-200 px-3 py-2 cursor-pointer"
    const iconClasses = "text-[#10b981] hover:text-[#e5e7eb] transition-colors duration-200 px-2 py-2"


    if (page === "projectPage") {
        return (
            <footer>
                <div className="max-w-4xl mx-auto px-4 py-8">

                    <nav className="flex justify-center items-center flex-wrap space-x-4">
                        <span onClick={() => scrollToSection("home")} className={linkClasses}>Home</span>
                        <NavLink
                            to="/"
                            target="_blank"
                            className={iconClasses}
                            aria-label="GitHub"
                        >
                            <FaGithub size={20}/>
                        </NavLink>
                        <NavLink
                            to="/"
                            target="_blank"
                            className={iconClasses}
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20}/>
                        </NavLink>
                    </nav>


                    <div className="border-t border-gray-700 my-6"/>


                    <p className="text-center text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Tomer Jacob. All rights reserved.
                    </p>
                </div>
            </footer>)
    }

    return (
        <footer className="bg-[#0b1a3a]">
            <div className="max-w-4xl mx-auto px-4 py-8">

                <nav className="flex justify-center items-center flex-wrap space-x-4">
                    <span onClick={() => scrollToSection("home")} className={linkClasses}>Home</span>
                    <span onClick={() => scrollToSection("about")} className={linkClasses}>About</span>
                    <span onClick={() => scrollToSection("projects")} className={linkClasses}>Projects</span>
                    <span onClick={() => scrollToSection("contact")} className={linkClasses}>Contact</span>

                    <NavLink
                        to="/"
                        target="_blank"
                        className={iconClasses}
                        aria-label="GitHub"
                    >
                        <FaGithub size={20}/>
                    </NavLink>
                    <NavLink
                        to="/"
                        target="_blank"
                        className={iconClasses}
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={20}/>
                    </NavLink>
                </nav>


                <div className="border-t border-gray-700 my-6"/>


                <p className="text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Tomer Jacob. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
