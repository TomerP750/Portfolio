import "./Routing.css";
import {JSX} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../HomeArea/Home/Home.tsx";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>

                <Route path={"/"} element={<Home/>}/>


            </Routes>
        </div>
    );
}
