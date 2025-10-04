import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "onyxbd - Style in Every Detail.",
  description: "If you wanna waste money, at least waste it on cool shit. 😎",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "onyxbd - Style in Every Detail.",
    description: "If you wanna waste money, at least waste it on cool shit. 😎",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
