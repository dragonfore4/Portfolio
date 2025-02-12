import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                lightGrey: "#D9D9D9", // เทาอ่อน
                mediumGrey: "#a1a1a1",// เทากลาง (ฟ้อน)
                darkCharcoal: "#161616",// สีดำอมเทา (bg card)
                gunmetalGray: "#373737",//  สีเทาเข้ม (สีขอบ)

            },
            fontFamily: {
                ubuntu: "var(--font-ubuntu)"
            },
            gridTemplateColumns: {
                'auto-fit': 'repeat(auto-fit, minmax(100px, 1fr))',
                'auto-fill': 'repeat(auto-fill, minmax(100px, 1fr))',
            }
        },
    },
    plugins: [],
} satisfies Config;
