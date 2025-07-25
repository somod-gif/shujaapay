// Layout.tsx 
import type { Metadata } from "next";
// import { GeistSans, GeistMono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";



// Updated metadata for Kaihma
export const metadata: Metadata = {
  title: "Kaihma | Secure Payments for African Sellers",
  description: "Eliminate payment rejections and fraud with our escrow platform. Guaranteed payments before you ship.",
  keywords: ["escrow", "ecommerce Africa", "secure payments", "POD alternative", "seller protection"],
  openGraph: {
    title: "Kaihma - Stop Losing Money to Fake Buyers",
    description: "Secure escrow payments for African sellers and freelancers",
    url: "https://kaihma.com",
    siteName: "Kaihma",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 600,
        alt: "Kaihma Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaihma - Stop Losing Money to Fake Buyers",
    description: "Secure escrow payments for African sellers and freelancers",
    images: ["/images/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased bg-white text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <Navbar logo="/images/logo.jpg" />
          <main className="flex-1">
            {children}
          </main>
          <Footer logo="/images/logo.jpg" />
        </div>
      </body>
    </html>
  );
}
