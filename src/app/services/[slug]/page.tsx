import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  servicesData,
} from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  Code2,
  Smartphone,
  Palette,
  CloudCog,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  Coins,
  PackageCheck,
  Zap,
} from "lucide-react";

// Tipe props untuk halaman dynamic route
interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

// Map ikon berdasarkan nama string di data
const iconMap: Record<string, React.ElementType> = {
  Code2,
  Smartphone,
  Palette,
  CloudCog,
  BarChart3,
  ShieldCheck,
};

// Next.js Static Site Generation (SSG):
// Pre-render seluruh halaman detail layanan saat proses 'npm run build'
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate judul halaman dinamis untuk SEO
export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Layanan Tidak Ditemukan",
    };
  }

  return {
    title: `${service.title} | Nusantara Studio`,
    description: service.shortDescription,
  };
}

// Komponen Halaman Detail Layanan (Dynamic Route)
export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  // Ambil data layanan berdasarkan parameter slug pada URL
  const service = getServiceBySlug(params.slug);

  // Jika slug yang diakses tidak cocok dengan data layanan, arahkan ke halaman 404
  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.iconName] || Code2;
  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <div className="flex flex-col gap-12 sm:gap-16 pb-20">
      {/* Header Halaman Detail & Indikator Rute Dinamis */}
      <section className="bg-gradient-to-b from-blue-50/70 to-transparent dark:from-blue-950/20 pt-10 sm:pt-14 pb-8 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigasi Breadcrumb dengan komponen bawaan framework (<Link>) */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-5 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-600 transition-colors">
              Layanan
            </Link>
            <span>/</span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              {service.title}
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2.5">
                <Badge variant="primary">{service.category}</Badge>
                <span className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                  parameter slug: [{service.slug}]
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                {service.title}
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.shortDescription}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Button href="/contact" variant="primary" size="md">
                <span>Konsultasikan Layanan Ini</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/services" variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Katalog</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Konten Utama Detail Layanan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {/* Kolom Kiri: Penjelasan, Fitur, Deliverables, dan Alur Pengerjaan */}
          <div className="lg:col-span-2 space-y-10">
            {/* Box Deskripsi Lengkap */}
            <div className="bg-white dark:bg-gray-900/80 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 space-y-3 shadow-sm">
              <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 font-bold text-sm">
                <IconComponent className="w-5 h-5" />
                <span>Penjelasan Layanan</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Fitur & Fasilitas */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-600" />
                <span>Fitur &amp; Keunggulan Paket</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Apa yang Didapatkan Klien (Deliverables) */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <PackageCheck className="w-4 h-4 text-indigo-600" />
                <span>Apa Saja yang Anda Dapatkan?</span>
              </h2>
              <div className="space-y-2">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm"
                  >
                    <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tahapan Alur Kerja Layanan */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Alur Tahapan Pengerjaan
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.process.map((step) => (
                  <Card key={step.step} className="p-4 flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded mb-2">
                        Langkah {step.step}
                      </span>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Rincian Estimasi & Navigasi Layanan Terkait */}
          <div className="space-y-6">
            {/* Box Ringkasan Biaya & Waktu */}
            <div className="bg-white dark:bg-gray-900/90 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm space-y-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white pb-2.5 border-b border-gray-100 dark:border-gray-800">
                Ringkasan Paket
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Coins className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-gray-400">Estimasi Biaya</span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {service.priceEstimate || "Sesuai Diskusi"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-gray-400">Waktu Pengerjaan</span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {service.timeline || "Fleksibel"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-gray-400">Sistem Revisi</span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      Garansi Perbaikan &amp; Pendampingan
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <Button href="/contact" variant="primary" size="md" className="w-full text-xs">
                  <span>Hubungi Kami untuk Layanan Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>

            {/* Navigasi Layanan Terkait Menggunakan Komponen <Link> */}
            <div className="bg-white dark:bg-gray-900/90 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                Layanan Lainnya (Dynamic Route)
              </h3>
              <div className="space-y-1.5">
                {otherServices.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/services/${other.slug}`}
                    className="flex items-center justify-between p-2 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <span className="line-clamp-1">{other.title}</span>
                    <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
