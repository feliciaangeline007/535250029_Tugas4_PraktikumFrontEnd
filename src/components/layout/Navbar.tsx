"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems, companyProfile } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export const Navbar: React.FC = () => {
  // Hook bawaan Next.js untuk membaca path URL saat ini
  const pathname = usePathname();
  // State untuk buka/tutup menu hamburger di layar ponsel
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State untuk efek background saat halaman di-scroll
  const [scrolled, setScrolled] = useState(false);

  // Efek scroll listener untuk mengubah background navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Otomatis menutup menu mobile setiap kali rute URL berpindah
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Logika Active Link Styling:
  // Cek apakah href menu cocok dengan pathname URL browser saat ini
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar: Minimalist & Aesthetic Student Indicator */}
      <div className="bg-slate-950 text-slate-300 text-[11px] py-1.5 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-slate-400">Tugas Praktikum 4 Front-End</span>
            <span className="text-slate-600">/</span>
            <span className="font-medium text-slate-200">Felicia Angeline</span>
            <span className="text-slate-400 font-mono text-[10px]">(535250029)</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-slate-400 text-[10px]">
            <span>Universitas Tarumanagara</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm border-b border-gray-200/80 dark:border-gray-800"
            : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-1.5"
              aria-label={`${companyProfile.name} - Beranda`}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {companyProfile.shortName}
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase">
                  Web &amp; Design Studio
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-2" aria-label="Navigasi Utama">
              {navigationItems.map((item) => {
                const active = isActiveLink(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50/90 dark:bg-blue-950/60 shadow-sm font-semibold"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/60"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action / CTA & Student Monogram */}
            <div className="hidden md:flex items-center gap-4">
              {/* Aesthetic Student Monogram Tag */}
              <div className="hidden lg:flex items-center gap-2 pl-3 py-1 pr-2 rounded-full bg-gray-50 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/80 text-xs">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                  FA
                </div>
                <div className="flex flex-col pr-1">
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-xs leading-none">
                    Felicia Angeline
                  </span>
                  <span className="font-mono text-[10px] text-gray-400 leading-none mt-0.5">
                    535250029
                  </span>
                </div>
              </div>

              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="text-xs font-semibold"
              >
                <span>Hubungi Kami</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigasi mobile"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-lg">
            {/* Student Tag inside Mobile Menu */}
            <div className="flex items-center gap-2.5 p-2.5 mb-2 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/80">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                FA
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs text-gray-900 dark:text-white leading-tight">
                  Felicia Angeline
                </span>
                <span className="font-mono text-[10px] text-gray-500 dark:text-gray-400">
                  NIM: 535250029 &bull; UNTAR
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              {navigationItems.map((item) => {
                const active = isActiveLink(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      active
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-950/70 dark:text-blue-300 font-semibold"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full"
              >
                <span>Hubungi Kami</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
