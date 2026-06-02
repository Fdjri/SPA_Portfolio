import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fadjri's Portfolio | The New York Times Style",
  description: "A highly polished, responsive Single Page Application (SPA) portfolio with a classic vintage newspaper aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
