import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danish Shamshee - MERN Developer",
  description: "Professional MERN Stack Developer Portfolio - Danish Shamshee. Expert in MongoDB, Express.js, React.js, and Node.js development.",
  keywords: ["MERN Developer", "Full Stack Developer", "React Developer", "Node.js Developer", "MongoDB", "Express.js"],
  authors: [{ name: "Danish Shamshee" }],
  openGraph: {
    title: "Danish Shamshee - MERN Developer",
    description: "Professional MERN Stack Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased animated-bg`}
      >
        {children}
      </body>
    </html>
  );
}
