# Laporan Tugas Praktikum 4 — Pemrograman Front-End

Proyek pembuatan website profil perusahaan (*company profile*) modern berbasis **Next.js (App Router)** yang menerapkan konsep **Dynamic Routing**, pembuatan **Reusable Components**, navigasi dengan komponen **`<Link>`**, styling **Active Link** pada Navbar, dan tata letak **Responsif**.

---

## Identitas Mahasiswa

- **Nama Lengkap** : Felicia Angeline
- **NIM**          : 535250029
- **Program Studi**: S1 Teknik Informatika
- **Fakultas**     : Teknologi Informasi
- **Universitas**  : Universitas Tarumanagara
- **Mata Kuliah**  : Praktikum Pemrograman Front-End
- **Tugas**        : Tugas Praktikum 4

---

## Ringkasan Proyek

Pada tugas praktikum ini, saya membuat website profil untuk **Nusantara Digital Studio**, yaitu sebuah studio kreatif dan jasa pembuatan website untuk bisnis lokal/UMKM. Website ini terdiri dari beberapa halaman utama:
1. **Beranda (`/`)**: Menampilkan hero banner dengan identitas mahasiswa, ringkasan statistik proyek, cuplikan katalog layanan, nilai-nilai studio, ulasan klien, dan ajakan aksi (CTA).
2. **Tentang Kami (`/about`)**: Memuat profil studio, visi misi, penjelasan konsep praktikum, serta kartu anggota tim pengembang.
3. **Katalog Layanan (`/services`)**: Menampilkan daftar seluruh paket layanan pembuatan website beserta alur tahapan pengerjaan (workflow).
4. **Detail Layanan Dinamis (`/services/[slug]`)**: Halaman detail yang menerapkan **Dynamic Routing Next.js**, menampilkan informasi spesifik, fitur, deliverables, dan estimasi biaya berdasarkan parameter URL `slug`.
5. **Kontak (`/contact`)**: Berisi alamat kantor, email, nomor WhatsApp, formulir pesan interaktif, dan daftar pertanyaan yang sering diajukan (FAQ).
6. **Halaman 404 Kustom (`/not-found`)**: Menangani rute URL atau slug yang tidak valid dengan tampilan ramah pengguna dan tombol navigasi kembali ke Beranda.

---

## Pembahasan Implementasi Ketentuan Tugas

### 1. Website dengan Beberapa Halaman (Company Profile)
Website disusun menggunakan arsitektur **Next.js App Router** di dalam folder `src/app/`:
- `src/app/page.tsx` untuk halaman Beranda
- `src/app/about/page.tsx` untuk halaman Tentang Kami
- `src/app/services/page.tsx` untuk halaman Katalog Layanan
- `src/app/contact/page.tsx` untuk halaman Kontak

Seluruh halaman dibungkus oleh `src/app/layout.tsx` sehingga komponen `Navbar` dan `Footer` tampil konsisten di semua halaman.

### 2. Implementasi Dynamic Routing
Dynamic routing diimplementasikan pada folder `src/app/services/[slug]/page.tsx`:
- Next.js menangkap parameter URL melalui props `params.slug`.
- Menggunakan fungsi helper `getServiceBySlug(params.slug)` dari `src/data/services.ts` untuk mengambil data layanan yang sesuai.
- Menyediakan fungsi `generateStaticParams()` untuk melakukan *Static Site Generation (SSG)* pada waktu build, sehingga halaman detail layanan dapat dimuat dengan sangat cepat.
- Jika pengguna memasukkan slug yang tidak terdaftar di URL (misal: `/services/paket-rahasia`), halaman akan otomatis memanggil fungsi `notFound()` bawaan Next.js untuk menampilkan halaman 404.

### 3. Pembuatan Reusable Components
Untuk menghindari duplikasi kode (*Don't Repeat Yourself*), saya membuat komponen-komponen terpisah di folder `src/components/`:
- **`Navbar.tsx`**: Komponen bilah navigasi atas lengkap dengan active link dan menu mobile.
- **`Footer.tsx`**: Komponen footer yang memuat banner identitas mahasiswa berukuran penuh, tautan cepat, dan informasi kontak.
- **`Button.tsx`**: Komponen tombol serbaguna dengan dukungan berbagai varian (`primary`, `secondary`, `outline`, `ghost`), ukuran (`sm`, `md`, `lg`), dan prop `href` opsional (otomatis me-render komponen `<Link>` Next.js jika diisi URL).
- **`Card.tsx`**: Kontainer kartu dengan efek bayangan dan hover yang konsisten.
- **`Badge.tsx`**: Label penanda status/kategori kecil.
- **`SectionHeader.tsx`**: Judul bagian halaman yang rapi dengan badge dan subjudul.
- **`ServiceCard.tsx`**: Kartu tampilan layanan yang berisi judul, ikon, ringkasan fitur, dan link dinamis.
- **`TeamCard.tsx`**: Kartu profil tim lengkap dengan foto dan tautan sosial.
- **`ContactForm.tsx`**: Komponen formulir kontak interaktif berbasis client (`"use client"`) dengan state pesan terkirim.

### 4. Navigasi Menggunakan Komponen Framework (`<Link>`)
Seluruh perpindahan halaman di dalam website menggunakan komponen `Link` dari modul `next/link`. Hal ini memungkinkan navigasi terjadi secara *client-side* tanpa melakukan refresh penuh pada browser, sehingga perpindahan antar-halaman terasa sangat cepat dan lancar.

### 5. Active Link Styling pada Komponen Navbar
Komponen `Navbar` dideklarasikan sebagai Client Component (`"use client"`) agar dapat menggunakan hook `usePathname()` dari `next/navigation`:
```tsx
const pathname = usePathname();

const isActiveLink = (href: string) => {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
};
```
Jika halaman yang sedang dibuka sama dengan nilai `href` menu, komponen akan otomatis menambahkan class styling aktif berupa:
- Teks warna biru tegas (`text-blue-600 font-semibold`)
- Latar belakang pill biru muda (`bg-blue-50`)
- Garis indikator aktif di bagian bawah menu

### 6. Desain Responsif
Tampilan website disesuaikan menggunakan utilitas breakpoint Tailwind CSS:
- **Mobile (`< 640px`)**: Menu navigasi disembunyikan dan digantikan tombol hamburger yang membuka drawer menu vertikal. Susunan kolom kartu otomatis menjadi 1 kolom.
- **Tablet (`sm:` dan `md:`)**: Tampilan grid otomatis menyesuaikan menjadi 2 kolom.
- **Desktop (`lg:` dan `xl:`)**: Navigasi desktop penuh tampil di bagian atas dan grid layanan/tim melebar menjadi 3 atau 4 kolom.

### 7. Susunan Struktur Folder Project yang Rapi
Struktur file project dirapikan mengikuti konvensi resmi Next.js:
```text
535250029_Tugas4_PraktikumFrontEnd/
├── src/
│   ├── app/                          # Direktori routing Next.js App Router
│   │   ├── layout.tsx                # Root layout (Navbar & Footer global)
│   │   ├── page.tsx                  # Halaman Beranda (Home)
│   │   ├── about/                    # Rute /about
│   │   │   └── page.tsx
│   │   ├── services/                 # Rute /services
│   │   │   ├── page.tsx              # Katalog Layanan
│   │   │   └── [slug]/               # Rute Dinamis /services/[slug]
│   │   │       └── page.tsx
│   │   ├── contact/                  # Rute /contact
│   │   │   └── page.tsx
│   │   ├── not-found.tsx             # Halaman 404 Not Found Kustom
│   │   └── globals.css               # File styling Tailwind CSS
│   ├── components/                   # Kumpulan Reusable Components
│   │   ├── layout/                   # Komponen tata letak (Navbar, Footer)
│   │   ├── ui/                       # Komponen dasar (Button, Card, Badge, SectionHeader)
│   │   ├── common/                   # Komponen domain (ServiceCard, TeamCard)
│   │   └── contact/                  # Komponen khusus form (ContactForm)
│   ├── data/                         # Data konten statis yang dipisahkan dari tampilan
│   │   ├── company.ts                # Profil perusahaan & identitas mahasiswa
│   │   ├── services.ts               # Data daftar layanan & helper getServiceBySlug
│   │   └── team.ts                   # Data profil tim pengembang
│   └── types/                        # Definisi tipe TypeScript
│       └── index.ts
├── public/                           # Asset publik statis
├── next.config.mjs                   # Konfigurasi Next.js
├── tailwind.config.ts                # Konfigurasi warna dan breakpoint Tailwind
├── tsconfig.json                     # Konfigurasi compiler TypeScript
└── package.json                      # Dependensi project (Next.js, React, Tailwind, Lucide)
```

---

## Cara Menjalankan Project di Komputer Lokal

1. **Buka Terminal / Command Prompt** dan masuk ke folder project:
   ```bash
   cd /Users/fabrianivan/.gemini/antigravity/scratch/535250029_Tugas4_PraktikumFrontEnd
   ```

2. **Pastikan Dependensi Terpasang**:
   ```bash
   npm install
   ```

3. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```

4. **Buka di Browser**:
   Buka peramban dan akses alamat:
   ```
   http://localhost:3000
   ```

5. **Menguji Build Produksi**:
   ```bash
   npm run build
   npm run start
   ```

---

## Daftar URL untuk Pengujian Dynamic Routing

Setelah development server aktif di `http://localhost:3000`, berikut adalah daftar rute dinamis yang dapat langsung diuji:

- [http://localhost:3000/services/landing-page](http://localhost:3000/services/landing-page) — Landing Page Promosi
- [http://localhost:3000/services/company-profile](http://localhost:3000/services/company-profile) — Website Company Profile
- [http://localhost:3000/services/toko-online](http://localhost:3000/services/toko-online) — Toko Online Sederhana
- [http://localhost:3000/services/ui-ux-design](http://localhost:3000/services/ui-ux-design) — Desain UI/UX & Prototype Figma
- [http://localhost:3000/services/web-custom](http://localhost:3000/services/web-custom) — Pengembangan Web Kustom
- [http://localhost:3000/services/maintenance-seo](http://localhost:3000/services/maintenance-seo) — Pemeliharaan & SEO
- [http://localhost:3000/services/halaman-tidak-ada](http://localhost:3000/services/halaman-tidak-ada) — Uji coba otomatis halaman 404

---

*Dibuat oleh Felicia Angeline (535250029) — Praktikum Pemrograman Front-End, Universitas Tarumanagara.*
