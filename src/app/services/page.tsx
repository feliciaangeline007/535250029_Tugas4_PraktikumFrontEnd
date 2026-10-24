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
  title: "Layanan Kami | Katalog Solusi Digital",
  description:
    "Jelajahi portofolio layanan lengkap mulai dari Web Development, Mobile Apps, UI/UX Design, Cloud Infrastructure, hingga Cyber Security.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-20">
      {/* Services Header */}
      <section className="bg-gradient-to-b from-blue-50/70 to-transparent dark:from-blue-950/20 pt-12 sm:pt-16 pb-10 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">Layanan</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <Badge variant="primary">Katalog Layanan Enterprise</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Solusi Terukur untuk Setiap Tahap Pertumbuhan Bisnis
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Pilih dari rangkaian layanan rekayasa digital kami. Setiap kartu layanan di bawah ini terhubung ke halaman detail dinamis dengan mekanisme <strong>Next.js Dynamic Routing (<code className="text-blue-600 dark:text-blue-400 font-mono">[slug]</code>)</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Route Notice Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-8 sm:-mt-12">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-blue-200 dark:border-blue-900/60 p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Fitur Dynamic Routing
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                Klik kartu atau tombol &ldquo;Pelajari Selengkapnya&rdquo; pada masing-masing layanan untuk melihat implementasi dynamic routing via Next.js App Router.
              </p>
            </div>
          </div>
          <Badge variant="primary" className="shrink-0 font-mono text-[11px]">
            Route: /services/[slug]
          </Badge>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16 sm:py-20 border-y border-gray-200/80 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Metodologi Kerja"
            title="Bagaimana Kami Mengeksekusi Setiap Proyek"
            subtitle="Pendekatan sistematis dan transparan dari tahap konsep awal hingga rilis produksi."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                desc: "Memahami model bisnis, target audiens, dan tantangan teknis Anda secara mendalam.",
              },
              {
                step: "02",
                title: "UI/UX & Architecture",
                desc: "Merancang wireframe, design system, dan blueprint arsitektur sistem yang modular.",
              },
              {
                step: "03",
                title: "Agile Development",
                desc: "Siklus sprint berkala dengan testing berkala untuk memastikan kualitas tinggi tanpa regresi.",
              },
              {
                step: "04",
                title: "QA, Deploy & Scale",
                desc: "Pengujian keamanan, performa beban, rilis live, dan dukungan pemeliharaan jangka panjang.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-extrabold text-blue-100 dark:text-blue-950 block mb-2 font-mono">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>SOP Terstandarisasi</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Butuh Solusi Kustom yang Disesuaikan?
            </h3>
            <p className="text-sm sm:text-base text-blue-100">
              Tim engineering kami siap membuat arsitektur spesifik untuk kebutuhan unik perusahaan Anda.
            </p>
          </div>
          <Button href="/contact" variant="secondary" size="lg" className="shrink-0">
            <span>Konsultasi Kebutuhan Anda</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
