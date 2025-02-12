import React from "react";
import { SparkleButton } from "../ฺButton/Button";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiMongodb, SiGoland, SiBootstrap, SiSvelte, SiNextdotjs, SiPhp, SiExpress, SiTypescript } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";

// ✅ เพิ่มข้อมูลไอคอนที่ต้องการแสดง
const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <RiNextjsFill className="text-white bg-black rounded-full p-1" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Golang", icon: <FaGolang className="text-blue-300" /> },
    { name: "Svelte", icon: <SiSvelte className="text-orange-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-white bg-gray-700 p-1 rounded-md" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "Supabase", icon: <RiSupabaseFill className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
];

const SkillSection = () => {
    return (
        <section
            id="Skills"
            className="mt-20 mb-20 flex flex-col  gap-8 text-white"
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
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 ">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center group">
                        {/* ICON */}
                        <div className="text-5xl group-hover:scale-110 transition-transform duration-300 shadow-md p-4 rounded-lg">
                            {skill.icon}
                        </div>
                        {/* NAME */}
                        <p className="text-sm mt-2 text-gray-300 group-hover:text-white transition-colors">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default SkillSection;
