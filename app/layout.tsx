import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Hasnain Jaffer | Full Stack Developer",
  description:
    "Final-year BSIT student and Full Stack Developer specializing in MERN Stack, React, and modern web technologies. Experienced in building scalable applications with Node.js, Express, MongoDB, and cloud deployment.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Node.js",
    "MongoDB",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Software Engineer",
  ],
  authors: [{ name: "Hasnain Jaffer" }],
  openGraph: {
    title: "Full Stack Developer | MERN Stack & React Specialist",
    description:
      "Final-year BSIT student and Full Stack Developer specializing in MERN Stack, React, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack Developer | MERN Stack & React Specialist",
    description:
      "Final-year BSIT student and Full Stack Developer specializing in MERN Stack, React, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jakarta.variable} ${inter.variable} font-body antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}