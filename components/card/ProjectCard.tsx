import React from 'react'
import { ToolButton } from '../ฺButton/Button'

const ProjectCard = ({ name, description, tools }: { name: string, description: string, tools: string[] }) => {
    return (
        <div className='rounded-2xl bg-[#161616] border-gunmetalGray border shadow-lg p-6 flex flex-col justify-between gap-4 transition-transform duration-300 hover:-translate-y-2 sm:w-[100%] lg:w-full '>
            <span className='text-base font-semibold lg:text-xl'>{name}</span>
            <p className='text-mediumGrey  leading-relaxed text-sm'>
                {description}
            </p>
            <div className='flex flex-wrap gap-x-4 items-center gap-y-2 '>
                {
                    tools && tools.map((item, idx) => <ToolButton key={idx} name={item} />)
                }

            </div>
        </div>
    )
}

export default ProjectCard
