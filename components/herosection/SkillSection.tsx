import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDocker } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import { SiTypescript, SiSvelte, SiTailwindcss, SiExpress, SiMysql, SiMongodb, SiSpringboot } from "react-icons/si";

const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <RiNextjsFill className="text-white bg-black rounded-full p-1" /> },
    { name: "Svelte", icon: <SiSvelte className="text-orange-400" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DBF4A] "/> }, // Fixed the icon for Spring Boot
    { name: "Express.js", icon: <SiExpress className="text-white bg-gray-700 p-1 rounded-md" /> },
    { name: "Golang", icon: <FaGolang className="text-blue-300" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "Supabase", icon: <RiSupabaseFill className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
];


const SkillSection = () => {
    return (
        <section
            id="Skills"
            className="mt-20 mb-20 flex flex-col gap-8 text-white"
            style={{
                minHeight: "calc(85vh - 48px - 80px)",
                marginTop: "calc(80px + 80px + 50px)",
            }}
        >
            {/* TITLE */}
            <div className="text-left">
                <p className="text-3xl lg:text-4xl font-bold text-gradient">Skills & Technologies</p>
            </div>

            {/* SKILL GRID */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {skills.map((skill, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center group">
                            {/* ICON */}
                            <div className={`text-5xl group-hover:scale-110 transition-transform duration-300 shadow-md p-4 rounded-lg `}>
                                {skill.icon}
                            </div>
                            {/* NAME */}
                            <p className="text-sm mt-2 text-gray-300 group-hover:text-white transition-colors">
                                {skill.name}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default SkillSection;
