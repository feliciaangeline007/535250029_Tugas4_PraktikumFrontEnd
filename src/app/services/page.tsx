import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/common/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Zap,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Daftar Layanan | Katalog Jasa Pembuatan Website",
  description:
    "Katalog layanan pembuatan website, landing page, toko online, desain UI/UX, dan pemeliharaan website.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-14 sm:gap-20 pb-20">
      {/* Header Halaman Layanan */}
      <section className="bg-gradient-to-b from-blue-50/70 to-transparent dark:from-blue-950/20 pt-10 sm:pt-14 pb-8 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">Layanan</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <Badge variant="primary">Katalog Layanan Kami</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Pilihan Solusi Website Sesuai Kebutuhan Anda
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Mulai dari landing page promosi kilat hingga aplikasi web kustom. Setiap kartu layanan di bawah ini mengimplementasikan <strong>Dynamic Routing Next.js (<code className="font-mono text-blue-600 dark:text-blue-400">[slug]</code>)</strong> untuk membuka halaman rincian masing-masing.
            </p>
          </div>
        </div>
      </section>

      {/* Box Info Praktikum Dynamic Route */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-6 sm:-mt-10">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-blue-200 dark:border-blue-900/60 p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Penerapan Dynamic Routing
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                Klik tombol <strong>&ldquo;Detail Layanan&rdquo;</strong> pada salah satu kartu di bawah untuk melihat halaman detail yang di-render secara dinamis berdasarkan parameter URL.
              </p>
            </div>
          </div>
          <Badge variant="primary" className="shrink-0 font-mono text-[11px]">
            Route: /services/[slug]
          </Badge>
        </div>
      </section>

      {/* Grid Kartu Layanan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Tahapan Alur Kerja Pengerjaan */}
      <section className="bg-slate-100/60 dark:bg-gray-900/40 py-16 sm:py-20 border-y border-gray-200/80 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Alur Pengerjaan"
            title="Langkah Mudah Membuat Website Bersama Kami"
            subtitle="Kami membagi proses pembuatan website menjadi 4 langkah sederhana agar Anda selalu mengetahui perkembangan proyek."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Konsultasi & Kebutuhan",
                desc: "Membahas konsep website, referensi desain yang disukai, dan materi yang disiapkan.",
              },
              {
                step: "02",
                title: "Pembuatan Desain & Mockup",
                desc: "Menyusun sketsa tampilan antarmuka di Figma agar Anda bisa memberi masukan sebelum koding dimulai.",
              },
              {
                step: "03",
                title: "Pemrograman & Koding",
                desc: "Menerjemahkan desain menjadi website aktif menggunakan Next.js dan Tailwind CSS.",
              },
              {
                step: "04",
                title: "Uji Coba & Launching",
                desc: "Pengecekan tampilan di HP dan laptop, menghubungkan domain, lalu website siap diluncurkan.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-5 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-blue-200 dark:text-blue-900 block mb-2 font-mono">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Jadwal Terjadwal</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-2xl font-extrabold">
              Belum Menemukan Paket yang Tepat?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100">
              Jangan ragu untuk chat kami. Kami bisa menyesuaikan fitur dan biaya sesuai dengan anggaran usaha Anda.
            </p>
          </div>
          <Button href="/contact" variant="secondary" size="lg" className="shrink-0 bg-white text-blue-700 hover:bg-blue-50 border-none shadow-lg">
            <span>Tanyakan Kebutuhan Anda</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
