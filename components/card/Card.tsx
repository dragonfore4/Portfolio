import Image from 'next/image'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { InformationButton } from '../Button/Button'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import { CONTACT_INFO } from '@/utils/Contact'

const Card = () => {
    return (
        <div className='flex flex-col justify-between h-full gap-4 bg-red-00'>

            <div className='h-[300px] lg:h-2/3  relative'>
            <Image src={"/pictures/boys.jpg"} fill alt="Profile picture of Sirasith" className="object-cover rounded-lg" />
            hello
            </div>
            <div className='flex flex-col  gap-4'>
                <InformationButton icon={<IoPhonePortraitOutline className='text-white w-4 h-4 my-2' />} title={'Phone'} information={CONTACT_INFO.phone} />
                <InformationButton icon={<MdOutlineMailOutline className='text-white w-4 h-4 my-2' />} title={'Email'} information={CONTACT_INFO.email} />
                <InformationButton icon={<FaLocationDot className='text-white w-4 h-4 my-2' />} title={'Location'} information={CONTACT_INFO.location} />

            </div>
            <div className='flex  justify-between items-center gap-4'>
                <a href={CONTACT_INFO.github} target='_blank' className='transition-all duration-300 hover:-translate-y-2 hover:scale-110'>
                    <FaGithub className='w-6 h-6' />
                </a>

            </div>
        </div>
    )
}

export default Card