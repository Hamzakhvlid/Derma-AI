"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });


import AdminNavabr from "./component/nav";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <AdminNavabr />
             <body className={inter.className}>{children}</body>

        </html>
    );
}
