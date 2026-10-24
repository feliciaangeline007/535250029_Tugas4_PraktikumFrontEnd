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
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami | Profil Studio & Tim Pengembang",
  description:
    "Profil Nusantara Digital Studio, visi misi, serta tim pengembang di balik pembuatan website company profile modern ini.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-14 sm:gap-20 pb-20">
      {/* Header Halaman Tentang Kami */}
      <section className="bg-gradient-to-b from-blue-50/70 to-transparent dark:from-blue-950/20 pt-10 sm:pt-14 pb-8 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb navigasi menggunakan Next.js Link */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">Tentang Kami</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <Badge variant="primary">Profil Studio Kami</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Membangun Website yang Berguna &amp; Menyenangkan Digunakan
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Berdiri sejak tahun {companyProfile.establishedYear}, kami berfokus membantu bisnis rintisan dan UMKM memiliki identitas digital yang menarik, terpercaya, dan mudah dikelola tanpa kerumitan teknis.
            </p>
          </div>
        </div>
      </section>

      {/* Visi dan Misi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="p-6 sm:p-8 border-blue-200/70 dark:border-blue-900/40 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20">
            <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-5 shadow-sm">
              <Compass className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Visi Kami
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Menjadi studio pengembang web pilihan utama bagi bisnis lokal di Indonesia yang dikenal karena kejujuran proses, kerapian kode, dan pelayanan yang ramah serta solutif.
            </p>
          </Card>

          <Card className="p-6 sm:p-8 border-indigo-200/70 dark:border-indigo-900/40 bg-gradient-to-br from-white to-indigo-50/30 dark:from-gray-900 dark:to-indigo-950/20">
            <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-5 shadow-sm">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Misi Kami
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Menghadirkan website yang cepat dibuka dan nyaman diakses di smartphone pengguna.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Menyediakan harga layanan yang terjangkau dan transparan tanpa biaya tersembunyi.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Memberikan pendampingan teknis dan tutorial ramah bagi pemilik usaha pemula.</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Profil Mahasiswa & Latar Belakang Tugas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white dark:bg-gray-900/80 rounded-3xl border border-gray-200/80 dark:border-gray-800 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <Badge variant="outline">Cerita di Balik Proyek</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              Penerapan Konsep Pemrograman Front-End Modern
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Website profil perusahaan ini dikembangkan sebagai implementasi praktikum untuk mempraktikkan konsep <strong>Dynamic Routing</strong>, pembuatan <strong>Reusable Components</strong>, styling <strong>Active Link</strong>, dan tata letak <strong>Responsif</strong> menggunakan Next.js App Router.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Seluruh struktur komponen disusun secara modular di dalam direktori <code>src/components/</code> dan data konten dipisahkan ke <code>src/data/</code> agar mudah dipelihara dan dikembangkan lebih lanjut.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span>Aktif sejak {companyProfile.establishedYear}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-blue-500" />
                <span>{companyProfile.location}</span>
              </div>
            </div>
          </div>

          {/* Kartu Informasi Mahasiswa yang Estetik */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 dark:from-gray-900 dark:to-gray-950 border border-gray-200/90 dark:border-gray-800 shadow-sm space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-500/15">
                FA
              </div>
              <div>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 block">
                  Identitas Pengembang
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  {companyProfile.studentInfo.name}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100 dark:border-gray-800 text-xs">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase text-gray-400 font-semibold">NIM</span>
                <p className="font-mono font-bold text-gray-900 dark:text-white">{companyProfile.studentInfo.nim}</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase text-gray-400 font-semibold">Program Studi</span>
                <p className="font-medium text-gray-800 dark:text-gray-200">S1 Teknik Informatika</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase text-gray-400 font-semibold">Perguruan Tinggi</span>
                <p className="font-medium text-gray-800 dark:text-gray-200">{companyProfile.studentInfo.university}</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase text-gray-400 font-semibold">Mata Kuliah</span>
                <p className="font-medium text-gray-800 dark:text-gray-200">{companyProfile.studentInfo.class}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[11px] font-medium border border-blue-200/60 dark:border-blue-900/40">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>{companyProfile.studentInfo.assignment}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Tim Pengembang */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeader
          badge="Anggota Tim"
          title="Orang-Orang di Balik Layar"
          subtitle="Tim kecil kami saling melengkapi dalam merancang tampilan, menulis kode frontend, dan menguji kualitas website."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Box Aksi Menuju Kontak */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900 rounded-3xl p-8 sm:p-10 space-y-3">
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white">
            Tertarik Bekerja Sama atau Ingin Konsultasi?
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
            Kirimkan pesan melalui formulir kontak atau hubungi kami langsung via WhatsApp. Kami dengan senang hati akan membantu Anda.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="md">
              <span>Buka Halaman Kontak</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
