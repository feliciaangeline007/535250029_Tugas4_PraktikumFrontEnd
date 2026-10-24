import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto shadow-inner">
          <Search className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-5xl font-extrabold text-blue-600 font-mono">404</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Maaf, halaman atau parameter rute yang Anda tuju tidak tersedia atau telah dipindahkan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button href="/" variant="primary" size="md">
            <Home className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Button>
          <Button href="/services" variant="outline" size="md">
            <ArrowLeft className="w-4 h-4" />
            <span>Daftar Layanan</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
