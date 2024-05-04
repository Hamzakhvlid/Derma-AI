import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./homePage/components/Navbar";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Providers from "./lib/provider";
import BottomNavigationBar from "./homePage/components/BottomNavigationBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DERMA AI",
  description: "DERMA AI - Dermatology AI",
  manifest: "/manifest.json",
  icons:{
    icon: ['/favicon/favicon.ico?v=4'],
    apple: ['favicon/app-touch-icon.png?v=4'],
    shortcut:['favicon/app-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <Theme>
          <Navbar />
          <body className={inter.className}>{children}</body>
          <BottomNavigationBar />
          <ToastContainer />
        </Theme>
      </Providers>
    </html>
  );
}
