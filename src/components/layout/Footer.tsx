import React from "react";
import Link from "next/link";
import { companyProfile, navigationItems } from "@/data/company";
import { servicesData } from "@/data/services";
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* Prominent Full-Width Student Identification Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/90 via-indigo-950/70 to-slate-900 border-2 border-blue-500/50 shadow-2xl shadow-blue-500/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 w-full lg:w-auto">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30 ring-4 ring-blue-500/20">
              <GraduationCap className="w-9 h-9" />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                PROYEK MAHASISWA PRAKTIKUM
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {companyProfile.studentInfo.name}
              </h2>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm">
                <span className="font-mono bg-blue-900/60 text-blue-200 px-2.5 py-0.5 rounded-md font-bold border border-blue-400/30">
                  NIM: {companyProfile.studentInfo.nim}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-200 font-semibold">
                  {companyProfile.studentInfo.university}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-end pt-4 lg:pt-0 border-t lg:border-t-0 border-gray-800">
            <div className="px-5 py-3 rounded-2xl bg-black/40 border border-blue-400/20 text-xs space-y-1 w-full sm:w-auto">
              <span className="block text-gray-400 font-bold uppercase text-[10px] tracking-wider">
                Mata Kuliah &amp; Tugas
              </span>
              <p className="font-bold text-white text-sm">
                {companyProfile.studentInfo.class}
              </p>
              <p className="text-blue-300 font-medium text-xs">
                {companyProfile.studentInfo.assignment}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 & 2: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/25">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                {companyProfile.name}
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {companyProfile.tagline}. Solusi rekayasa perangkat lunak berkelas dunia untuk mempercepat pertumbuhan bisnis Anda.
            </p>

            <div className="pt-2 space-y-2 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{companyProfile.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{companyProfile.phone} / WA: {companyProfile.whatsapp}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{companyProfile.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{companyProfile.hours}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigasi Cepat */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 group-hover:bg-blue-400 transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Layanan Unggulan */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Layanan Utama
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    <span className="line-clamp-1">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {companyProfile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-gray-400">
            Dibuat oleh <span className="text-blue-400 font-semibold">{companyProfile.studentInfo.name} ({companyProfile.studentInfo.nim})</span> — {companyProfile.studentInfo.university}
          </p>
        </div>
      </div>
    </footer>
  );
};
