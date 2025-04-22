import "./Navbar.css";
import {JSX} from "react";
// import {NavbarRight} from "../NavbarRight/NavbarRight.tsx";
import {NavbarRight} from "../NavbarRight/NavbarRight.tsx";
import {NavbarLeft} from "../NavbarLeft/NavbarLeft.tsx";

export function Navbar(): JSX.Element {
    return (
        <div className={"items-center flex justify-center w-full bg-[#0f172a] h-20"}>
            <div className="w-[70%] flex justify-between">
            <NavbarLeft/>
            <NavbarRight/>
            </div>
        </div>
    );
}
