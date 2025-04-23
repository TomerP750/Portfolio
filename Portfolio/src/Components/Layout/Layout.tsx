import "./Layout.css";
import {JSX} from "react";
import {Routing} from "../Routing/Routing.tsx";
import {Footer} from "../Footer/Footer.tsx";
import {Navbar} from "../NavbarArea/Navbar/Navbar.tsx";

export function Layout(): JSX.Element {

    return (
        <div className="Layout">
            {/*<Navbar/>*/}
            <Routing/>
            <Footer/>
        </div>
    );
}
