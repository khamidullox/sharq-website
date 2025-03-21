import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin", "vietnamese"], // Поддержка вьетнамского, если нужно
  weight: ["400", "500", "700"], // Убедитесь, что нужные веса загружаются
});

export const metadata: Metadata = {
  title: "Sharq Osh",
  description: "Проект на Next.js с TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body
        className={`${playfairDisplay.variable} container mx-auto text-white bg-black h-full `}
      >
        <Navbar />
        <>{children}</>
      </body>
    </html>
  );
}
