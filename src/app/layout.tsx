import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/Provider";
import { LeftBorderLeaves, RightBorderLeaves } from "@/components/icons";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "The Artisan Kiln — Handcrafted Ceramic Tiles",
  description: "Custom order form for handcrafted ceramic tiles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable} h-full bg-cream`}>
      <body className="min-h-screen bg-cream text-ink p-0 md:h-screen md:overflow-hidden md:p-4 font-sans antialiased relative">
        {/* Botanical borders */}
        <div className="absolute top-0 left-0 bottom-0 w-8 hidden lg:block overflow-hidden pointer-events-none">
          <LeftBorderLeaves />
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-8 hidden lg:block overflow-hidden pointer-events-none">
          <RightBorderLeaves />
        </div>
        
        <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col overflow-hidden px-4 md:h-[calc(100vh-2rem)] md:min-h-0 md:px-6 lg:pl-8 lg:pr-14">
           <ReduxProvider>{children}</ReduxProvider>
        </div>
      </body>
    </html>
  );
}
