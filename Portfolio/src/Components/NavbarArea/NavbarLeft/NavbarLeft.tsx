import "./NavbarLeft.css";
import {JSX} from "react";
import {useNavigate} from "react-router-dom";

export function NavbarLeft(): JSX.Element {

    const navigate = useNavigate();

    return (
        <div className="flex">
			<h1 className={"text-[#10b981] hover:text-[#e5e7eb] transition text-3xl cursor-pointer italic"} onClick={()=>navigate("/")}>Tomer</h1>
        </div>
    );
}
