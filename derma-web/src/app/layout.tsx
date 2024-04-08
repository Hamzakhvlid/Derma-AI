import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./homePage/components/Navbar";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Providers from "./lib/provider";
import BottomNavigationBar from "./homePage/components/BottomNavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DERMA AI",
  description: "DERMA AI - Dermatology AI",
  manifest: "/manifest.json",
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
        </Theme>
      </Providers>
    </html>
  );
}
