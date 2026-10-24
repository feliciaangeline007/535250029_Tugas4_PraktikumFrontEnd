import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { companyProfile } from "@/data/company";
import { teamData } from "@/data/team";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamCard } from "@/components/common/TeamCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Target,
  Compass,
  CheckCircle2,
  Building2,
  Calendar,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami | Profil Perusahaan & Tim",
  description:
    "Pelajari visi, misi, dan tim berdedikasi di balik Nusantara Digital Solusindo yang berkomitmen menghadirkan solusi software berkelas.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-blue-50/70 to-transparent dark:from-blue-950/20 pt-12 sm:pt-16 pb-10 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb using <Link> */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">Tentang Kami</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <Badge variant="primary">Tentang Nusantara Tech</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Mewujudkan Standar Tertinggi dalam Rekayasa Software Modern
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Didirikan pada tahun {companyProfile.establishedYear}, kami berkembang dari studio teknologi inovatif menjadi mitra transformasi digital pilihan bagi berbagai lini industri.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 sm:p-10 border-blue-200/60 dark:border-blue-900/40 bg-gradient-to-br from-white to-blue-50/40 dark:from-gray-900 dark:to-blue-950/20">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Visi Kami
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Menjadi perusahaan rekayasa perangkat lunak dan arsitektur cloud terdepan di Asia Tenggara yang diakui atas inovasi berkelanjutan, keunggulan teknis, dan kontribusi nyata dalam percepatan ekonomi digital Indonesia.
            </p>
          </Card>

          <Card className="p-8 sm:p-10 border-indigo-200/60 dark:border-indigo-900/40 bg-gradient-to-br from-white to-indigo-50/40 dark:from-gray-900 dark:to-indigo-950/20">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-md shadow-indigo-500/20">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Misi Kami
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <span>Menghasilkan produk digital yang andal, aman, dan berorientasi pada kepuasan pengguna akhir.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <span>Mendorong efisiensi bisnis mitra melalui pemanfaatan teknologi cloud dan otomasi.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <span>Mengembangkan talenta talenta teknologi muda Indonesia agar berdaya saing global.</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Company Story & Academic Context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white dark:bg-gray-900/80 rounded-3xl border border-gray-200/80 dark:border-gray-800 p-8 sm:p-12 lg:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <Badge variant="outline">Perjalanan Kami</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              Dedikasi untuk Kualitas Kode dan Arsitektur Bersih
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Bermula dari semangat untuk memecahkan problem digital yang rumit dengan solusi sederhana dan terukur, {companyProfile.name} konsisten mengimplementasikan arsitektur kode modern (Clean Architecture, Reusable Component Pattern, dan Server-Side Optimization).
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Kami percaya bahwa website yang hebat tidak hanya tampak memukau di luar, melainkan memiliki fondasi sistem yang kokoh, responsif terhadap berbagai ukuran layar gawai, dan mudah dikembangkan di kemudian hari.
            </p>
            <div className="pt-2 flex items-center gap-6 text-sm font-semibold text-gray-700 dark:text-gray-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span>Berdiri sejak {companyProfile.establishedYear}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-500" />
                <span>{companyProfile.location}</span>
              </div>
            </div>
          </div>

          {/* Academic Profile Highlight */}
          <div className="bg-slate-50 dark:bg-gray-950 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-4">
            <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 font-semibold text-xs uppercase tracking-wider">
              <GraduationCap className="w-5 h-5" />
              <span>Praktikum Front-End Web Development</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Profil Pengembang &amp; Mahasiswa
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Website ini dikembangkan oleh <strong>{companyProfile.studentInfo.name}</strong> sebagai pemenuhan <strong>{companyProfile.studentInfo.assignment}</strong> pada program studi S1 Teknik Informatika, {companyProfile.studentInfo.university}.
            </p>
            <div className="space-y-1.5 text-xs font-mono bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300">
              <div>Nama Mahasiswa : {companyProfile.studentInfo.name}</div>
              <div>Nomor Induk Mhs : {companyProfile.studentInfo.nim}</div>
              <div>Perguruan Tinggi : {companyProfile.studentInfo.university}</div>
              <div>Mata Kuliah     : Pemrograman Front-End</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeader
          badge="Tim Profesional"
          title="Para Penggerak di Balik Inovasi Kami"
          subtitle="Kolaborasi erat antar-spesialis rekayasa perangkat lunak, perancang UI/UX, dan arsitek infrastruktur cloud."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900 rounded-3xl p-8 sm:p-12 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            Ingin Berdiskusi dengan Tim Kami?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Kami siap mendengar tantangan bisnis Anda dan merumuskan solusi teknologi yang tepat sasaran.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="md">
              <span>Jadwalkan Konsultasi Gratis</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
