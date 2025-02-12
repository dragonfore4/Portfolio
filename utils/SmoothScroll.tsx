"use client"

import { useEffect } from "react";

export default function SmoothScroll() {
    useEffect(() => {
        let scrollY = window.scrollY; // ตำแหน่งเริ่มต้นของ Scroll
        let isScrolling = false;

        const smoothScroll = () => {
            if (!isScrolling) return;
            scrollY += (window.scrollY - scrollY) * 0.3; // ปรับค่าความเร็ว (0.3 = smooth effect เร็วขึ้น)
            window.scrollTo(0, scrollY);
            requestAnimationFrame(smoothScroll);
        };

        const handleWheel = (event) => {
            event.preventDefault();
            isScrolling = true;
            scrollY += event.deltaY * 2.5; // เพิ่มความเร็วการเลื่อน (จาก 1.8 → 2.5)
            requestAnimationFrame(smoothScroll);
            setTimeout(() => (isScrolling = false), 50); // หยุด animation เร็วขึ้น
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return null;
}
