import React from "react";
import { companyProfile, companyStats, companyValues, testimonials } from "@/data/company";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/common/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Users,
  Lightbulb,
  Star,
  GraduationCap,
} from "lucide-react";

// Pemetaan icon untuk nilai-nilai studio
const valueIcons: Record<string, React.ElementType> = {
  ShieldCheck,
  Award,
  Users,
  Lightbulb,
};

// Halaman Beranda / Home Page
export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 sm:pt-16 pb-12">
        {/* Background glow lembut */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <div className="w-[450px] h-[450px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            {/* Banner Identitas Mahasiswa di Bagian Atas Hero */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 px-5 py-2.5 rounded-2xl bg-white/95 dark:bg-gray-900/95 border-2 border-blue-500/40 shadow-xl shadow-blue-500/10 text-xs backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider text-[11px] bg-blue-50 dark:bg-blue-950/70 px-2.5 py-1 rounded-lg border border-blue-200 dark:border-blue-900">
                <GraduationCap className="w-4 h-4" />
                <span>Project Mahasiswa</span>
              </div>
              <span className="font-extrabold text-gray-900 dark:text-white text-sm sm:text-base tracking-tight">
                {companyProfile.studentInfo.name}
              </span>
              <span className="font-mono bg-blue-600 text-white px-2.5 py-0.5 rounded-md font-bold text-xs shadow-sm">
                NIM: {companyProfile.studentInfo.nim}
              </span>
              <span className="text-gray-400 hidden sm:inline">•</span>
              <span className="text-gray-700 dark:text-gray-200 font-semibold hidden sm:inline">
                {companyProfile.studentInfo.university}
              </span>
              <span className="px-2.5 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[11px] border border-emerald-200 dark:border-emerald-800 hidden md:inline">
                Tugas Praktikum 4
              </span>
            </div>

            {/* Judul Utama Hero */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.2]">
              Jasa Pembuatan Website &amp; Desain Web{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Modern &amp; Responsif
              </span>
            </h1>

            {/* Deskripsi Singkat */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              Membantu bisnis, UMKM, dan profil usaha Anda tampil profesional di internet dengan website yang cepat, rapi, dan mudah diakses dari smartphone maupun laptop.
            </p>

            {/* Tombol Aksi (Call-to-Action) */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2 w-full sm:w-auto">
              <Button href="/services" variant="primary" size="lg" className="w-full sm:w-auto">
                <span>Lihat Daftar Layanan</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/about" variant="outline" size="lg" className="w-full sm:w-auto">
                <span>Profil &amp; Visi Misi</span>
              </Button>
            </div>

            {/* Poin Keunggulan Teknis Mahasiswa */}
            <div className="pt-6 flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Next.js App Router</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Dynamic Routing [slug]</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Reusable Components</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Active Link &amp; Mobile Responsive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Statistik Ringkas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white dark:bg-gray-900/80 p-6 sm:p-10 rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-sm">
          {companyStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col text-center sm:text-left space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                {stat.label}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Bagian Katalog Layanan Unggulan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeader
          badge="Katalog Layanan"
          title="Layanan Pembuatan Website yang Kami Sediakan"
          subtitle="Pilih jenis website yang paling cocok untuk kebutuhan bisnis Anda. Klik kartu untuk melihat detail spesifikasi dan alur pengerjaan."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/services" variant="outline" size="md">
            <span>Buka Semua Halaman Layanan Dinamis</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Nilai dan Keunggulan Studio */}
      <section className="bg-slate-100/60 dark:bg-gray-900/40 py-16 sm:py-20 border-y border-gray-200/80 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Komitmen Kami"
            title="Kenapa Memilih Bekerja Sama dengan Kami?"
            subtitle="Kami mengedepankan kualitas kode yang rapi, kemudahan komunikasi, dan hasil tampilan yang responsif."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((val, idx) => {
              const IconComp = valueIcons[val.iconName] || ShieldCheck;
              return (
                <Card key={idx} className="flex flex-col items-start p-6">
                  <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {val.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ulasan Klien / Testimoni */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeader
          badge="Ulasan Klien"
          title="Apa Kata Mereka yang Sudah Menggunakan Jasa Kami?"
          subtitle="Tanggapan jujur dari pelaku usaha lokal dan UMKM yang telah kami bantu pembuatan websitenya."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <Card key={item.id} className="flex flex-col justify-between p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-5 mt-5 border-t border-gray-100 dark:border-gray-800">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 font-bold text-sm">
                  {item.clientName.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.clientRole}, {item.companyName}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action Akhir */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <Badge variant="primary" className="bg-white/20 text-white border-white/30">
              Konsultasi Proyek
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Punya Rencana Membuat Website untuk Usaha Anda?
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
              Diskusikan kebutuhan fitur dan referensi desain yang Anda sukai. Kami siap memberikan saran terbaik sesuai anggaran Anda.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 justify-center">
            <Button href="/contact" variant="secondary" size="lg" className="bg-white text-blue-700 hover:bg-blue-50 border-none shadow-lg">
              <span>Hubungi Kami via Form</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/about" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 hover:border-white">
              <span>Tentang Studio</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
