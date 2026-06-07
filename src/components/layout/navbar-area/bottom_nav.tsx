import { BiCodeAlt, BiFolderOpen, BiHome, BiUser } from "react-icons/bi";
import { scrollToSection } from "../../../Utils/Scroll";


const navBtn =
  "flex flex-col items-center justify-center gap-1 cursor-pointer text-gray-300 hover:text-teal-400 active:scale-95 transition-all duration-300";

export function BottomNavbar() {
  return (
    <nav
      className="fixed bottom-0 w-full z-[1000] grid grid-cols-4 bg-slate-800 h-20 lg:hidden"
      role="navigation"
    >
      <button aria-label="Home button" onClick={() => scrollToSection("home")} className={navBtn}>
        <BiHome size={22} />
        <span className="text-sm font-medium">Home</span>
      </button>

      <button aria-label="About button" onClick={() => scrollToSection("about")} className={navBtn}>
        <BiUser size={22} />
        <span className="text-sm font-medium">About</span>
      </button>

      <button aria-label="Skills button" onClick={() => scrollToSection("skills")} className={navBtn}>
        <BiCodeAlt size={22} />
        <span className="text-sm font-medium">Skills</span>
      </button>

      <button aria-label="Projects button" onClick={() => scrollToSection("projects")} className={navBtn}>
        <BiFolderOpen size={22} />
        <span className="text-sm font-medium">Projects</span>
      </button>
    </nav>
  );
}
