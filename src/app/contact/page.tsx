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
  title: "Kontak Kami | Konsultasi Pembuatan Website",
  description:
    "Hubungi tim Nusantara Digital Studio untuk bertanya seputar paket pembuatan website, penawaran harga, dan diskusi kebutuhan proyek Anda.",
};

// Daftar pertanyaan umum yang sering ditanyakan klien
const faqs = [
  {
    q: "Berapa lama waktu pengerjaan satu buah website?",
    a: "Untuk landing page satu halaman biasanya selesai dalam 3 sampai 7 hari kerja. Sedangkan untuk website profil perusahaan multi-halaman atau katalog produk, rata-rata membutuhkan waktu sekitar 1 sampai 2 minggu.",
  },
  {
    q: "Apakah saya bisa mengubah isi teks dan foto produk sendiri nantinya?",
    a: "Bisa. Kami akan memberikan file panduan dan susunan data yang rapi, sehingga Anda atau admin toko dapat dengan mudah mengganti teks, menambahkan produk baru, atau memperbarui nomor kontak.",
  },
  {
    q: "Bagaimana cara melakukan pemesanan website di studio ini?",
    a: "Anda cukup mengisi formulir di samping atau langsung chat kami via WhatsApp. Kami akan mendiskusikan konsep tampilan yang Anda inginkan, rincian biaya, dan estimasi waktu sebelum pengerjaan dimulai.",
  },
  {
    q: "Apakah website yang dibuat sudah pasti bisa dibuka di handphone?",
    a: "Pasti. Semua website yang kami bangun menggunakan Tailwind CSS yang diuji pada berbagai ukuran layar mulai dari ponsel, tablet, hingga laptop agar tetap nyaman dibaca.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-14 sm:gap-20 pb-20">
      {/* Header Halaman Kontak */}
      <section className="bg-gradient-to-b from-blue-50/70 to-transparent dark:from-blue-950/20 pt-10 sm:pt-14 pb-8 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">Kontak</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <Badge variant="primary">Hubungi Kami</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Konsultasikan Rencana Website Anda
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Punya ide, pertanyaan mengenai biaya, atau ingin meminta saran fitur website yang cocok untuk usaha Anda? Kirimkan pesan melalui formulir di bawah ini.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Kontak & Form Interaktif */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 items-start">
          {/* Kolom Kiri: Informasi Alamat & Kontak (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white dark:bg-gray-900/80 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 space-y-5 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white pb-2.5 border-b border-gray-100 dark:border-gray-800">
                Informasi Kontak
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase text-gray-400">
                      Alamat Studio
                    </span>
                    <p className="mt-0.5 font-medium text-gray-800 dark:text-gray-200">
                      {companyProfile.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase text-gray-400">
                      Email
                    </span>
                    <p className="mt-0.5 font-medium text-gray-800 dark:text-gray-200">
                      {companyProfile.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase text-gray-400">
                      WhatsApp / HP
                    </span>
                    <p className="mt-0.5 font-medium text-gray-800 dark:text-gray-200">
                      {companyProfile.whatsapp}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase text-gray-400">
                      Jam Pelayanan
                    </span>
                    <p className="mt-0.5 font-medium text-gray-800 dark:text-gray-200">
                      {companyProfile.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box Catatan Wilayah Layanan */}
            <Card className="p-5">
              <div className="flex items-center gap-2 mb-1.5 text-gray-900 dark:text-white font-bold text-xs">
                <Building className="w-4 h-4 text-blue-600" />
                <span>Pelayanan Online &amp; Offline</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Kami melayani pembuatan website untuk klien dari seluruh Indonesia secara daring (online), serta pertemuan langsung di area Jakarta Barat dan Tangerang.
              </p>
            </Card>
          </div>

          {/* Kolom Kanan: Komponen Form Kontak Reusable (3 cols) */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Pertanyaan yang Sering Diajukan (FAQ) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-2">FAQ</Badge>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1.5 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                {faq.a}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
