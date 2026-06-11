import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'RAZNER - Your Premier Online Shopping Destination',
  description: 'Discover a diverse collection of quality products at RAZNER. Enjoy secure Cash on Delivery or Online Payment on Delivery options for a hassle-free shopping experience.',
  keywords: ["RAZNER, e-commerce, online shopping, products, cash on delivery, online payment, shopping website, electronics, fashion, home goods"],
  openGraph: {
    "title": "RAZNER - Shop Smarter, Live Better",
    "description": "Your ultimate destination for online shopping with flexible payment options and fast delivery. Explore RAZNER's curated product selection.",
    "url": "https://www.razner.com",
    "siteName": "RAZNER",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-vector/gradient-shopping-center-labels-template_23-2149336465.jpg",
        "alt": "RAZNER Logo"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "RAZNER - Shop Smarter, Live Better",
    "description": "Your ultimate destination for online shopping with flexible payment options and fast delivery. Explore RAZNER's curated product selection.",
    "images": [
      "http://img.b2bpic.net/free-vector/gradient-shopping-center-labels-template_23-2149336465.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
