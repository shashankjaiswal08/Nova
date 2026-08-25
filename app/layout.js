import "./globals.css";
import Cursor from "../components/landing/Cursor";

export const metadata = {
  title: "NOVA — One workspace for modern teams",
  description: "Plan, organize, and execute in one intelligent workspace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 overflow-x-hidden bg-[#080808] font-[Manrope,Arial,sans-serif] text-[#f2f0ec]">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
