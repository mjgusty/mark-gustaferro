import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const name = 'Mark Gustaferro'

export const metadata: Metadata = {
  title: "Mark Gustaferro's Personal Website",
  description: "Created by Mark Gustaferro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
