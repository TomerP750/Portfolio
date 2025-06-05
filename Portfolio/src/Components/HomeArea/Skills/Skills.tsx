// import {AnimatePresence, motion, useInView, Variants} from "framer-motion";
// import "./Skills.css";
// import {JSX, useRef, useState} from "react";
// import {skills} from "../../../Datas/SkillsData.ts";
// import image from "../../../assets/skillsImage.png";
//
// export function Skills(): JSX.Element {
//
//     const [openSkill, setOpenSkill] = useState<string | null>(null);
//
//     const toggleSkill = (name: string) => {
//         setOpenSkill(prev => (prev === name ? null : name));
//     };
//
//     const containerVariants: Variants = {
//         hidden: {opacity: 0, y: 30},
//         show: {opacity: 1, y: 0, transition: {staggerChildren: 0.1, when: 'beforeChildren'}}
//     }
//
//     const cardVariants: Variants = {
//         hidden: {opacity: 0, scale: 0.9},
//         show: {opacity: 1, scale: 1, transition: {duration: 0.4}}
//     }
//
//     // const detailVariants: Variants = {
//     //     hidden: {height: 0, opacity: 0},
//     //     show: {height: 'auto', opacity: 1, transition: {duration: 0.3}}
//     // }
//
//     const ref = useRef<HTMLElement>(null);
//     const inView = useInView(ref, {once: true, margin: "0px 0px -200px 0px", amount: 0.2});
//
//     return (
//         <motion.section
//             ref={ref}
//             className="max-w-5xl mx-auto mt-16 mb-24 px-4"
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? 'show' : 'hidden'}
//         >
//             <div className="w-full flex justify-center">
//                 <img src={image} alt="mySkills" className={"w-80 aspect-square"}/>
//             </div>
//
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                 {skills.map(({name, icon: Icon, color, details}) => (
//                     <motion.div
//                         key={name}
//                         variants={cardVariants}
//                         whileHover={{y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)'}}
//                         className="relative bg-[#1f2937] rounded-2xl overflow-hidden"
//                     >
//                         {/* Icon circle */}
//                         <div
//                             onClick={() => toggleSkill(name)}
//                             className="flex items-center p-4 space-x-3"
//                         >
//                             <div
//                                 className="p-3 rounded-full"
//                                 style={{backgroundColor: color + '33'}}
//                             >
//                                 <Icon size={32} color={color}/>
//                             </div>
//                             <h3 className="text-xl font-semibold text-white flex-grow">
//                                 {name}
//                             </h3>
//                             {/*              <span className="text-2xl text-white">*/}
//                             {/*  {openSkill === name ? '−' : '+'}*/}
//                             {/*</span>*/}
//                         </div>
//
//                         {/*<AnimatePresence>*/}
//                         {/*    {openSkill === name && (*/}
//                         {/*        <motion.div*/}
//                         {/*            variants={detailVariants}*/}
//                         {/*            initial="hidden"*/}
//                         {/*            animate="show"*/}
//                         {/*            exit="hidden"*/}
//                         {/*            className="p-4 pt-0 text-gray-300 bg-[#111827]"*/}
//                         {/*        >*/}
//                         {/*            <ul className="list-disc list-inside space-y-1">*/}
//                         {/*                {details.map((d, idx) => (*/}
//                         {/*                    <li key={idx}>{d}</li>*/}
//                         {/*                ))}*/}
//                         {/*            </ul>*/}
//                         {/*        </motion.div>*/}
//                         {/*    )}*/}
//                         {/*</AnimatePresence>*/}
//                     </motion.div>
//                 ))}
//             </div>
//         </motion.section>
//     )
// }
//
//


import { motion, Variants } from "framer-motion";
import { skills } from "../../../Datas/SkillsData.ts";
import image from "../../../assets/skillsImage.png";
import {JSX} from "react";

export function Skills(): JSX.Element {

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
        },
    };


    const cardVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 0.9,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="skills-section max-w-5xl mx-auto mt-16 mb-24 px-4">

            <motion.div
                className="w-full flex justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <img
                    src={image}
                    alt="mySkills"
                    className="w-80 aspect-square"
                />
            </motion.div>


            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {skills.map(({ name, icon: Icon, color }) => (
                    <motion.div
                        key={name}
                        variants={cardVariants}
                        className="
              relative
              rounded-2xl
              overflow-hidden
              border-2 border-transparent
              group
              cursor-pointer
              transform
              transition-all
              duration-300
              bg-[repeating-linear-gradient(
                to right,
                rgba(255,255,255,0.02) 0px,
                rgba(255,255,255,0.02) 1px,
                transparent 1px,
                transparent 6px
              ),
              repeating-linear-gradient(
                to bottom,
                rgba(255,255,255,0.02) 0px,
                rgba(255,255,255,0.02) 1px,
                transparent 1px,
                transparent 6px
              ),
              #1f2937]  /* fallback solid dark behind the grid */
            "
                    >

                        <div
                            className="
                relative
                z-20
                flex
                items-center
                justify-center
                w-16 h-16
                mx-auto mt-6
                rounded-full
                bg-gray-800
                transition-all
                duration-300
                group-hover:bg-[var(--icon-color)]
                group-hover:shadow-[0_0_12px_var(--icon-color)]
              "
                            style={{ "--icon-color": color } as React.CSSProperties}
                        >
                            <Icon
                                size={32}
                                className="text-[var(--icon-color)] group-hover:text-gray-900"
                            />
                        </div>

                        <div className="relative z-20 p-4 text-center">
                            <code
                                className="
                  inline-block
                  font-mono
                  text-green-300
                  bg-gray-800/50
                  px-2 py-1
                  rounded-md
                  border-b-2 border-dashed border-gray-500/50
                  transition-all
                  duration-300
                  group-hover:bg-gray-800/70
                  group-hover:border-green-400/70
                  group-hover:text-green-400
                "
                            >
                                &lt;{name} /&gt;
                            </code>
                        </div>

                        <div
                            className="
                absolute inset-0
                z-10
                ring-0
                transition-all
                duration-300
                group-hover:ring-2
                group-hover:ring-green-400
                group-hover:ring-opacity-50
                group-hover:shadow-lg
              "
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}


