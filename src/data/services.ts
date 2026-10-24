import { Service } from "@/types";

// Data katalog layanan studio web Nusantara Tech
// Dibuat untuk demonstrasi dynamic routing Next.js pada Tugas Praktikum 4
export const servicesData: Service[] = [
  {
    slug: "landing-page",
    title: "Pembuatan Landing Page Promosi",
    shortDescription:
      "Website satu halaman (one-page) yang fokus untuk promosi produk, event, atau jasa agar pengunjung tertarik menghubungi bisnis Anda.",
    fullDescription:
      "Layanan pembuatan landing page yang dirancang khusus untuk meningkatkan penjualan atau pendaftaran produk. Kami menyusun struktur visual yang rapi, copywriting yang jelas, dan tombol call-to-action yang mudah diakses di smartphone maupun laptop.",
    iconName: "Palette",
    category: "Website",
    priceEstimate: "Mulai dari Rp 1.500.000",
    timeline: "3 - 7 Hari Kerja",
    features: [
      "Desain modern dan responsif (ramah tampilan HP & laptop)",
      "Navigasi smooth scrolling ke setiap section halaman",
      "Integrasi tombol langsung ke WhatsApp bisnis",
      "Kecepatan loading cepat dengan Next.js",
      "Setup form pendaftaran atau pemesanan langsung",
    ],
    deliverables: [
      "File source code project lengkap",
      "Bantuan upload ke hosting / domain (Vercel atau Netlify)",
      "Garansi revisi minor 14 hari setelah selesai",
      "Panduan singkat cara mengganti teks dan foto",
    ],
    process: [
      {
        step: 1,
        title: "Diskusi & Pengumpulan Materi",
        description:
          "Mengumpulkan logo, foto produk, teks penjelasan, dan kontak yang ingin ditampilkan.",
      },
      {
        step: 2,
        title: "Pembuatan Desain Antarmuka",
        description:
          "Menyusun tata letak (layout) dan skema warna yang sesuai dengan tema bisnis Anda.",
      },
      {
        step: 3,
        title: "Koding & Integrasi",
        description:
          "Membuat halaman web menggunakan Next.js dan Tailwind CSS agar cepat dan responsif.",
      },
      {
        step: 4,
        title: "Uji Coba & Serah Terima",
        description:
          "Mengetes tampilan di berbagai ukuran layar dan menghubungkan ke domain utama.",
      },
    ],
  },
  {
    slug: "company-profile",
    title: "Website Profil Perusahaan (Company Profile)",
    shortDescription:
      "Website multi-halaman profesional untuk memperkenalkan profil perusahaan, visi misi, legalitas, dan layanan kepada calon klien.",
    fullDescription:
      "Solusi website profil perusahaan lengkap untuk meningkatkan kredibilitas bisnis Anda di mata klien dan partner. Terdiri dari beberapa halaman utama seperti Beranda, Tentang Kami, Galeri Layanan, dan Kontak dengan tata letak yang bersih dan terstruktur.",
    iconName: "Code2",
    category: "Website",
    priceEstimate: "Mulai dari Rp 3.000.000",
    timeline: "1 - 2 Minggu",
    features: [
      "Struktur multi-halaman rapi (Beranda, Profil, Layanan, Kontak)",
      "Navigasi antar-halaman mulus dengan Next.js Link",
      "Form kontak interaktif dengan pesan konfirmasi",
      "Optimasi SEO dasar agar mudah ditemukan di Google",
      "Desain adaptif untuk perangkat mobile, tablet, dan desktop",
    ],
    deliverables: [
      "Source code website terstruktur rapi",
      "Konfigurasi domain kustom (.com atau .co.id)",
      "Setup email bisnis (nama@perusahaan.com)",
      "Dukungan teknis pemeliharaan selama 1 bulan",
    ],
    process: [
      {
        step: 1,
        title: "Penyusunan Struktur Menu",
        description:
          "Menentukan halaman-halaman apa saja yang dibutuhkan dan alur navigasi website.",
      },
      {
        step: 2,
        title: "Desain Mockup",
        description:
          "Membuat rancangan tampilan halaman utama dan halaman pendukung.",
      },
      {
        step: 3,
        title: "Pemrograman Komponen",
        description:
          "Membangun reusable components (Navbar, Card, Footer) dan rute antar halaman.",
      },
      {
        step: 4,
        title: "Peluncuran Website",
        description:
          "Pengecekan akhir, pengujian link, dan publikasi website ke internet.",
      },
    ],
  },
  {
    slug: "toko-online",
    title: "Pembuatan Website Toko Online Sederhana",
    shortDescription:
      "Katalog produk digital interaktif lengkap dengan foto, deskripsi harga, dan pemesanan langsung lewat WhatsApp.",
    fullDescription:
      "Bagi pemilik usaha kuliner, fashion, atau retail yang ingin menampilkan produk dagangan secara rapi tanpa ribet. Dilengkapi fitur pencarian produk, filter kategori, dan tombol pesan otomatis yang menyertakan rincian produk ke WhatsApp admin.",
    iconName: "Smartphone",
    category: "E-Commerce",
    priceEstimate: "Mulai dari Rp 4.500.000",
    timeline: "2 - 3 Minggu",
    features: [
      "Katalog produk dinamis dengan foto detail dan harga",
      "Filter kategori produk dan fitur pencarian sederhana",
      "Tombol 'Pesan Sekarang' terhubung otomatis ke WhatsApp",
      "Desain mobile-friendly yang nyaman dibuka di smartphone pelanggan",
      "Halaman rincian produk dinamis (dynamic routing)",
    ],
    deliverables: [
      "Website toko online siap pakai",
      "Format data produk (JSON/CMS) yang mudah diupdate sendiri",
      "Setup integrasi WhatsApp Business",
      "Panduan video cara menambah produk baru",
    ],
    process: [
      {
        step: 1,
        title: "Pendataan Produk",
        description:
          "Mengumpulkan daftar foto produk, harga, varian, dan nomor WhatsApp pemesanan.",
      },
      {
        step: 2,
        title: "Penyusunan Komponen Katalog",
        description:
          "Membuat komponen kartu produk, pagination, dan halaman detail dinamis.",
      },
      {
        step: 3,
        title: "Pengujian Alur Checkout",
        description:
          "Memastikan pesan WhatsApp yang masuk berisi nama barang dan harga dengan tepat.",
      },
      {
        step: 4,
        title: "Serah Terima & Training",
        description:
          "Melatih admin toko cara memperbarui daftar barang dagangan.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "Jasa Desain UI/UX & Prototyping Figma",
    shortDescription:
      "Perancangan antarmuka aplikasi web dan mobile di Figma yang menarik, mudah dipahami pengguna, dan siap dikoding.",
    fullDescription:
      "Sebelum mulai menulis kode, rancang tampilan website atau aplikasi Anda terlebih dahulu. Kami membantu membuat wireframe, skema warna, tipografi, serta prototipe interaktif yang bisa diklik langsung di Figma untuk memvalidasi ide Anda ke pengguna.",
    iconName: "Palette",
    category: "Design",
    priceEstimate: "Mulai dari Rp 2.000.000",
    timeline: "1 - 2 Minggu",
    features: [
      "Riset tampilan referensi dan analisis alur pengguna",
      "Wireframe hitam-putih untuk menentukan susunan elemen",
      "Desain visual penuh (High Fidelity) dengan Figma",
      "Prototype yang dapat diklik dan disimulasikan alurnya",
      "Design system mini (variabel warna, font, dan tombol)",
    ],
    deliverables: [
      "File master Figma (.fig) lengkap dengan komponen",
      "Aset gambar format SVG dan PNG berkualitas tinggi",
      "Tautan prototipe interaktif untuk presentasi",
      "Dokumentasi panduan untuk programmer (Hand-off)",
    ],
    process: [
      {
        step: 1,
        title: "Briefing Konsep",
        description:
          "Membahas target pengguna, fitur utama, dan inspirasi desain yang diinginkan.",
      },
      {
        step: 2,
        title: "Pembuatan Wireframe",
        description:
          "Merancang sketsa dasar tata letak informasi sebelum masuk ke tahap visual.",
      },
      {
        step: 3,
        title: "Visual Design & Prototyping",
        description:
          "Mewarnai desain, memilih ikon yang pas, dan menyambungkan alur klik antar layar.",
      },
      {
        step: 4,
        title: "Review & Revisi",
        description:
          "Memperbaiki feedback dari klien hingga desain benar-benar siap dikembangkan.",
      },
    ],
  },
  {
    slug: "web-custom",
    title: "Pengembangan Aplikasi Web Kustom",
    shortDescription:
      "Pembuatan dashboard admin, sistem absensi, kasir sederhana (POS), atau portal internal sesuai alur kerja bisnis Anda.",
    fullDescription:
      "Jika website template tidak cukup memenuhi kebutuhan alur operasional Anda, kami membuatkan aplikasi web berbasis React, Next.js, dan database terintegrasi. Mempermudah pencatatan transaksi, rekap laporan, dan manajemen hak akses pengguna.",
    iconName: "CloudCog",
    category: "Development",
    priceEstimate: "Mulai dari Rp 6.000.000",
    timeline: "3 - 5 Minggu",
    features: [
      "Sistem login dan manajemen akun pengguna",
      "Halaman dashboard dengan ringkasan data tabel dan grafik",
      "Fitur CRUD (Tambah, Edit, Hapus, dan Lihat Data)",
      "Ekspor laporan ke file Excel atau PDF",
      "Koneksi aman ke database (PostgreSQL / MySQL / Supabase)",
    ],
    deliverables: [
      "Full source code aplikasi web kustom",
      "Setup database dan server cloud (Vercel / Railway / Supabase)",
      "Dokumentasi API dan kamus basis data",
      "Garansi pemeliharaan bug selama 2 bulan",
    ],
    process: [
      {
        step: 1,
        title: "Pemetaan Alur Data",
        description:
          "Menentukan tabel data, relasi, dan form input apa saja yang diperlukan.",
      },
      {
        step: 2,
        title: "Desain Database & API",
        description:
          "Menyiapkan struktur database yang aman dan endpoint rute data.",
      },
      {
        step: 3,
        title: "Frontend & Backend Integration",
        description:
          "Menghubungkan form input di antarmuka web dengan penyimpanan database.",
      },
      {
        step: 4,
        title: "User Testing & Rilis",
        description:
          "Menguji alur kerja bersama pengguna akhir sebelum dipakai operasional resmi.",
      },
    ],
  },
  {
    slug: "maintenance-seo",
    title: "Pemeliharaan Website & Optimasi SEO",
    shortDescription:
      "Jasa perawatan rutin, pembaruan konten, backup berkala, dan peningkatan skor kecepatan website Anda.",
    fullDescription:
      "Website Anda lambat atau sering error? Kami membantu merapikan kode, memperbarui versi library, mengompres ukuran gambar, serta menyusun meta tag SEO agar website tampil prima dan tidak tertinggal oleh kompetitor.",
    iconName: "ShieldCheck",
    category: "Support",
    priceEstimate: "Mulai dari Rp 750.000 / bulan",
    timeline: "Berkala (Bulanan)",
    features: [
      "Pemeriksaan kesehatan website dan pembaruan dependensi",
      "Optimasi gambar dan script agar loading lebih cepat",
      "Penyusunan Open Graph & Meta Tag untuk sharing ke media sosial",
      "Backup database dan source code rutin setiap minggu",
      "Laporan perkembangan performa website setiap bulan",
    ],
    deliverables: [
      "Website tetap aktif dan terhindar dari downtime tak terduga",
      "Laporan audit skor Google PageSpeed Insights",
      "File backup berkala yang tersimpan aman di cloud",
      "Bantuan konsultasi teknis via WhatsApp",
    ],
    process: [
      {
        step: 1,
        title: "Audit Awal",
        description:
          "Mengecek kecepatan saat ini, link yang rusak, dan celah keamanan dasar.",
      },
      {
        step: 2,
        title: "Pembersihan & Optimasi",
        description:
          "Menghapus aset yang tidak dipakai dan mengompresi gambar berukuran besar.",
      },
      {
        step: 3,
        title: "Setup Backup Otomatis",
        description:
          "Mengaktifkan mekanisme pencadangan data secara terjadwal.",
      },
      {
        step: 4,
        title: "Monitoring Berkelanjutan",
        description:
          "Memantau kinerja web agar selalu cepat dibuka oleh pengunjung.",
      },
    ],
  },
];

// Helper function untuk mengambil detail layanan berdasarkan parameter URL slug
export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug);
}

// Helper function untuk generate static paths pada rute dinamis Next.js
export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}
