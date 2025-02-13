"use client"
import React, { useState, useEffect } from 'react';
import NavbarButton from './NavbarButton';
import { navbarList } from '@/utils/NavbarList';



const Navbar = () => {
    const [activeButton, setActiveButton] = useState<string>(navbarList[0]);

    // ✅ 1️⃣ ฟังก์ชัน Scroll ไปยัง Section
    const handleActiveButton = (name: string) => {
        const section = document.getElementById(name);
        if (section) {
            const offset = 160 + 49.6;
            const elementPosition = section.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({ top: offsetPosition, behavior: "smooth" });


        }
        setActiveButton(name);
    };


    // ✅ 2️⃣ ตรวจจับว่า Scroll ถึง Section หรือยัง
    useEffect(() => {
        const handleScroll = () => {
            navbarList.forEach(name => {
                const section = document.getElementById(name);
                if (section) {
                    const elementPosition = section.getBoundingClientRect().top + window.scrollY;
                    // console.log(`📌 Section: ${name}`);
                    // console.log(`Top: ${section.getBoundingClientRect().top}, ScrollY: ${window.scrollY}, Total: ${elementPosition}`);
    
                    const windowScrollY = window.scrollY + 160 + 50.5; // ค่า offset ที่คำนวณ
                    // console.log(`windowScrollY = ${windowScrollY}, elementPosition = ${elementPosition}`);
    
                    if (windowScrollY >= elementPosition) {
                        setActiveButton(name);
                    }
                }
            });
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <div className="hidden lg:flex justify-between sticky top-20 z-50">
            {/* Left-aligned navigation buttons */}
            <div className="flex gap-2 ">
                {navbarList.map((name, idx) => (
                    <NavbarButton
                        key={idx}
                        name={name}
                        isActive={activeButton === name}
                        onClick={() => handleActiveButton(name)}
                    />
                ))}
            </div>

            {/* Right-aligned "Let's Talk" button */}
            <button className="px-6 py-3 right-20 rounded-3xl font-semibold text-black bg-gradient-to-r from-pink-300 to-purple-300 hover:opacity-80 transition-all duration-300">
                Lets Talk
            </button>
        </div>
    );
};

export default Navbar;
