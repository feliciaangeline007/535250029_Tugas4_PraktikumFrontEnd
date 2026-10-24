import { CompanyStat, CompanyValue, NavItem, Testimonial } from "@/types";

// Informasi profil perusahaan / studio web
export const companyProfile = {
  name: "Nusantara Digital Studio",
  shortName: "Nusantara Studio",
  tagline: "Jasa Pembuatan Website & Aplikasi Modern untuk Bisnis Anda",
  description:
    "Nusantara Digital Studio adalah studio pengembang website dan desain antarmuka independen yang berbasis di Jakarta Barat. Kami membantu pelaku usaha, UMKM, dan kreator lokal membangun kehadiran digital yang profesional, responsif, dan mudah diakses melalui teknologi web modern.",
  establishedYear: 2022,
  location: "Jakarta Barat, DKI Jakarta",
  fullAddress: "Jl. Letjen S. Parman No. 1, Grogol Petamburan, Jakarta Barat 11440",
  email: "feliciaangeline007@gmail.com",
  phone: "+62 812-9876-5432",
  whatsapp: "+62 812-9876-5432",
  hours: "Senin - Sabtu, 09:00 - 18:00 WIB",
  studentInfo: {
    name: "Felicia Angeline",
    nim: "535250029",
    class: "Praktikum Pemrograman Front-End",
    university: "Universitas Tarumanagara",
    assignment: "Tugas Praktikum 4 - Dynamic Routing & Reusable Components",
  },
};

// Item navigasi menu utama
export const navigationItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Layanan", href: "/services" },
  { label: "Kontak", href: "/contact" },
];

// Data statistik ringkas perusahaan
export const companyStats: CompanyStat[] = [
  {
    value: "35+",
    label: "Website Selesai",
    description: "Proyek landing page, profil bisnis, dan katalog digital yang telah online.",
  },
  {
    value: "100%",
    label: "Responsif",
    description: "Semua website diuji pada layar ponsel Android, iPhone, tablet, dan PC.",
  },
  {
    value: "4",
    label: "Anggota Tim",
    description: "Kolaborasi antara developer frontend, desainer UI, dan backend.",
  },
  {
    value: "2+",
    label: "Tahun Berjalan",
    description: "Melayani pembuatan website untuk bisnis lokal di area Jabodetabek.",
  },
];

// Nilai-nilai dasar studio
export const companyValues: CompanyValue[] = [
  {
    title: "Transparan & Komunikatif",
    description:
      "Kami selalu menjelaskan proses kerja secara jujur, mendengarkan masukan klien, dan memberikan estimasi waktu yang masuk akal.",
    iconName: "ShieldCheck",
  },
  {
    title: "Tampilan Rapi & Responsif",
    description:
      "Setiap halaman dirancang agar nyaman dilihat dan mudah digunakan, baik lewat layar smartphone kecil maupun monitor komputer lebar.",
    iconName: "Award",
  },
  {
    title: "Kode Bersih & Mudah Dirawat",
    description:
      "Menggunakan komponen terstruktur (reusable components) dan teknologi modern seperti Next.js agar website cepat dan tidak ribet saat diperbarui.",
    iconName: "Users",
  },
  {
    title: "Dukungan Pasca Pengerjaan",
    description:
      "Kami tidak langsung pergi begitu website selesai. Tersedia garansi perbaikan dan bantuan teknis jika ada kendala saat digunakan.",
    iconName: "Lightbulb",
  },
];

// Data ulasan dari klien nyata / studi kasus lokal
export const testimonials: Testimonial[] = [
  {
    id: "1",
    clientName: "Hendra Gunawan",
    clientRole: "Pemilik Kedai",
    companyName: "Kopi Nusantara Roastery",
    content:
      "Website profil dan menu online yang dibuatkan sangat membantu pelanggan kami melihat katalog kopi lokal sebelum datang ke kedai. Tampilannya simpel, bersih, dan loading-nya cepat banget di HP.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "2",
    clientName: "Clarissa Wijaya",
    clientRole: "Owner",
    companyName: "Batik Canting Cantik",
    content:
      "Tim sangat komunikatif saat mendiskusikan konsep tampilan. Hasil landing page promosi bazar kami rapi dan tombol langsung ke WhatsApp membuat chat dari calon pembeli naik signifikan.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "3",
    clientName: "Bambang Setiawan",
    clientRole: "Pengelola Usaha",
    companyName: "Bengkel Prima Motor",
    content:
      "Sekarang bengkel kami punya profil resmi di internet. Pelanggan bisa cek lokasi dan daftar servis motor dengan gampang. Pengerjaannya tepat waktu sesuai jadwal.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
];
