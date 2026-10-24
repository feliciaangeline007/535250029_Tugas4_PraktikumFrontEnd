import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { companyProfile } from "@/data/company";
import { ContactForm } from "@/components/contact/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  HelpCircle,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak Kami | Konsultasi Solusi Digital",
  description:
    "Hubungi tim Nusantara Digital Solusindo untuk diskusi proyek, penawaran harga, dan konsultasi kebutuhan teknologi Anda.",
};

const faqs = [
  {
    q: "Berapa lama rata-rata durasi pengerjaan suatu website atau aplikasi?",
    a: "Durasi sangat bergantung pada cakupan fitur dan kompleksitas sistem. Untuk website profil perusahaan biasanya berkisar 2-4 minggu, sedangkan aplikasi mobile atau portal enterprise dapat memakan waktu 6-12 minggu.",
  },
  {
    q: "Apakah disediakan garansi dan pemeliharaan setelah proyek selesai?",
    a: "Tentu. Setiap proyek kami sertai garansi perbaikan bug gratis selama 3-6 bulan pertama pasca peluncuran serta opsi kontrak pemeliharaan (SLA) berkelanjutan.",
  },
  {
    q: "Bagaimana tahapan awal sebelum memulai kerja sama proyek?",
    a: "Tahap awal dimulai dengan sesi discovery meeting gratis (online/offline) untuk membedah kebutuhan, dilanjutkan penyusunan proposal teknis, estimasi timeline, dan penawaran biaya yang transparan.",
  },
  {
    q: "Apakah kode sumber (source code) diserahkan sepenuhnya ke klien?",
    a: "Ya, seluruh hak cipta dan kepemilikan source code diserahkan 100% kepada klien setelah serah terima proyek selesai dilakukan.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-20">
      {/* Contact Header */}
      <section className="bg-gradient-to-b from-blue-50/70 to-transparent dark:from-blue-950/20 pt-12 sm:pt-16 pb-10 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">Kontak</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <Badge variant="primary">Hubungi Nusantara Tech</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Mari Diskusikan Ide Hebat Anda Bersama Kami
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Tim konsultan dan engineer kami siap memberikan saran arsitektur terbaik untuk mengakselerasi transformasi digital bisnis Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Details Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left Column: Contact Information (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-gray-900/80 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 space-y-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800">
                Informasi Kantor &amp; Layanan
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-gray-400 tracking-wider">
                      Alamat Kantor
                    </span>
                    <p className="mt-1 font-medium text-gray-800 dark:text-gray-200">
                      {companyProfile.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-gray-400 tracking-wider">
                      Email Resmi
                    </span>
                    <p className="mt-1 font-medium text-gray-800 dark:text-gray-200">
                      {companyProfile.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-gray-400 tracking-wider">
                      Telepon / WhatsApp
                    </span>
                    <p className="mt-1 font-medium text-gray-800 dark:text-gray-200">
                      {companyProfile.phone}
                    </p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                      WA: {companyProfile.whatsapp}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-gray-400 tracking-wider">
                      Jam Kerja
                    </span>
                    <p className="mt-1 font-medium text-gray-800 dark:text-gray-200">
                      {companyProfile.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Map / Location Card */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2 text-gray-900 dark:text-white font-bold text-sm">
                <Building className="w-4 h-4 text-blue-600" />
                <span>Area Layanan &amp; Domisili</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Berkantor pusat di {companyProfile.location}, kami melayani klien di seluruh wilayah Indonesia dan mancanegara secara remote maupun onsite.
              </p>
            </Card>
          </div>

          {/* Right Column: Reusable ContactForm Component (3 cols) */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-2">Pertanyaan Umum</Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="p-6">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-7">
                {faq.a}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
