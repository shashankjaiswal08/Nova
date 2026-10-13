import "./globals.css";
import { DM_Mono, Manrope } from "next/font/google";
import Cursor from "../components/landing/Cursor";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-mono",
  display: "swap",
  preload: false,
  fallback: ["monospace"],
});

export const metadata = {
  title: "NOVA — One workspace for modern teams",
  description: "Plan, organize, and execute in one intelligent workspace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmMono.variable}`}>
      <body className="m-0 overflow-x-hidden bg-(--bg) font-manrope text-(--text)">
        <Cursor />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
