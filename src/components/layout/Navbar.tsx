"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems, companyProfile } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight, Sparkles, GraduationCap } from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for shadow & blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Banner: Prominent Student Project Header */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white py-2 px-4 shadow-sm border-b border-blue-400/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white font-extrabold text-[10px] uppercase tracking-wider border border-white/30 shadow-sm">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Project Mahasiswa</span>
            </span>
            <span className="font-extrabold text-white text-sm tracking-tight">
              Felicia Angeline
            </span>
            <span className="text-blue-300">•</span>
            <span className="font-mono bg-black/30 px-2 py-0.5 rounded-md text-blue-100 font-bold border border-white/10">
              NIM: 535250029
            </span>
            <span className="text-blue-300 hidden md:inline">•</span>
            <span className="text-blue-100 font-medium hidden md:inline">
              Universitas Tarumanagara
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[11px] text-blue-100 font-medium">
            <span className="bg-white/15 px-3 py-0.5 rounded-full border border-white/20 font-semibold">
              Tugas Praktikum 4 — Dynamic Routing &amp; Reusable Components
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md border-b border-gray-200/80 dark:border-gray-800"
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {companyProfile.shortName}
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase">
                Enterprise Tech
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

          {/* Right Action / CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="uppercase tracking-wider text-[11px] font-bold"
            >
              <span>Mulai Konsultasi</span>
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
            <div className="mt-3 text-center text-xs text-gray-400">
              {companyProfile.studentInfo.name} • {companyProfile.studentInfo.nim}
            </div>
          </div>
        </div>
      )}
      </div>
    </header>
  );
};
