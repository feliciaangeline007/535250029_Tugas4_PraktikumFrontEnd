"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2 } from "lucide-react";

// Komponen Reusable Form Kontak Interaktif
// Menangani state input pengguna dan pesan sukses pengiriman
export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "company-profile",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi pengiriman data form
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900/80 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm">
      {submitted ? (
        <div className="py-10 text-center space-y-3">
          <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Pesan Berhasil Dikirim!
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-sm mx-auto leading-relaxed">
            Terima kasih, <strong>{formData.name}</strong>. Pesan Anda sudah kami terima dan akan kami balas ke alamat email <strong>{formData.email}</strong>.
          </p>
          <div className="pt-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  service: "company-profile",
                  message: "",
                });
              }}
            >
              Kirim Pesan Lainnya
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-1"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Contoh: Felicia Angeline"
              className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-1"
            >
              Alamat Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@email.com"
              className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-1"
            >
              Layanan yang Diinginkan
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="landing-page">Pembuatan Landing Page Promosi</option>
              <option value="company-profile">Website Company Profile</option>
              <option value="toko-online">Toko Online Sederhana</option>
              <option value="ui-ux-design">Desain UI/UX &amp; Prototype Figma</option>
              <option value="web-custom">Pengembangan Web Kustom</option>
              <option value="maintenance-seo">Pemeliharaan Website &amp; SEO</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-1"
            >
              Pesan atau Rencana Website
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Ceritakan gambaran singkat website yang ingin dibuat atau pertanyaan Anda..."
              className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
            />
          </div>

          <Button type="submit" variant="primary" size="md" className="w-full">
            <span>Kirim Pesan</span>
            <Send className="w-3.5 h-3.5 ml-1" />
          </Button>
        </form>
      )}
    </div>
  );
};
