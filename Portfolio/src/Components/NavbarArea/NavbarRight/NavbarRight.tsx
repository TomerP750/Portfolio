import "./NavbarRight.css";
import {JSX} from "react";
import {Menu} from "lucide-react";

export function NavbarRight(): JSX.Element {

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


    return (
        <div className="flex justify-between items-center gap-1 text-1xl">
            <div className="hidden min-[900px]:flex gap-2">
                <span className={navbarCenterItem}>Home</span>
                <span className={navbarCenterItem}>About</span>
                <span className={navbarCenterItem}>Projects</span>
                <span className={navbarCenterItem}>Contact</span>
                <span
                    className={"hidden sm:inline-block relative text-[#10b981] hover:text-[#e5e7eb] no-underline transition-colors duration-300 px-4 py-2 rounded-4xl border-1 cursor-pointer"}>Download CV</span>
            </div>

            <Menu className="block min-[900px]:hidden text-[#10b981]"/>
        </div>

    );
}
