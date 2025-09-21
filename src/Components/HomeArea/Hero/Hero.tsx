import {motion, useScroll, useTransform} from "framer-motion";
import "./Hero.css";
import {JSX} from "react";
import {ArrowDown} from "lucide-react";
import {scrollToSection} from "../../../Utils/Scroll.ts";
import dotGrid from "../../../assets/dotgrid.png";

export function Hero(): JSX.Element {

    const {scrollY} = useScroll();
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 0.9]);

    const containerVariants = {
        hidden: {},
        visible: {transition: {staggerChildren: 0.2}}
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
    };

    return (
        <motion.section
            style={{opacity, scale}}
            className="
                 items-center flex justify-center h-120 my-20 lg:mb-0 lg:h-screen
                 will-change-transform will-change-opacity  relative"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >

            <img src={dotGrid} alt="dotgrid" className="w-100 aspect-square absolute left-[55%] top-2 -z-10"/>

            <div className="flex justify-center w-full h-full mt-10 sm:mt-0 sm:h-4/5">
                {/* Text Content */}
                <motion.div
                    className="w-full items-center flex flex-col md:items-start text-[#10b981] 
                    md:w-2/3 gap-3 md:gap-5"
                    variants={itemVariants}
                >
                    <motion.p
                        className="sm:text-left text-4xl md:text-5xl lg:text-7xl font-bold text-white"
                        variants={itemVariants}
                    >
                        Welcome, I'm Tomer<span className="text-[#10b981]">.</span>
                    </motion.p>
                    <motion.p
                        className="text-neutral-100 text-4xl md:text-2xl font-light"
                        variants={itemVariants}
                    >
                        a <span className="text-[#10b981] font-medium">Full Stack Developer</span>
                    </motion.p>

                    <motion.p className="text-white w-3/4 font-light" variants={itemVariants}>
                        I'm a passionate Full Stack Developer who creates modern, responsive websites and applications.
                        Driven by curiosity, attention to detail, and a commitment to building digital experiences.
                        Welcome to my portfolio.
                    </motion.p>


                    <motion.button
                        className="relative overflow-hidden bg-[#10b981] rounded-full px-10 py-3 cursor-pointer group mt-5"
                        variants={itemVariants}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        onClick={()=>scrollToSection("about")}
                    >
                        <span
                            className="absolute inset-0 w-0 bg-gray-500 transition-all duration-300 ease-in-out group-hover:w-full z-0"
                        />
                        <span className="relative z-10 flex items-center text-white group-hover:text-gray-100">
                            Let’s Work Together
                            <ArrowDown className="ml-2 inline"/>
                        </span>
                    </motion.button>
                </motion.div>

            </div>
        </motion.section>
    );

}
