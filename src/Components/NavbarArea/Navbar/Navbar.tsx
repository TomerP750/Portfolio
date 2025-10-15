import "./Navbar.css";
import {JSX} from "react";
// import {NavbarRight} from "../NavbarRight/NavbarRight.tsx";
import {NavbarRight} from "../NavbarRight/NavbarRight.tsx";
import {NavbarLeft} from "../NavbarLeft/NavbarLeft.tsx";
import { BottomNavbar } from "../bottom_nav.tsx";

export function Navbar(): JSX.Element {
    return (
        <div className={"items-center flex justify-center w-full h-20"}>
            <div className="w-[70%] flex justify-between">
            <NavbarLeft/>
            <NavbarRight/>
            </div>

            <BottomNavbar />
        </div>
    );
}
