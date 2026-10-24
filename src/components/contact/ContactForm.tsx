"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2 } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "web-development",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Pesan Terkirim!
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            Terima kasih, <strong>{formData.name}</strong>. Tim konsultasi kami akan merespons pesan Anda via email (<strong>{formData.email}</strong>) dalam kurun waktu 1x24 jam kerja.
          </p>
          <div className="pt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  service: "web-development",
                  message: "",
                });
              }}
            >
              Kirim Pesan Lainnya
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5"
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
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5"
            >
              Alamat Email Kerja
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@perusahaan.co.id"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5"
            >
              Layanan yang Dibutuhkan
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="web-development">Pengembangan Web Modern</option>
              <option value="mobile-apps">Aplikasi Mobile Multiplatform</option>
              <option value="ui-ux-design">Desain UI/UX &amp; Riset</option>
              <option value="cloud-infrastructure">Cloud Architecture &amp; DevOps</option>
              <option value="data-analytics">Data Analytics &amp; BI</option>
              <option value="cyber-security">Keamanan Siber &amp; IT Audit</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5"
            >
              Detail Kebutuhan / Pesan
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Ceritakan gambaran singkat kebutuhan proyek atau sistem yang ingin dibangun..."
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
            />
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full">
            <span>Kirim Pesan Konsultasi</span>
            <Send className="w-4 h-4 ml-1" />
          </Button>
        </form>
      )}
    </div>
  );
};
