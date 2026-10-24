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

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Smartphone,
  Palette,
  CloudCog,
  BarChart3,
  ShieldCheck,
};

// SSG: Pre-generate all valid service slugs at build time
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Dynamic SEO Metadata based on the active service
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
    title: `${service.title} | Layanan Nusantara Tech`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.iconName] || Code2;
  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <div className="flex flex-col gap-14 sm:gap-20 pb-20">
      {/* Header & Dynamic Route Banner */}
      <section className="bg-gradient-to-b from-blue-50/70 to-transparent dark:from-blue-950/20 pt-10 sm:pt-14 pb-10 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation using Framework <Link> */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-6 flex-wrap" aria-label="Breadcrumb">
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
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2.5">
                <Badge variant="primary">{service.category}</Badge>
                <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
                  slug: [/{service.slug}]
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.shortDescription}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Button href="/contact" variant="primary" size="lg">
                <span>Konsultasikan Proyek Ini</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/services" variant="outline" size="md">
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Semua Layanan</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column: Full Description, Features, Deliverables, Process */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview Section */}
            <div className="bg-white dark:bg-gray-900/80 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-semibold text-sm">
                <IconComponent className="w-6 h-6" />
                <span>Gambaran Komprehensif Layanan</span>
              </div>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Key Features Section */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <span>Fitur &amp; Keunggulan Utama</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <PackageCheck className="w-5 h-5 text-indigo-600" />
                <span>Apa yang Klien Dapatkan (Deliverables)</span>
              </h2>
              <div className="space-y-2.5">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-gray-800 dark:text-gray-200 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Workflow Process */}
            <div className="space-y-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Alur Pengerjaan (Workflow)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.process.map((step) => (
                  <Card key={step.step} className="p-5 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold mb-3">
                        Langkah {step.step}
                      </div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pricing Estimate, Timeline, and Contact Box */}
          <div className="space-y-6">
            {/* Quick Summary Card */}
            <div className="bg-white dark:bg-gray-900/90 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm space-y-6">
              <h3 className="text-base font-bold text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800">
                Informasi Layanan
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Coins className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-gray-400">Estimasi Biaya</span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {service.priceEstimate || "Sesuai Kompleksitas"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-gray-400">Estimasi Waktu</span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {service.timeline || "Fleksibel"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-gray-400">Sistem Kerja</span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      Agile Sprint (2 Pekan)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md" className="w-full">
                  <span>Minta Penawaran Resmi</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Other Services Navigation List */}
            <div className="bg-white dark:bg-gray-900/90 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider text-xs">
                Layanan Terkait Lainnya
              </h3>
              <div className="space-y-2">
                {otherServices.slice(0, 4).map((other) => (
                  <Link
                    key={other.slug}
                    href={`/services/${other.slug}`}
                    className="flex items-center justify-between p-2.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <span className="line-clamp-1">{other.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
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
