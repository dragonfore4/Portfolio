import Image from "next/image";
import React from "react";
import { FaChalkboardTeacher, FaRecycle } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";

// ลิงก์รูปภาพ TTB สำหรับตัวอย่าง
const ttbLogoUrl = "https://www.ttbbank.com/global/assets/img/media-img/ttb_primary-logo-RGB-01.png";

const experiences = [
  {
    id: 1,
    title: "TTB Bank Internship – DevOps Engineer",
    date: "Jan - Apr 2026",
    // แก้ไขโลโก้ TTB ให้เต็มวงกลม
    icon: (
      <Image
        src={ttbLogoUrl} // ใส่ลิงก์รูปภาพ TTB
        alt="TTB"
        className="h-full w-full object-cover rounded-full bg-white p-1" // ปรับรูปภาพให้เต็มวงกลมและเพิ่มพื้นหลังขาว
        width={100}
        height={100}
      />
    ),
    description: [
      "Standardized CI/CD pipelines across multiple projects by refactoring legacy Jenkinsfiles to utilize Central DevOps Shared Libraries, ensuring compliance with organizational security policies",
      "Hardened application security by migrating Spring Boot and Angular projects to Enterprise Red Hat (RHEL) base image, utilizing multi-stage Docker builds to minimize image size and attack surfaces.",
      "Created a centralized ELK monitoring dashboard to track incoming requests and error accumulation, enabling real-time visibility.",
      "Built native-integrated \"Passport Reader\" shared libraries (.aar for Android and .xcframework for iOS), optimizing low-level hardware interaction for faster and more reliable digital identity verification.",
      "Optimized service reliability within NestJS applications by implementing Rate Limiting to prevent system exhaustion and developing a Global Exception Filter for standardized, traceable logging."
    ],
  },
  {
    id: 2,
    title: "IBM Internship – Platform Engineer (Client Engineer Team)",
    date: "Jun – Nov 2025",
    // แก้ไขโลโก้ IBM ให้เต็มวงกลม
    icon: (
      <Image
        src="https://avatars.githubusercontent.com/u/1459110?s=200&v=4" // ลิงก์รูปภาพ IBM
        alt="IBM"
        className="h-full w-full object-cover p-0" // ปรับรูปภาพให้เต็มวงกลม
        width={100}
        height={100}
      />
    ),
    description: [
      "Led a CSR project with Kasetsart University to promote sustainability by developing a fish detection platform.",
      "Designed and delivered Proof of Concepts (PoCs) to validate feasibility and accelerating client transformation, leveraging tools such as Terraform (Enterprise) for IaC deployment, IBM Instana for full-stack observability, and watsonx Orchestrate for orchestrate AI agent."
    ],
  },
  {
    id: 3,
    title: "SAP Master Trainer – ASEAN DSE 2024",
    date: "Feb – Nov 2024",
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
    id: 4,
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
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gradient">My Experiences</h2>
      </div>

      <div className="relative md:ml-10 flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <div key={exp.id} className="flex flex-col md:flex-row md:relative justify-center items-center md:items-start gap-6">
            {/* Timeline Vertical Line */}
            {idx !== experiences.length - 1 && (
              <div className="hidden md:block absolute left-7 top-14 h-full w-[2px] bg-gray-800 mt-6"></div>
            )}

            {/* แก้ไขสไตล์ของ Circle Icon Container ให้พอดีกับโลโก้เต็มวง */}
            <div className="mb-2 md:mb-0 flex items-center justify-center w-16 h-16 p-0 shrink-0 bg-[#1a1a1a] border border-gray-700 rounded-full shadow-lg mt-6 z-10 overflow-hidden">
              {exp.icon}
            </div>

            {/* Experience Card */}
            <div className="bg-[#161616] border-gunmetal-gray border p-6 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 w-full hover:border-gray-500">
              <h3 className="text-md md:text-2xl font-bold text-white">{exp.title}</h3>
              {exp.subtitle && (
                <h4 className="text-xs md:text-lg font-semibold text-gray-400 mt-1">{exp.subtitle}</h4>
              )}
              <p className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-wider mb-4">{exp.date}</p>

              {/* Main Text Content */}
              <ul className="list-disc pl-5 flex flex-col gap-3 text-slate-300">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-sm md:text-base leading-relaxed">
                    {desc}
                  </li>
                ))}
              </ul>

              {/* Specific Sub-tasks (Missions) */}
              {exp.missions && (
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <h4 className="text-sm md:text-md font-bold text-gray-200 mb-3">Key Missions:</h4>
                  <ul className="space-y-3">
                    {exp.missions.map((mission, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <HiOutlineLightBulb className="text-yellow-400 w-5 h-5 mt-0.5 shrink-0" />
                        <span className="text-sm md:text-base text-gray-400 italic">{mission}</span>
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