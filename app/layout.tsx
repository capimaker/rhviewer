import type { Metadata } from "next";
import {  Lato } from "next/font/google";
import "./globals.css";
import { ClerkProvider,} from '@clerk/nextjs'
import { Toaster } from "@/components/ui/sonner"

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});



export const metadata: Metadata = {
  title: "RViewer",
  description: "Virtual AI assistant to practice job interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${lato.className} antialiased`}>
         
        {children}
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  );
}
