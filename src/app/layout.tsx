import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { companyProfile } from "@/data/company";

export const metadata: Metadata = {
  title: {
    default: `${companyProfile.name} | Solusi Rekayasa Software & Cloud`,
    template: `%s | ${companyProfile.shortName}`,
  },
  description: companyProfile.description,
  keywords: [
    "Company Profile",
    "Next.js",
    "Dynamic Routing",
    "Frontend Development",
    "Universitas Tarumanagara",
    "Felicia Angeline",
  ],
  authors: [{ name: "Felicia Angeline", url: "https://github.com/feliciaangeline007" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased font-sans selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
