import {motion, useScroll, useTransform} from "framer-motion";
import "./Hero.css";
import {JSX} from "react";
import {ArrowRight} from "lucide-react";
import {CodeTypewriterAnimation} from "../../CodeTypeWriterAnimation/CodeTypeWriterAnimation.tsx";

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
                 items-center flex justify-center h-120 mb-10 lg:mb-0 lg:h-screen
                 will-change-transform will-change-opacity"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >

            <div className="flex justify-center w-full h-3/4">
                {/* Text Content */}
                <motion.div
                    className="w-full items-center flex flex-col md:items-center text-[#10b981] md:w-2/3 gap-10 md:gap-5"
                    variants={itemVariants}
                >
                    <motion.p
                        className="sm:text-left text-5xl md:text-7xl"
                        variants={itemVariants}
                    >
                        Welcome,
                    </motion.p>
                    <motion.p
                        className="text-neutral-100 text-5xl md:text-5xl"
                        variants={itemVariants}
                    >
                        I'm Tomer Jacob
                    </motion.p>
                    {/*<motion.p*/}
                    {/*    className="sm:text-left text-5xl md:text-7xl text-[#10b981] leading-tight"*/}
                    {/*    variants={itemVariants}*/}
                    {/*>*/}
                    {/*    <CodeTypewriterAnimation lines={["Welcome,"]} speed={90}/>*/}
                    {/*</motion.p>*/}

                    {/*<motion.p*/}
                    {/*    className="text-neutral-100 text-5xl md:text-5xl leading-tight"*/}
                    {/*    variants={itemVariants}*/}
                    {/*>*/}
                    {/*    <CodeTypewriterAnimation lines={["I'm Tomer Jacob"]} speed={90}/>*/}
                    {/*</motion.p>*/}


                    <motion.p className="text-white w-3/4" variants={itemVariants}>
                        I'm a passionate Full Stack Developer who creates modern, responsive websites and applications.
                        Driven by curiosity, attention to detail, and a commitment to building digital experiences.
                        Welcome to my portfolio.
                    </motion.p>


                    <motion.button
                        className="relative overflow-hidden bg-[#10b981] rounded-full px-10 py-3 cursor-pointer group"
                        variants={itemVariants}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >
                        <span
                            className="absolute inset-0 w-0 bg-gray-500 transition-all duration-300 ease-in-out group-hover:w-full z-0"
                        />
                        <span className="relative z-10 flex items-center text-white group-hover:text-gray-100">
                            Let’s Work Together
                            <ArrowRight className="ml-2 inline"/>
                        </span>
                    </motion.button>
                </motion.div>

            </div>
        </motion.section>
    );

}
