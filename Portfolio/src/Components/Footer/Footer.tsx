import "./Footer.css";
import {JSX} from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {NavLink, useNavigate} from "react-router-dom";

export function Footer(): JSX.Element {

    const navigate = useNavigate();

    const footerItem = "cursor-pointer hover:text-[#03835a] hover:text-white transition duration-200 ease-in"

    // return (
    //     <footer className="bg-[#0f172a] h-64 text-[#10b981] justify-center w-full flex flex-col items-center ">
    //         <div className="flex justify-between gap-5">
    //             <span className={`${footerItem}`}>About</span>
    //             <span className={`${footerItem}`}>LinkedIn</span>
    //             <span className={`${footerItem}`}>GitHub</span>
    //         </div>
    //         {/*<div className="w-full h-[1px] bg-[#10b981]"></div>*/}
    //         <div className="flex">
    //              <span className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Tomer. All rights reserved.</span>
    //         </div>
    //     </footer>
    // );

    const linkClasses = "text-[#10b981] hover:text-[#e5e7eb] transition-colors duration-200 px-3 py-2"
    const iconClasses = "text-[#10b981] hover:text-[#e5e7eb] transition-colors duration-200 px-2 py-2"

    return (
        <footer className="bg-[#0f172a]">
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* nav + social all as NavLink */}
                <nav className="flex justify-center items-center flex-wrap space-x-4">
                    <NavLink to="/"       className={linkClasses}>Home</NavLink>
                    <NavLink to="/about"  className={linkClasses}>About</NavLink>
                    <NavLink to="/projects" className={linkClasses}>Projects</NavLink>
                    <NavLink to="/contact" className={linkClasses}>Contact</NavLink>

                    <NavLink
                        to="/"
                        target="_blank"
                        className={iconClasses}
                        aria-label="GitHub"
                    >
                        <FaGithub size={20} />
                    </NavLink>
                    <NavLink
                        to="/"
                        target="_blank"
                        className={iconClasses}
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={20} />
                    </NavLink>
                </nav>

                {/* divider */}
                <div className="border-t border-gray-700 my-6" />

                {/* copyright */}
                <p className="text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Tomer. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
