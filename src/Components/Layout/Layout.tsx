import "./Layout.css";
import {JSX, useEffect, useState} from "react";
import {Routing} from "../Routing/Routing.tsx";
import {Footer} from "../Footer/Footer.tsx";
import {FaArrowUp} from "react-icons/fa";
// import {Navbar} from "../NavbarArea/Navbar/Navbar.tsx";

export function Layout(): JSX.Element {

    const [showBtn, setShowBtn] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            setShowBtn(window.scrollY > 300);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const scrollToNavbar = () => {
        const navEl = document.getElementById("navbar");
        if (navEl) {
            navEl.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            // fallback to top of page
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="Layout">

            <Routing/>
            {/*<Footer/>*/}

            {showBtn && (
                <button
                    onClick={scrollToNavbar}
                    className="cursor-pointer fixed bottom-5 right-5 bg-[#10b981] text-white p-3 rounded-full shadow-lg hover:bg-neutral-300 hover:text-[#10b981] transition"
                    aria-label="Back to top"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </div>
    );
}
