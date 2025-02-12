import React from "react";
import { FaChalkboardTeacher, FaRecycle } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";

const experiences = [
    {
        id: 1,
        title: "SAP Master Trainer – ASEAN DSE 2024",
        date: "February 2024 – Present",
        icon: <FaChalkboardTeacher className="text-yellow-400 text-4xl" />,
        description: [
            "Selected as a Master Trainer for ASEAN Data Science Explorers (ASEAN DSE) Enablement Session 2024, empowering underserved youth across ASEAN.",
            "Conducted training on SAP Analytics Cloud (SAC) for COVID-19 data analysis, teaching participants how to apply data science techniques.",
            "Led hands-on workshops on SAP Low-code/No-code tools, guiding participants through:"
        ],
        missions: [
            "Built a Barcode Scanner App using SAP Build Apps.",
            "Developed an IT Order App with workflow automation.",
        ],
    },
    {
        id: 2,
        title: "Krungsri UniVerse x KMITL Hackathon",
        subtitle: "Innovating for a Sustainable Future",
        date: "July 2023",
        icon: <FaRecycle className="text-green-400 text-4xl" />,
        description: [
            "Developed an AI Smart Trash Bin for waste segregation in communities, integrating a Line Chatbot for real-time monitoring and reward-based participation.",
            "Designed a prototype in Figma, featuring key interfaces for user registration, waste detection, and reward redemption, optimizing user engagement and system usability.",
        ],
    },
];

const ExperienceSection = () => {
    return (
        <section id="Experiences" className="min-h-[85vh] mb-20 flex flex-col gap-12" style={{
            minHeight: "calc(85vh - 48px - 80px)",
            marginTop: "calc(80px + 80px + 50px)"
        }}>
            {/* Title */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gradient">My Experiences</h2>
            </div>

            {/* TIMELINE CONTAINER */}
            <div className="relative md:ml-10 flex flex-col gap-8">
                {experiences.map((exp, idx) => (
                    <div key={exp.id} className="md:relative md:flex items-start gap-6">
                        {/* Timeline Line - Stops at last item */}
                        {idx !== experiences.length - 1 && (
                            <div className="hidden md:block absolute left-6 top-12 h-full w-[2px] bg-gray-700 mt-6"></div>
                        )}

                        {/* ICON */}
                        <div className="translate-x-40 mb-2 md:translate-x-0 md:mb-0 md:flex items-center justify-center w-14 h-14 p-2  bg-gray-800 rounded-full shadow-md mt-6">
                            {exp.icon}
                        </div>

                        {/* EXPERIENCE CONTENT */}
                        <div className="bg-[#161616] border-gunmetalGray border p-6  rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 w-full hover:border-lightGrey">
                            {/* Title & Date */}
                            <h3 className="text-md md:text-2xl font-bold">{exp.title}</h3>
                            {exp.subtitle && (
                                <h4 className="text-xs md:text-lg font-semibold text-mediumGrey">{exp.subtitle}</h4>
                            )}
                            <p className="text-gray-500 text-xs md:text-lg mb-4">{exp.date}</p>

                            {/* Description */}
                            <ul className="list-disc pl-5 flex flex-col gap-2 text-white">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className=" md:text-md">{desc}</li>
                                ))}
                            </ul>

                            {/* Missions for SAP */}
                            {exp.missions && (
                                <div className="mt-4">
                                    <h4 className="text-xs  md:text-lg font-semibold text-gray-300">Missions:</h4>
                                    <ul className=" list-disc pl-5 text-gray-400 space-y-1">
                                        {exp.missions.map((mission, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <HiOutlineLightBulb className="text-yellow-300 w-[20px]" /> <span className="text-md ">{mission}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
