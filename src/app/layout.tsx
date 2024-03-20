import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Auth Starter",
  description: "Next.js starter template with authentication and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className={`min-h-screen flex flex-col ${inter.className}`}>
          <NavBar />
          <main className="flex-grow bg-slate-50">{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
