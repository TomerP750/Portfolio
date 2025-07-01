import "./Routing.css";
import {JSX} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../HomeArea/Home/Home.tsx";
import {ProjectDetailsPage} from "../HomeArea/ProjectDetailsPage/ProjectDetailsPage.tsx";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>

                <Route path={"/"} element={<Home/>}/>
                <Route path={"/project/:id"} element={<ProjectDetailsPage/>}/>


            </Routes>
        </div>
    );
}
