import "./Footer.css";
import {JSX} from "react";

export function Footer(): JSX.Element {
    return (
        <div className="bg-black h-64 text-[#10b981] justify-center w-full flex items-center ">
            <div className="flex justify-between gap-5">
                <span className="cursor-pointer hover:text-[#03835a]">About</span>
                <span className="cursor-pointer hover:text-[#03835a]">LinkedIn</span>
                <span className="cursor-pointer hover:text-[#03835a]">GitHub</span>
            </div>
        </div>
    );
}
