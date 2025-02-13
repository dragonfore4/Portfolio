import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Ubuntu_Sans_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});



const ubuntu = Ubuntu_Sans_Mono({
    variable: "--font-ubuntu",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "Sirasith ",
    description: "This is my Portfolio",
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
                </head>
                <body
                    className={` ${geistMono.variable} ${geistSans.variable} ${ubuntu.variable} font-ubuntu antialiased`}
                >
                    {children}
                </body>
            </html>
        );
}
