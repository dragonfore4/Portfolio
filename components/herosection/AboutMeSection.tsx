import React from 'react'
import { DefaultButton, SparkleButton } from '../Button/Button'
import { HiOutlineViewGrid } from 'react-icons/hi'
import { FaCloudDownloadAlt } from "react-icons/fa";


const AboutMeSection = () => {
  return (
    <section id="About me" className=" mt-20 mb-20  flex flex-col justify-between gap-8 bg-slate-00" style={
      { minHeight: "calc(85vh - 48px - 80px)" }
    }>
      <SparkleButton name="Let's Start!" />
      <p className='text-2xl lg:text-4xl font-bold text-gradient'>I’m Sirasith Ruengsilapavilai,<br /> <span className='text-md lg:text-2xl'> interested in Software Development and Web Development</span></p>

      <p className="text-medium-grey">
        Hi, I&apos;m Sirasith Ruengsilapavilai, but you can call me
        <span className="text-light-grey "> Game</span>.
        I&apos;m a <span className="text-light-grey ">third-year Computer Science</span> student at
        <span className="text-light-grey "> KMITL</span>,
        building a strong foundation in <span className="text-light-grey">software development </span>
        and problem-solving. I&apos;m especially passionate about
        <span className="text-light-grey"> web development </span>
        and always eager to explore new technologies.
      </p>

      <div className='flex gap-8'>

        <DefaultButton name='My works' Icon={<HiOutlineViewGrid className='animate-pulse' />} goesTo='Projects' />

        <a href="/CV_sirasith_ruengsilapavilai.pdf" download={"Sirasith_cv"}>
          <DefaultButton name='Download my CV' Icon={<FaCloudDownloadAlt />} />
        </a>
      </div>
    </section>)
}

export default AboutMeSection