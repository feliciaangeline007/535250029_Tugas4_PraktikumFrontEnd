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
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Award,
  Users,
  Lightbulb,
  Star,
} from "lucide-react";

const valueIcons: Record<string, React.ElementType> = {
  ShieldCheck,
  Award,
  Users,
  Lightbulb,
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 sm:gap-28 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 lg:pt-28 pb-16">
        {/* Background glow & mesh */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl" />
          <div className="w-[400px] h-[400px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl -translate-y-20 translate-x-28" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            {/* Student & Course Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Tugas Praktikum 4 Front-End</span>
              <span className="text-gray-400 dark:text-gray-600">•</span>
              <span className="font-semibold">{companyProfile.studentInfo.name} ({companyProfile.studentInfo.nim})</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.15]">
              Membangun Solusi Digital Masa Depan dengan{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Performa &amp; Kualitas Tinggi
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              {companyProfile.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Button href="/services" variant="primary" size="lg">
                <span>Jelajahi Layanan Kami</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/about" variant="outline" size="lg">
                <span>Tentang Perusahaan</span>
              </Button>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-6 flex flex-wrap justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Next.js App Router Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Dynamic Routing Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% Responsif &amp; Reusable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white dark:bg-gray-900/80 p-8 sm:p-10 rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-sm">
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

      {/* Featured Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeader
          badge="Layanan Profesional"
          title="Solusi Rekayasa Digital Terintegrasi"
          subtitle="Setiap layanan dirancang secara spesifik dengan metodologi modern dan pengujian ketat untuk hasil maksimal."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="outline" size="md">
            <span>Lihat Rincian Seluruh Layanan &amp; Dynamic Route</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Why Choose Us / Company Values */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/40 dark:to-gray-950 py-16 sm:py-24 border-y border-gray-200/70 dark:border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Nilai Perusahaan"
            title="Mengapa Memilih Nusantara Digital Solusindo?"
            subtitle="Kami mengutamakan kepuasan klien dan ketahanan sistem jangka panjang melalui empat pilar nilai utama."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((val, idx) => {
              const IconComp = valueIcons[val.iconName] || ShieldCheck;
              return (
                <Card key={idx} className="flex flex-col items-start p-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100/70 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {val.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeader
          badge="Testimoni Klien"
          title="Kepercayaan yang Dibangun Bersama Mitra"
          subtitle="Inilah pengalaman rekanan bisnis dan institusi yang telah bermitra dengan tim kami."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <Card key={item.id} className="flex flex-col justify-between p-6">
              <div className="space-y-4">
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-gray-100 dark:border-gray-800">
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

      {/* Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white p-8 sm:p-14 lg:p-16 shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <Badge variant="primary" className="bg-white/10 text-white border-white/20">
              Mulai Langkah Transformasi Anda
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Siap Mewujudkan Website &amp; Sistem Impian Anda?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Diskusikan ide dan kebutuhan platform digital Anda dengan tim ahli kami. Kami siap memberikan penawaran terbaik dan rancangan arsitektur yang solid.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <Button href="/contact" variant="secondary" size="lg" className="bg-white text-blue-700 hover:bg-blue-50 border-none shadow-lg">
                <span>Hubungi Kami Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/about" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white">
                <span>Pelajari Profil Tim</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
