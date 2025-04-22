import { motion } from "framer-motion";
import "./About.css";
import {JSX} from "react";

export function About(): JSX.Element {
    // return (
    //     <div className="About text-white flex justify-center">
    //         <div className="flex w-[80%]">
    //             <span className={"text-center"}>About</span>
    //         </div>
    //     </div>
    // );

    return (
        <motion.section
            id="about"
            className="About text-white flex justify-center py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex w-[80%] justify-center">
                <h2 className="text-3xl font-bold text-center">About</h2>
                <p className="mt-4 text-center">
                    {/* your about text here */}
                </p>
            </div>
        </motion.section>
    )
}



