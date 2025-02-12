import React from 'react'
import { DefaultButton } from '../ฺButton/Button'

const HomeSection = () => {
    return (
        <section id="Home" className="text-red-300 mt-60 " style={
            { height: "calc(85vh - 48px - 80px " }
        }>

            <DefaultButton name="Let's start" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </section>)
}

export default HomeSection