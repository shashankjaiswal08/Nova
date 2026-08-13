import "./globals.css";

export const metadata = {
  title: "NOVA — One workspace for modern teams",
  description: "Plan, organize, and execute in one intelligent workspace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
