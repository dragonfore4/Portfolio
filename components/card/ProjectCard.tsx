import React from "react";
import { ToolButton } from "../Button/Button";

const ProjectCard = ({
    name,
    description,
    tools,
}: {
    name: string;
    description: string;
    tools: string[];
}) => {
    return (
<div className="rounded-2xl bg-[#161616] border border-[#2E2E2E] shadow-lg p-6 flex flex-col justify-between gap-5 transition-all duration-300 
    hover:-translate-y-2 hover:border-opacity-75 hover:shadow-[0px_0px_12px_rgba(255,255,255,0.1)] 
    sm:w-[100%] lg:w-full will-change-transform">
            
            {/* Project Title */}
            <h3 className="text-lg font-semibold text-white lg:text-2xl transition-colors duration-300 group-hover:text-lightGrey">
                {name}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                {description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-x-3 gap-y-2 mt-2">
                {tools &&
                    tools.map((item, idx) => (
                        <ToolButton key={idx} name={item} />
                    ))}
            </div>
        </div>
    );
};

export default ProjectCard;
