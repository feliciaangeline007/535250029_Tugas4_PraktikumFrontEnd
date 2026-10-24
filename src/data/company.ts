import { CompanyStat, CompanyValue, NavItem, Testimonial } from "@/types";

export const companyProfile = {
  name: "Nusantara Digital Solusindo",
  shortName: "Nusantara Tech",
  tagline: "Inovasi Digital Terdepan untuk Masa Depan Bisnis Indonesia",
  description:
    "Nusantara Digital Solusindo adalah perusahaan teknologi informasi dan digital agency terkemuka di Indonesia yang berdedikasi membantu perusahaan skala enterprise hingga UMKM berkembang pesat melalui transformasi digital, rekayasa perangkat lunak modern, dan arsitektur cloud handal.",
  establishedYear: 2020,
  location: "Jakarta Barat, DKI Jakarta, Indonesia",
  fullAddress: "Jl. Letjen S. Parman No. 1, Grogol Petamburan, Jakarta Barat 11440",
  email: "contact@nusantaradigital.id",
  phone: "+62 (21) 5678-9900",
  whatsapp: "+62 812-3456-7890",
  hours: "Senin - Jumat, 08:30 - 17:30 WIB",
  studentInfo: {
    name: "Felicia Angeline",
    nim: "535250029",
    class: "Praktikum Pemrograman Front-End",
    university: "Universitas Tarumanagara",
    assignment: "Tugas Praktikum 4 - Dynamic Routing & Reusable Components",
  },
};

export const navigationItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Layanan", href: "/services" },
  { label: "Kontak", href: "/contact" },
];

export const companyStats: CompanyStat[] = [
  {
    value: "120+",
    label: "Proyek Selesai",
    description: "Website, aplikasi mobile, dan sistem enterprise sukses diluncurkan.",
  },
  {
    value: "99.8%",
    label: "Tingkat Kepuasan",
    description: "Klien merasa puas dengan deliverables dan dedikasi tim kami.",
  },
  {
    value: "45+",
    label: "Talenta Digital",
    description: "Software engineer, UI/UX designer, dan cloud architect berpengalaman.",
  },
  {
    value: "5+",
    label: "Tahun Eksistensi",
    description: "Melayani transformasi digital industri perbankan, retail, dan edukasi.",
  },
];

export const companyValues: CompanyValue[] = [
  {
    title: "Integritas & Transparansi",
    description:
      "Kami menjunjung tinggi kejujuran dalam komunikasi, estimasi anggaran proyek, dan penanganan data klien secara amanah.",
    iconName: "ShieldCheck",
  },
  {
    title: "Kualitas Tanpa Kompromi",
    description:
      "Menerapkan standar clean code, pengujian menyeluruh (QA), dan arsitektur modular yang siap berskala global.",
    iconName: "Award",
  },
  {
    title: "Kolaborasi Adaptif",
    description:
      "Bekerja berdampingan dengan klien sebagai mitra strategis, cepat beradaptasi terhadap perubahan tren industri.",
    iconName: "Users",
  },
  {
    title: "Inovasi Berkelanjutan",
    description:
      "Selalu memperbarui stack teknologi untuk memberikan solusi paling efektif dan efisien bagi pertumbuhan bisnis.",
    iconName: "Lightbulb",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    clientName: "Budi Santoso",
    clientRole: "Chief Technology Officer",
    companyName: "PT Finansial Unggul Makmur",
    content:
      "Nusantara Tech berhasil merancang ulang arsitektur perbankan digital kami. Kecepatan loading aplikasi meningkat hingga 3x lipat, dan tim developer mereka sangat komunikatif serta profesional.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "2",
    clientName: "Siti Rahmawati",
    clientRole: "Head of Marketing",
    companyName: "Kopi Nusantara Retail Group",
    content:
      "Sistem pemesanan omni-channel dan website interaktif yang dibangun tim ini membawa lonjakan transaksi hingga 150% dalam 3 bulan pertama. UI/UX-nya sangat memanjakan pelanggan kami!",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "3",
    clientName: "David Kurniawan",
    clientRole: "Managing Director",
    companyName: "Logistik Prima Express",
    content:
      "Implementasi cloud auto-scaling dan containerization dari Nusantara Tech sukses menyelamatkan kami saat peak season Flash Sale dengan downtime 0%. Sangat direkomendasikan!",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
];
