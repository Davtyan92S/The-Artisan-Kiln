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
      <body className="min-h-screen bg-cream text-ink p-0 md:h-screen md:overflow-hidden md:px-4 md:pb-4 md:pt-0 font-sans antialiased relative">
        <div className="absolute top-0 left-0 bottom-0 w-8 hidden lg:block overflow-hidden pointer-events-none">
          <LeftBorderLeaves />
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-8 hidden lg:block overflow-hidden pointer-events-none">
          <RightBorderLeaves />
        </div>
        
        <ReduxProvider>
          <div className="flex min-h-screen flex-col md:h-[calc(100vh-1rem)] md:min-h-0">
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
