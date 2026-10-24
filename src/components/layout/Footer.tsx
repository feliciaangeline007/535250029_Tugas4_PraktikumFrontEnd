import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyProfile, navigationItems } from "@/data/company";
import { servicesData } from "@/data/services";
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* Aesthetic Student Signature Card */}
        <div className="mb-14 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-left w-full sm:w-auto">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-md ring-1 ring-white/10 shrink-0 bg-indigo-950">
              <Image
                src="/avatars/felicia.svg"
                alt="Felicia Angeline"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-wider uppercase text-blue-400">
                Tugas Praktikum 4 — Pemrograman Front-End
              </p>
              <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                {companyProfile.studentInfo.name}
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                NIM: {companyProfile.studentInfo.nim} &bull; S1 Teknik Informatika &bull; {companyProfile.studentInfo.university}
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
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                {companyProfile.name}
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {companyProfile.tagline}. Solusi website responsif dan modern untuk perkembangan bisnis Anda.
            </p>

            <div className="pt-2 space-y-2 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{companyProfile.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>WhatsApp: {companyProfile.whatsapp}</span>
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
            Dibuat oleh <span className="text-slate-200 font-medium">{companyProfile.studentInfo.name} ({companyProfile.studentInfo.nim})</span> &bull; {companyProfile.studentInfo.university}
          </p>
        </div>
      </div>
    </footer>
  );
};
