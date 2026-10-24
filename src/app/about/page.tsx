import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { companyProfile } from "@/data/company";
import { teamData } from "@/data/team";
import { TeamCard } from "@/components/common/TeamCard";
import { Button } from "@/components/ui/Button";
import {
  Compass,
  Calendar,
  MapPin,
  ArrowRight,
  Code2,
  Layers,
  Sparkles,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami | Profil Studio & Pengembang",
  description:
    "Mengenal Nusantara Digital Studio, filosofi perancangan, dan tim pengembang di balik pembuatan website ini.",
};

const principles = [
  {
    number: "01",
    title: "Desain Berorientasi Pengguna",
    description:
      "Tampilan yang simpel, intuitif, dan tidak membingungkan pengunjung saat mencari informasi atau memesan produk.",
    icon: Smartphone,
  },
  {
    number: "02",
    title: "Komponen Modular & Rapi",
    description:
      "Menerapkan prinsip reusable components agar kode mudah dipelihara, konsisten, dan siap dikembangkan lebih lanjut.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Kecepatan & Performa",
    description:
      "Mengoptimalkan ukuran aset dan script sehingga website memuat dengan instan di jaringan seluler pengguna.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Kejujuran & Transparansi",
    description:
      "Menyajikan rincian biaya yang jelas, estimasi waktu yang realistis, dan pendampingan teknis yang ramah.",
    icon: ShieldCheck,
  },
];

const techStack = [
  { name: "Next.js", desc: "Framework React" },
  { name: "React 18", desc: "UI Library" },
  { name: "TypeScript", desc: "Type Safety" },
  { name: "Tailwind CSS", desc: "Modern Styling" },
  { name: "Lucide Icons", desc: "Icon System" },
  { name: "Figma", desc: "UI/UX Prototyping" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-20">
      {/* 1. Hero Section: Editorial & Clean */}
      <section className="relative pt-10 sm:pt-16 pb-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">Tentang Kami</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 text-xs font-semibold border border-blue-200/80 dark:border-blue-900">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cerita &amp; Filosofi Studio</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.15]">
              Membangun Kehadiran Digital yang{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Bermakna &amp; Fungsional
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {companyProfile.name} adalah studio pengembang website independen yang berfokus menghadirkan solusi web rapi, responsif, dan mudah diakses bagi pelaku usaha lokal, UMKM, dan kreator di Indonesia.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-blue-500" />
                Berdiri sejak {companyProfile.establishedYear}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-500" />
                {companyProfile.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Spotlight: Profil Pengembang / Mahasiswa */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 text-white p-7 sm:p-10 lg:p-12 border border-slate-800 shadow-xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-xl shadow-blue-500/20 ring-4 ring-white/10 shrink-0 bg-indigo-950">
                <Image
                  src="/avatars/felicia.svg"
                  alt="Felicia Angeline"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-semibold border border-blue-400/30">
                  <span>Founder &amp; Frontend Lead</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {companyProfile.studentInfo.name}
                </h2>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 font-mono">
                  <span>NIM: {companyProfile.studentInfo.nim}</span>
                  <span className="text-slate-500">&bull;</span>
                  <span className="font-sans text-slate-300">S1 Teknik Informatika</span>
                  <span className="text-slate-500">&bull;</span>
                  <span className="font-sans text-blue-300 font-medium">{companyProfile.studentInfo.university}</span>
                </div>
              </div>
            </div>

            <div className="max-w-md space-y-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                Website ini dikembangkan untuk memenuhi <strong>{companyProfile.studentInfo.assignment}</strong> pada mata kuliah <strong>{companyProfile.studentInfo.class}</strong>.
              </p>
              <p className="text-slate-400 text-xs">
                Menerapkan konsep Dynamic Routing pada katalog layanan, arsitektur Reusable Components, Active Link Navbar, dan layout yang sepenuhnya responsif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visi & Misi: Editorial Split Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Kolom Kiri: Visi (Quote Besar) */}
          <div className="lg:col-span-5 rounded-3xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 p-8 sm:p-10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Visi Kami
            </span>
            <blockquote className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-snug">
              &ldquo;Menjadi studio pengembang web yang dipercaya bisnis lokal berkat kerapian hasil koding, kejujuran proses, dan tampilan yang memikat.&rdquo;
            </blockquote>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed pt-2">
              Kami percaya setiap pelaku usaha—baik toko kelontong, kedai kopi, maupun agensi kreatif—berhak memiliki website yang cepat, estetik, dan mudah dikelola.
            </p>
          </div>

          {/* Kolom Kanan: 3 Pilar Misi */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Misi Kami
              </span>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mt-1">
                Tiga Langkah Nyata yang Selalu Kami Pegang
              </h3>
            </div>

            <div className="space-y-3">
              {[
                {
                  step: "01",
                  title: "Aksesibilitas & Tampilan Responsif",
                  desc: "Memastikan semua website yang dibangun tampil rapi dan nyaman dibuka di berbagai ukuran layar, terutama smartphone.",
                },
                {
                  step: "02",
                  title: "Efisiensi Biaya & Waktu Pengerjaan",
                  desc: "Menyediakan paket layanan dengan harga transparan, tanpa biaya tersembunyi, dan jadwal rilis yang ditepati.",
                },
                {
                  step: "03",
                  title: "Dukungan Teknis & Panduan Ramah",
                  desc: "Memberikan panduan operasional sederhana agar pemilik usaha dapat mengelola konten websitenya secara mandiri.",
                },
              ].map((misi, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm"
                >
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 text-sm sm:text-base shrink-0 pt-0.5">
                    {misi.step}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                      {misi.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {misi.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Prinsip Perancangan (Values) */}
      <section className="bg-slate-100/60 dark:bg-gray-900/40 py-16 sm:py-20 border-y border-gray-200/80 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Prinsip Kerja
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              Standar Kualitas Setiap Baris Kode
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              Empat nilai dasar yang kami terapkan dalam setiap tahap perancangan dan pemrograman antarmuka website.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-gray-700 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-gray-300 dark:text-gray-700">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Tech Stack Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Teknologi &amp; Tools
          </span>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Stack yang Digunakan pada Proyek Ini
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 text-center shadow-sm flex flex-col items-center justify-center space-y-1"
            >
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                {tech.name}
              </span>
              <span className="text-[10px] text-gray-400 font-medium">
                {tech.desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Anggota Tim Kami */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Tim Kami
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
              Kolaborator di Balik Studio
            </h2>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs">
            Sinergi antara desainer tampilan antarmuka dan pengembang kode frontend.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* 7. Call-to-Action Minimalis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left max-w-md">
            <h3 className="text-xl sm:text-2xl font-extrabold">
              Ada Rencana Pembuatan Website?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100">
              Konsultasikan konsep ide Anda secara gratis bersama tim kami.
            </p>
          </div>
          <Button href="/contact" variant="secondary" size="md" className="shrink-0 bg-white text-blue-700 hover:bg-blue-50 border-none shadow-md">
            <span>Buka Halaman Kontak</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
