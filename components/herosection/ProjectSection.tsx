import React from 'react'
import { SparkleButton } from '../ฺButton/Button'
import ProjectList from '../card/ProjectList'

const ProjectSection = () => {
    return (
        <section id="Projects" className="min-h-[85vh] mb-20  flex flex-col gap-12 bg-green-00" style={
            {
                minHeight: "calc(85vh - 48px - 80px)",


                marginTop: "calc(80px + 80px + 50px)"
            }
        }>
            <p className='text-2xl lg:text-4xl font-bold text-gradient'>Checkout my recent projects</p>
            <SparkleButton name='Projects'/>

            <ProjectList />
        </section>)

}

export default ProjectSection