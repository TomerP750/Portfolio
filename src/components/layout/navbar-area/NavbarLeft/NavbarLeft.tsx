import "./NavbarLeft.css";
import {JSX} from "react";
import {useNavigate} from "react-router-dom";
import logo from "../../../../assets/mylogo.png";

export function NavbarLeft(): JSX.Element {

    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center">
			{/*<h1 className={"text-[#10b981] hover:text-[#e5e7eb] transition text-3xl cursor-pointer italic"} onClick={()=>navigate("/")}>Tomer</h1>*/}
            <img src={logo} alt="logo" className={"h-2/3 cursor-pointer"} onClick={()=>navigate("/")}/>
        </div>
    );
}
