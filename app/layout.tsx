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
  title: "Jamie Wells | Product Engineer",
  description:
    "I turn ideas into shipped products. Product engineer who builds SaaS from scratch. You bring the idea, I handle the rest.",
  keywords: [
    "product engineer",
    "SaaS development",
    "full-stack developer",
    "startup builder",
    "technical co-founder",
  ],
  authors: [{ name: "Jamie Wells" }],
  openGraph: {
    title: "Jamie Wells | Product Engineer",
    description:
      "I turn ideas into shipped products. Product engineer who builds SaaS from scratch.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamie Wells | Product Engineer",
    description:
      "I turn ideas into shipped products. Product engineer who builds SaaS from scratch.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
