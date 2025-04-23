import "./NavbarRight.css";
import {JSX, useState} from "react";
import {Menu, X} from "lucide-react";
import {AnimatePresence, motion } from "framer-motion";

export function NavbarRight(): JSX.Element {

    const [drawerOpened, setDrawerOpened] = useState<boolean>(false);
    const drawerVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
        exit:   { x: '-100%' },
    }

    // const navbarCenterItem = "hidden sm:block text-[#10b981] hover:text-[#e5e7eb] transition px-3 py-2 rounded cursor-pointer "

    const navbarCenterItem = `hidden sm:inline-block relative text-[#10b981] hover:text-[#e5e7eb] no-underline
  transition-colors duration-300
  px-3 py-2 rounded cursor-pointer
  after:content-['']
  after:absolute after:left-0 after:bottom-0
  after:h-[2px] after:w-full after:bg-current
  after:origin-center after:scale-x-0
  after:transition-transform after:duration-300
  hover:after:scale-x-100
`


    const scrollToSection = (id: string) => {
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="flex justify-between items-center gap-1 text-1xl">
            <div className="hidden min-[900px]:flex gap-2">
                <span onClick={() => scrollToSection("home")} className={navbarCenterItem}>Home</span>
                <span onClick={() => scrollToSection("about")} className={navbarCenterItem}>About</span>
                <span onClick={() => scrollToSection("projects")} className={navbarCenterItem}>Projects</span>
                <span onClick={() => scrollToSection("contact")} className={navbarCenterItem}>Contact</span>
                <span
                    className={"hidden sm:inline-block relative text-[#10b981] hover:text-[#e5e7eb] no-underline transition-colors duration-300 px-4 py-2 rounded-4xl border-1 cursor-pointer"}>Download CV</span>
            </div>

            <Menu className="block min-[900px]:hidden text-[#10b981]"/>

        </div>

    );

}
