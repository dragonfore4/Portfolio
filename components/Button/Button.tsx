"use client";
import React, { JSX } from 'react'
import { GiSparkles } from "react-icons/gi";


export const DefaultButton = ({ name, Icon, goesTo }: { name: string; Icon?: JSX.Element, goesTo?: string }) => {

  const goesToSection = (section: string) => {
    const element = document.getElementById(section);

    if (element) {
      const offset = 160 + 49.6;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }

  return (
    <button
      className={`flex justify-center items-center gap-1 cursor-pointer border rounded-3xl px-5 py-3 w-max text-white font-thin text-xs text-center transition-transform  duration-300 hover:-translate-y-2  border-gunmetalGray hover:border-lightGrey`}
      onClick={() => goesTo && goesToSection(goesTo)}
    >
      {name}
      {Icon && Icon} {/* Render the icon only if it exists */}
    </button>
  )
}

export const SparkleButton = ({ name }: { name: string }) => {
  return (
    <button
      className="flex justify-center items-center gap-1 border border-[#373737] rounded-3xl px-5 py-3 w-max text-white font-thin text-xs text-center cursor-default"
      aria-label={name}
    >
      <GiSparkles size={14} className='text-yellow-400' />
      {name}
    </button>
  );
};

export const ToolButton = ({ name }: { name: string }) => {
  return (
    <button
      className="border-transparent bg-[#2e2e2e] h-fit rounded-3xl px-4 py-1 w-max text-[#c7c5c5] font-bold text-xs text-center cursor-default "
      aria-label={name}
    >
      {name}
    </button>
  );
};



export const InformationButton = ({ icon, title, information }: { icon: JSX.Element, title: string, information: string }) => {
  return (
    <div className='flex gap-2'>
      {/* picture */}
      <div className='bg-gunmetalGray px-2 py-1  rounded-xl flex justify-center items-center'>
        {icon}
      </div>
      {/* INFORMATION */}
      <div className='flex flex-col justify-between'>
        {/* Title */}
        <span className='text-xs text-mediumGrey uppercase space tracking-widest'>{title}</span>
        <span className='text-sm'>{information}</span>
      </div>

    </div>
  )
}
