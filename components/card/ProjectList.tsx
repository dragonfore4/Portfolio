import React from 'react'
import ProjectCard from './ProjectCard'
import { projectLists } from '@/utils/ProjectsList'

const ProjectList = () => {
    return (
        // <div className='flex gap-x-8 gap-y-16 justify-between flex-1 flex-wrap bg-red-00 '>
        <div className='grid lg:grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-8 bg-red-00 '>
            {
                projectLists.map((item, idx) => <ProjectCard key={idx} name={item.name} description={item.description} tools={item.tools} />)
            }
        </div>
    )
}

export default ProjectList