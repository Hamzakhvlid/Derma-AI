import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DASHBOARD - DERMA AI",
  description: "DERMA AI - Dermatology AI",
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Theme>
        <body className={inter.className}>{children}</body>
      </Theme>
    </html>
  );
}
