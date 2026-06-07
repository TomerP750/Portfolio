import "./NavbarDrawer.css";
import { JSX, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { scrollToSection } from "../../../../Utils/Scroll";

interface NavbarDrawerProps {
    onClose: () => void;
    isOpen: boolean;
}
export function NavbarDrawer({ onClose, isOpen }: NavbarDrawerProps): JSX.Element {

    useEffect(() => {

        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { 
            document.body.style.overflow = ''; 
        };

    }, [isOpen]);

    const drawerVariants = {
        hidden: { x: '100%' },
        visible: { x: 0 },
        exit: { x: '-100%' },
    }

    const handleClick = (sectionId: string) => {
        scrollToSection(sectionId);
        onClose();
    }

    const menuNavbarItem = `${isOpen ? "block" : "hidden"} relative text-[#10b981] hover:text-[#e5e7eb] no-underline
  transition-colors duration-300
  px-3 py-2 rounded cursor-pointer
  after:content-['']
  after:absolute after:left-0 after:bottom-0
  after:h-[2px] after:w-full after:bg-current
  after:origin-center after:scale-x-0
  after:transition-transform after:duration-300
  hover:after:scale-x-100`;

    return (
        <motion.div
            className="fixed inset-0 z-50 flex"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={drawerVariants}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
        >

            <div className="w-full h-full bg-[#0f172a]">
                <ul className="flex flex-col items-center justify-start mt-10 h-full gap-6">
                    <li onClick={onClose}
                        className={"w-4/5 text-[#10b981] flex justify-start items-center cursor-pointer"}><X size={30} />
                    </li>
                    <li
                        onClick={() => handleClick("home")}
                        className={menuNavbarItem}
                    >
                        Home
                    </li>
                    <li
                        onClick={() => handleClick("about")}
                        className={menuNavbarItem}
                    >
                        About
                    </li>
                    <li
                        onClick={() => handleClick("skills")}
                        className={menuNavbarItem}
                    >
                        Skills
                    </li>
                    <li
                        onClick={() => handleClick("projects")}
                        className={menuNavbarItem}
                    >
                        Projects
                    </li>
                    <li
                        onClick={() => handleClick("contact")}
                        className={menuNavbarItem}
                    >
                        Contact
                    </li>
                   
                </ul>
            </div>
        </motion.div>
    );
}
