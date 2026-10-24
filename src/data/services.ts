import { Service } from "@/types";

export const servicesData: Service[] = [
  {
    slug: "web-development",
    title: "Pengembangan Web Modern",
    shortDescription:
      "Membangun website enterprise, web app interaktif, dan portal bisnis dengan arsitektur performa tinggi serta SEO-friendly.",
    fullDescription:
      "Kami merancang dan mengembangkan website modern dengan memanfaatkan teknologi mutakhir seperti Next.js, React, Node.js, dan Tailwind CSS. Kami menjamin kecepatan rendering optimal, keamanan kelas enterprise, serta skalabilitas sistem yang siap berkembang bersama bisnis Anda.",
    iconName: "Code2",
    category: "Development",
    priceEstimate: "Mulai dari Rp 15.000.000",
    timeline: "3 - 6 Minggu",
    features: [
      "Arsitektur Jamstack & Server-Side Rendering (SSR)",
      "Desain Responsif untuk Mobile, Tablet & Desktop",
      "Optimasi Core Web Vitals & SEO On-Page",
      "Integrasi CMS Headless & Restful API / GraphQL",
      "Sistem Keamanan SSL, Proteksi CSRF & Sanitasi Data",
    ],
    deliverables: [
      "Full Source Code & Dokumentasi Teknis",
      "Setup Hosting & CI/CD Pipeline Otomatis",
      "Garansi Bug-Free & Dukungan Pemeliharaan 3 Bulan",
      "Pelatihan Pengelolaan Konten untuk Tim Internal",
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Blueprint",
        description:
          "Menganalisis kebutuhan bisnis, persona pengguna, dan menyusun arsitektur sistem yang tepat.",
      },
      {
        step: 2,
        title: "Prototyping & UI/UX",
        description:
          "Merancang wireframe dan visual interface interaktif sesuai identitas brand.",
      },
      {
        step: 3,
        title: "Full-Stack Development",
        description:
          "Implementasi kode modular, reusable components, dan integrasi backend API.",
      },
      {
        step: 4,
        title: "QA & Deployment",
        description:
          "Pengujian performa, kompatibilitas browser, dan deployment ke cloud environment.",
      },
    ],
  },
  {
    slug: "mobile-apps",
    title: "Aplikasi Mobile Multiplatform",
    shortDescription:
      "Pengembangan aplikasi iOS dan Android performa tinggi dengan pengalaman pengguna yang mulus dan responsif.",
    fullDescription:
      "Solusi aplikasi seluler end-to-end yang menjembatani bisnis Anda dengan pelanggan di mana pun berada. Dibangun menggunakan React Native dan Flutter untuk efisiensi biaya tanpa mengorbankan performa native.",
    iconName: "Smartphone",
    category: "Development",
    priceEstimate: "Mulai dari Rp 25.000.000",
    timeline: "6 - 10 Minggu",
    features: [
      "Dukungan Cross-Platform iOS dan Android dalam 1 Codebase",
      "Fitur Offline-First dan Sinkronisasi Data Otomatis",
      "Push Notification & Integrasi Payment Gateway",
      "Autentikasi Biometrik (Fingerprint & FaceID)",
      "Performa Native 60 FPS yang Ringan dan Responsif",
    ],
    deliverables: [
      "File APK/AAB (Android) dan IPA (iOS)",
      "Bantuan Submission ke Google Play Store & Apple App Store",
      "Dokumentasi API & Backend Dashboard",
      "Dukungan Pemeliharaan 6 Bulan Pasca Launching",
    ],
    process: [
      {
        step: 1,
        title: "Spesifikasi Teknis",
        description:
          "Penyelarasan flow aplikasi dan penentuan arsitektur data seluler.",
      },
      {
        step: 2,
        title: "Desain Antarmuka Mobile",
        description:
          "Pembuatan desain UI yang mematuhi standar Human Interface Guidelines & Material 3.",
      },
      {
        step: 3,
        title: "Coding & SDK Integration",
        description:
          "Pengembangan fitur inti, integrasi payment gateway, dan analitik.",
      },
      {
        step: 4,
        title: "Store Publishing",
        description:
          "Review kepatuhan app store hingga rilis live untuk publik.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "Desain UI/UX & Riset Pengguna",
    shortDescription:
      "Riset mendalam dan perancangan antarmuka visual yang estetik, intuitif, dan terbukti meningkatkan konversi bisnis.",
    fullDescription:
      "Kami memadukan pendekatan human-centered design dengan estetika visual modern. Dari user journey mapping, clickable high-fidelity prototype, hingga design system yang komprehensif, kami memastikan produk Anda dicintai pengguna.",
    iconName: "Palette",
    category: "Design",
    priceEstimate: "Mulai dari Rp 10.000.000",
    timeline: "2 - 4 Minggu",
    features: [
      "Riset Pengguna, Analisis Kompetitor & Empathy Mapping",
      "Information Architecture & User Flow Mapping",
      "Interactive High-Fidelity Prototype di Figma",
      "Design System Komprehensif (Komponen, Warna, Tipografi)",
      "Usability Testing dengan Calon Pengguna Riil",
    ],
    deliverables: [
      "File Master Figma beserta Variabel & Komponen",
      "Design System Guide untuk Tim Pengembang",
      "Laporan Riset & Rekomendasi UX",
      "Asset Gambar, Icon SVG, dan Ilustrasi Siap Pakai",
    ],
    process: [
      {
        step: 1,
        title: "Empathize & Research",
        description:
          "Wawancara pengguna dan pemetaan pain-points pada flow lama.",
      },
      {
        step: 2,
        title: "Wireframing",
        description:
          "Eksplorasi tata letak dan navigasi secara low-fidelity.",
      },
      {
        step: 3,
        title: "Visual & Design System",
        description:
          "Pemberian visual modern, styling konsisten, dan prototipe interaktif.",
      },
      {
        step: 4,
        title: "Validation & Hand-off",
        description:
          "Usability testing dan serah terima dokumen siap koding.",
      },
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud Architecture & DevOps",
    shortDescription:
      "Modernisasi infrastruktur server cloud dengan otomasi CI/CD, containerization Docker/Kubernetes, dan keamanan tinggi.",
    fullDescription:
      "Tingkatkan reliabilitas dan kecepatan rilis produk Anda dengan infrastruktur cloud berbasis AWS, Google Cloud, atau Azure. Kami menerapkan praktik Infrastructure as Code (IaC) dan CI/CD otomatis untuk meminimalkan downtime.",
    iconName: "CloudCog",
    category: "Infrastructure",
    priceEstimate: "Mulai dari Rp 18.000.000",
    timeline: "3 - 5 Minggu",
    features: [
      "Automated CI/CD Pipeline dengan GitHub Actions & GitLab CI",
      "Container Orchestration menggunakan Docker & Kubernetes",
      "Setup Infrastructure as Code (IaC) dengan Terraform",
      "Monitoring & Alerting 24/7 (Prometheus, Grafana, Datadog)",
      "High Availability, Auto-Scaling & Disaster Recovery Setup",
    ],
    deliverables: [
      "Script Terraform / Ansible Teruji",
      "Pipeline CI/CD Siap Pakai",
      "Dashboard Monitoring Metrik Server",
      "SOP Incident Response & Disaster Recovery",
    ],
    process: [
      {
        step: 1,
        title: "Audit Infrastruktur",
        description:
          "Evaluasi beban trafik dan celah inefisiensi arsitektur saat ini.",
      },
      {
        step: 2,
        title: "Arsitektur Target",
        description:
          "Merancang topologi multi-region yang hemat biaya dan aman.",
      },
      {
        step: 3,
        title: "Automated Provisioning",
        description:
          "Menjalankan script konfigurasi infrastruktur dan container.",
      },
      {
        step: 4,
        title: "Stress Testing & Hand-over",
        description:
          "Simulasi load test dan penyerahan kredensial aman.",
      },
    ],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    shortDescription:
      "Transformasi data mentah bisnis menjadi wawasan strategis melalui dashboard interaktif dan integrasi analitik cerdas.",
    fullDescription:
      "Bantu manajemen perusahaan Anda mengambil keputusan yang lebih tepat dan berbasis data. Kami membangun data warehouse, pipeline ETL, dan dashboard visual yang mudah dipahami seluruh pemangku kepentingan.",
    iconName: "BarChart3",
    category: "Analytics",
    priceEstimate: "Mulai dari Rp 20.000.000",
    timeline: "4 - 7 Minggu",
    features: [
      "Pipeline ETL Otomatis dari Berbagai Sumber Data Bisnis",
      "Interactive Executive Dashboard (Looker Studio, PowerBI)",
      "Analisis Prediktif Tren Penjualan & Churn Pelanggan",
      "Pembersihan dan Standarisasi Data Master (Data Cleansing)",
      "Integrasi Tracking Event Pengguna Web & Mobile",
    ],
    deliverables: [
      "Dashboard Real-Time yang Terhubung ke Database",
      "Dokumentasi Kamus Data & Formula KPI",
      "Sesi Pelatihan Analisis untuk Tim Manajemen",
      "Automated Daily & Weekly Report ke Email / Slack",
    ],
    process: [
      {
        step: 1,
        title: "KPI Alignment",
        description:
          "Menentukan metrik bisnis kunci yang ingin dimonitor.",
      },
      {
        step: 2,
        title: "Data Pipeline Setup",
        description:
          "Mengkoneksikan database operasional ke data repository terpusat.",
      },
      {
        step: 3,
        title: "Visual Modeling",
        description:
          "Membuat chart, filter, dan agregasi data yang responsif.",
      },
      {
        step: 4,
        title: "Review & Refinement",
        description:
          "Validasi akurasi data dan optimasi performa query.",
      },
    ],
  },
  {
    slug: "cyber-security",
    title: "Keamanan Siber & IT Audit",
    shortDescription:
      "Identifikasi dan perlindungan celah keamanan sistem Anda sebelum disusupi melalui penetration testing komprehensif.",
    fullDescription:
      "Layanan pengujian penetrasi keamanan (Penetration Testing) untuk aplikasi web, mobile, dan API. Kami memberikan audit kepatuhan terhadap standar industri serta rekomendasi perbaikan celah (remediation) yang praktis.",
    iconName: "ShieldCheck",
    category: "Security",
    priceEstimate: "Mulai dari Rp 22.000.000",
    timeline: "2 - 4 Minggu",
    features: [
      "Web & Mobile Application Penetration Testing (OWASP Top 10)",
      "API Security Assessment & Vulnerability Scanning",
      "Network Penetration Testing & Firewall Review",
      "Social Engineering Assessment untuk Karyawan",
      "Laporan Remediasi Lengkap dengan Proof of Concept (PoC)",
    ],
    deliverables: [
      "Executive Summary Report untuk Manajemen",
      "Detailed Technical Report untuk Tim Pengembang",
      "Langkah-Langkah Perbaikan Step-by-Step",
      "Gratis Re-Testing Sekali Setelah Patch Diterapkan",
    ],
    process: [
      {
        step: 1,
        title: "Reconnaissance & Scoping",
        description:
          "Menentukan batasan target dan pemindaian port/service awal.",
      },
      {
        step: 2,
        title: "Vulnerability Scanning",
        description:
          "Pendeteksian otomatis kelemahan konfigurasi dan celah library.",
      },
      {
        step: 3,
        title: "Manual Exploitation",
        description:
          "Pengujian manual secara etis untuk membuktikan dampak celah.",
      },
      {
        step: 4,
        title: "Reporting & Debrief",
        description:
          "Presentasi hasil temuan dan panduan perbaikan keamanan.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}
