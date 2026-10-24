# Tugas Praktikum 4 - Pemrograman Front-End

Website Company Profile Modern dengan **Next.js (App Router)**, **Dynamic Routing**, **Reusable Components**, dan **Styling Aktif & Responsif**.

---

## Identitas Mahasiswa
- **Nama Mahasiswa** : Felicia Angeline
- **NIM**            : 535250029
- **Program Studi**  : S1 Teknik Informatika
- **Fakultas**       : Teknologi Informasi
- **Perguruan Tinggi**: Universitas Tarumanagara
- **Mata Kuliah**    : Praktikum Pemrograman Front-End
- **Tugas**          : Tugas Praktikum 4

---

## Pemenuhan Ketentuan Tugas

| No | Ketentuan Tugas | Implementasi dalam Proyek | Status |
|---|---|---|:---:|
| 1 | **Website beberapa halaman seperti company profile** | Terdapat halaman **Beranda (`/`)**, **Tentang Kami (`/about`)**, **Layanan (`/services`)**, **Detail Layanan (`/services/[slug]`)**, dan **Kontak (`/contact`)**. | Selesai |
| 2 | **Implementasikan dynamic routing** | Menggunakan rute dinamis Next.js App Router: `src/app/services/[slug]/page.tsx` dengan fungsi `generateStaticParams()` dan penanganan 404 dinamis via `notFound()`. | Selesai |
| 3 | **Membuat reusable components** | Dibuat beragam komponen pakai-ulang: `Navbar`, `Footer`, `Button`, `Card`, `Badge`, `SectionHeader`, `ServiceCard`, `TeamCard`, dan `ContactForm`. | Selesai |
| 4 | **Navigasi antar-halaman menggunakan komponen framework (`<Link>`)** | Seluruh tautan navigasi internal memanfaatkan `import Link from "next/link"` untuk transisi client-side yang cepat tanpa reload. | Selesai |
| 5 | **Active link styling pada komponen Navbar** | Komponen `Navbar` mendeteksi rute aktif melalui hook `usePathname()` dari `next/navigation` dan memberikan styling visual khusus (background badge, highlight warna biru, dan active pill indicator). | Selesai |
| 6 | **Halaman website responsif** | Menggunakan utilitas Tailwind CSS (`sm:`, `md:`, `lg:`) yang dioptimalkan untuk Mobile, Tablet, dan Desktop, dilengkapi menu drawer hamburger responsif pada mobile. | Selesai |
| 7 | **Struktur folder project rapi** | Penataan folder mengikuti standar industri arsitektur Next.js (App Router, components UI/layout/common, data terpusat, types TypeScript). | Selesai |

---

## Struktur Folder Project

```text
535250029_Tugas4_PraktikumFrontEnd/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout dengan Navbar & Footer global
│   │   ├── page.tsx                  # Halaman Beranda (Hero, Stats, Services, Testimoni)
│   │   ├── about/
│   │   │   └── page.tsx              # Halaman Profil Perusahaan, Visi-Misi, & Tim
│   │   ├── services/
│   │   │   ├── page.tsx              # Halaman Katalog Layanan
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # DYNAMIC ROUTE: Halaman Detail Layanan
│   │   ├── contact/
│   │   │   └── page.tsx              # Halaman Kontak & Form Konsultasi
│   │   ├── not-found.tsx             # Halaman 404 Kustom
│   │   └── globals.css               # Konfigurasi Tailwind CSS
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Navbar responsif + Active Link Styling
│   │   │   └── Footer.tsx            # Footer informatif + identitas mahasiswa
│   │   ├── ui/
│   │   │   ├── Button.tsx            # Reusable button (primary, secondary, outline, ghost)
│   │   │   ├── Card.tsx              # Reusable container card dengan hover effect
│   │   │   ├── Badge.tsx             # Reusable tag/badge status
│   │   │   └── SectionHeader.tsx     # Reusable section title & subtitle
│   │   ├── common/
│   │   │   ├── ServiceCard.tsx       # Reusable service showcase card
│   │   │   └── TeamCard.tsx          # Reusable team member card
│   │   └── contact/
│   │       └── ContactForm.tsx       # Reusable interactive contact form
│   ├── data/
│   │   ├── company.ts                # Profil perusahaan, stats, testimoni & nilai
│   │   ├── services.ts               # Data katalog layanan & helper dynamic slug
│   │   └── team.ts                   # Data tim & profil profesional
│   └── types/
│       └── index.ts                  # Type definitions TypeScript
├── public/                           # Aset statis & ikon
├── next.config.mjs                   # Konfigurasi Next.js (Image remote patterns)
├── tailwind.config.ts                # Konfigurasi styling Tailwind CSS
├── tsconfig.json                     # Konfigurasi TypeScript
└── package.json                      # Daftar dependencies & script project
```

---

## Cara Menjalankan Project

### 1. Prasyarat
- **Node.js** (versi 18+ direkomendasikan)
- **npm** atau **yarn**

### 2. Instalasi Dependencies
Buka terminal pada direktori proyek, lalu jalankan:
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Dev Server)
```bash
npm run dev
```
Buka browser dan akses alamat:
```
http://localhost:3000
```

### 4. Build untuk Lingkungan Produksi
Untuk menguji proses build dan verifikasi seluruh rute statis serta dinamis:
```bash
npm run build
npm run start
```

---

## Uji Coba Fitur Dynamic Routing

Anda dapat menguji rute dinamis dengan mengakses tautan-tautan berikut secara langsung di browser setelah menjalankan dev server:

1. `http://localhost:3000/services/web-development`
2. `http://localhost:3000/services/mobile-apps`
3. `http://localhost:3000/services/ui-ux-design`
4. `http://localhost:3000/services/cloud-infrastructure`
5. `http://localhost:3000/services/data-analytics`
6. `http://localhost:3000/services/cyber-security`

Jika mengakses slug yang tidak terdaftar (contoh: `/services/layanan-tidak-ada`), sistem akan otomatis mengarahkan ke halaman **404 Not Found**.

---

&copy; 2026 Felicia Angeline (535250029) - S1 Teknik Informatika Universitas Tarumanagara.
