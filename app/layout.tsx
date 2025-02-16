import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Ubuntu_Sans_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

const ubuntu = Ubuntu_Sans_Mono({
    variable: "--font-ubuntu",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Sirasith's Portfolio | Web Development & UI/UX",
    description: "Explore Sirasith's portfolio, showcasing projects in web development, UI/UX, and programming expertise.",
    openGraph: {
        title: "Sirasith's Portfolio | Web Development & UI/UX",
        description: "Explore Sirasith's portfolio, showcasing projects in web development, UI/UX, and programming expertise.",
        url: "https://sirasith.net/",
        images: [
            {
                url: "https://sirasith.net/preview.jpg",
                width: 1200,
                height: 630,
                alt: "Sirasith's Portfolio Preview"
            }
        ],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Sirasith's Portfolio | Web Development & UI/UX",
        description: "Explore Sirasith's portfolio, showcasing projects in web development, UI/UX, and programming expertise.",
        images: ["https://sirasith.net/preview.jpg"]
    }
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

                <meta name="robots" content="index, follow" />
                <meta name="description" content="Explore Sirasith's portfolio, showcasing projects in web development, UI/UX, and programming expertise." />
                <meta name="keywords" content="Sirasith, Portfolio, Web Development, UI/UX, Programming" />
                <meta name="author" content="Sirasith" />

            </head>
            <body
                className={` ${geistMono.variable} ${geistSans.variable} ${ubuntu.variable} font-ubuntu antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
