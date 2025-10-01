import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/ConvexProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Buddy's DIY - Join the Waitlist",
  description: "After 4 years of teaching car flipping on YouTube, I'm creating tools and resources to help YOU succeed faster. Join the waitlist to be first to know.",
  keywords: ["car flipping", "DIY", "automotive", "youtube", "buddys diy"],
  authors: [{ name: "Buddy's DIY" }],
  openGraph: {
    title: "Buddy's DIY - Join the Waitlist",
    description: "Tools and resources from your favorite car flipping YouTuber",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
