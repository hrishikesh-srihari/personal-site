import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const space_g = Space_Grotesk({ 
  weight: '400',
  subsets: ['latin', 'latin-ext']
});

const inter = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Rishi Srihari",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
