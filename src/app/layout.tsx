import type {Metadata} from "next";
import React from "react";
import {Inter} from "next/font/google";
import "../styles/globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Tarwiiga Sites",
    description: "Use AI to generate websites in seconds.",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.ico" sizes="100x100"/>
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
