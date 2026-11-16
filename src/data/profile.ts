export const profile = {
  name: "Moh. Arif Andrian",
  firstName: "Moh. Arif",
  lastName: "Andrian",
  initials: "MA",
  photo: "/pas-foto.png",
  title: "Software Engineer | Programming Educator | IT Support & Consultant",
  location: "Bojonegoro, Jawa Timur",
  email: "moharifandrian@gmail.com",
  phone: "+6285733453969",
  phoneDisplay: "0857 3345 3969",
  github: "https://github.com/MohArifAndrian/",
  linkedin: "https://linkedin.com/in/moh-arif-andrian",
  blog: "https://moharifandrian.blogspot.com",
  cv: "/CV_Moh_Arif_Andrian_2026.pdf",
  greeting: "Perkenalkan, saya Moh. Arif Andrian.",
  headline: [
    "Software Engineer",
    "Programming Educator",
    "IT Support & Consultant",
  ],
  tagline: "Saya mengembangkan sistem yang mendukung aktivitas kerja sehari-hari.",
  bio: [
    "Saya merupakan software engineer dengan pengalaman lebih dari lima tahun dalam pengembangan aplikasi web, backend, CMS, e-commerce, dan CRM. Saya lulusan S1 Pendidikan Teknologi Informasi, Fakultas Ilmu Komputer, Universitas Brawijaya, dengan predikat cumlaude dan IPK 3,85.",
    "Dalam pekerjaan sehari-hari, saya memelihara sistem, menganalisis kebutuhan, menangani permasalahan teknis, serta berkolaborasi dengan tim. Minat utama saya meliputi pengembangan backend, perancangan arsitektur sistem, dan penerapan AI pada proses bisnis.",
  ],
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Resume" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skill" },
  { id: "work", label: "Portfolio" },
  { id: "contact", label: "Contact" },
] as const;

export const aboutHighlights = [
  "Web Development",
  "Backend Systems",
  "CMS & WordPress",
  "AWS Cloud",
  "AI Integration",
  "Sistem Informasi Geospasial",
  "Data Analytics",
  "Business Analyst & Quality Assurance",
] as const;

export const services = [
  {
    no: "01",
    title: "Backend Development",
    description:
      "Merancang REST API, memelihara sistem backend, serta menata alur data agar aplikasi tetap stabil.",
  },
  {
    no: "02",
    title: "CMS & E-commerce",
    description:
      "Mengembangkan CMS, WordPress, CRM, dan platform e-commerce sesuai kebutuhan organisasi.",
  },
  {
    no: "03",
    title: "AI & Integrasi Sistem",
    description:
      "Mengintegrasikan OCR, otomasi, layanan AWS, payment gateway, dan AI ke dalam proses yang telah berjalan.",
  },
] as const;

export const skillCards = [
  { name: "React.js", group: "Frontend" },
  { name: "Next.js", group: "Frontend" },
  { name: "JavaScript", group: "Frontend" },
  { name: "PHP", group: "Backend" },
  { name: "Java", group: "Backend" },
  { name: "Node.js", group: "Backend" },
  { name: "C#", group: "Backend" },
  { name: "MySQL", group: "Database" },
  { name: "PostgreSQL", group: "Database" },
  { name: "Oracle", group: "Database" },
  { name: "SAP", group: "ERP" },
  { name: "DB2", group: "Database" },
  { name: "Redis", group: "Database" },
  { name: "AWS", group: "Cloud" },
  { name: "Stripe", group: "Payment" },
  { name: "Square", group: "Payment" },
  { name: "WordPress", group: "CMS" },
  { name: "REST API", group: "Backend" },
  { name: "Git", group: "Tools" },
  { name: "GIS", group: "Geospatial" },
  { name: "Data Analyst", group: "Analytics" },
  { name: "BA & QA", group: "Quality" },
] as const;

export const stats = [
  { value: "5+", label: "Tahun pengalaman" },
  { value: `${skillCards.length}+`, label: "Skill" },
  { value: "19+", label: "Proyek" },
  { value: "3.85", label: "IPK cumlaude" },
] as const;

export const skills = {
  Frontend: [
    "JavaScript",
    "React.js",
    "Next.js",
    "HTML5",
    "CSS3",
    "Material UI",
  ],
  Backend: [
    "PHP",
    "Java",
    "C#",
    "C++",
    "JSF",
    "REST API",
    "Backend Development",
    "System Integration",
    "CMS Development",
    "Payment Gateway",
    "Stripe",
    "Square",
  ],
  Tools: [
    "Git & GitHub",
    "AWS",
    "Amazon SES",
    "AWS Lambda",
    "EventBridge",
    "Amazon EFS",
    "MySQL",
    "PostgreSQL",
    "Oracle",
    "SAP ERP",
    "DB2",
    "Redis",
    "MAMP",
    "WordPress",
    "Stripe",
    "Square",
    "Elementor",
    "Ollama",
    "AI Integration",
    "GIS",
    "Data Analytics",
    "Business Analyst & Quality Assurance",
    "Jaringan Komputer",
  ],
} as const;

export type SkillGroup = keyof typeof skills;

export const experience = [
  {
    company: "PT. Global Coding Indonesia (Gloding Inc.)",
    role: "Web Developer",
    type: "Purnawaktu",
    location: "Kota Malang, Jawa Timur",
    period: "Juni 2021 — Sekarang",
    points: [
      "Mengembangkan dan memelihara aplikasi web, CMS, e-commerce, serta CRM sesuai kebutuhan klien.",
      "Mengintegrasikan sistem dengan API, layanan pihak ketiga, payment gateway, dan AWS.",
      "Menangani pemeliharaan sistem, perbaikan kesalahan, dan kolaborasi dengan tim dalam implementasi fitur.",
    ],
  },
  {
    company:
      "Dinas Perumahan Rakyat dan Kawasan Permukiman, Cipta Karya dan Tata Ruang Kota Surabaya",
    role: "Asisten Analisis Proyek · IT Staff",
    type: "Kontrak",
    location: "Surabaya, Jawa Timur",
    period: "Maret 2021 — Mei 2021",
    points: [
      "Mengembangkan aplikasi untuk mendukung proses administrasi dan pemantauan kegiatan di dalam dinas.",
      "Memberikan dukungan teknis, termasuk perbaikan perangkat IT apabila terjadi permasalahan.",
    ],
  },
  {
    company: "PT. Sinergi Informatika Semen Indonesia (SISI)",
    role: "Software Engineer",
    type: "Pekerja Lepas",
    location: "Gresik, Jawa Timur",
    period: "Agustus 2019 — Februari 2021",
    points: [
      "Mengembangkan sistem informasi untuk kebutuhan internal Semen Indonesia Group maupun mitra eksternal.",
      "Terlibat dalam analisis kebutuhan, implementasi fitur, serta pemeliharaan sistem operasional yang telah berjalan.",
    ],
  },
  {
    company: "Dinas Komunikasi dan Informatika Kota Batu",
    role: "Programmer (IT Staff)",
    type: "Magang",
    location: "Batu, Jawa Timur",
    period: "Juni 2018 — Agustus 2018",
    points: [
      "Mengembangkan website instansi sebagai media penyampaian informasi publik.",
      "Menyusun tampilan dan fungsi situs agar informasi lebih mudah diakses masyarakat.",
    ],
  },
] as const;

export type Project = {
  name: string;
  description: string;
  stack: string[];
  url: string | null;
  featured?: boolean;
};

export const glodingProjects: Project[] = [
  {
    name: "TONOOKASHOTEN",
    description:
      "Membaca dokumen pesanan dengan AI dan OCR, kemudian mencocokkan data produk secara otomatis ke dalam sistem.",
    stack: ["Node.js", "React.js", "AWS", "OpenAI", "Gemini"],
    url: "https://tonookashoten.com",
    featured: true,
  },
  {
    name: "DRAMATIC CAREERS",
    description:
      "Aplikasi pencarian kerja dan magang untuk kebutuhan profesional, dengan autentikasi Google agar pengguna tidak perlu membuat akun baru.",
    stack: ["Google OAuth", "GCP", "API"],
    url: "https://dramatic.careers",
  },
  {
    name: "SPORTIC",
    description:
      "Platform keanggotaan dengan registrasi, verifikasi email, dasbor, dan pengelolaan poin.",
    stack: ["JavaScript", "REST API"],
    url: "https://sportic.pro",
  },
  {
    name: "ANDRACE",
    description:
      "Mengelola dan memelihara website WordPress, termasuk konten, plugin, kinerja, dan infrastruktur server.",
    stack: ["WordPress", "PHP", "AWS"],
    url: "https://andrace.jp",
  },
  {
    name: "ROCK",
    description:
      "Mengelola pesanan dan pengiriman, termasuk membaca dokumen dan mencocokkan produk.",
    stack: ["Node.js", "React.js", "Redis", "OpenAI"],
    url: null,
  },
  {
    name: "SHASHUSHO",
    description:
      "Optimalisasi sistem kursus penulisan tangan agar pengelolaan email, pemrosesan gambar, dan layanan berjalan lebih efisien.",
    stack: ["Java", "AWS", "SES"],
    url: null,
  },
];

export const sisiProjects: Project[] = [
  {
    name: "CRM Retail SMIG",
    description:
      "Pengembangan sistem Customer Relationship Management (CRM) Retail untuk Semen Indonesia Group.",
    stack: ["PHP", "Oracle"],
    url: null,
  },
  {
    name: "MSC — PT Solusi Bangun Indonesia",
    description:
      "Pengembangan sistem Marketing & Supply Chain (MSC) di PT Solusi Bangun Indonesia.",
    stack: ["PHP", "Oracle"],
    url: null,
  },
  {
    name: "E-DEMS",
    description:
      "Implementasi Electronic Design Engineering Management Systems (E-DEMS) untuk layanan SMIG Jasa.",
    stack: ["PHP", "Oracle"],
    url: null,
  },
  {
    name: "Quality Management",
    description:
      "Implementasi pengembangan fitur Quality Management pada sistem SMIG Jasa.",
    stack: ["PHP", "Oracle"],
    url: null,
  },
  {
    name: "Solusi Anggaran PTPN VI",
    description:
      "Optimalisasi solusi anggaran untuk PT Perkebunan Nusantara VI.",
    stack: ["PHP", "Oracle"],
    url: null,
  },
];

export const glodingMoreProjects: Project[] = [
  {
    name: "JHIA",
    description:
      "Pengembangan sistem terintegrasi untuk kursus kerajinan tangan dan penulisan.",
    stack: ["Java", "JSF", "MySQL"],
    url: null,
  },
  {
    name: "AMIMONO",
    description:
      "Implementasi CMS yang menggabungkan kursus penulisan tangan dengan fitur e-commerce.",
    stack: ["PHP", "WordPress"],
    url: null,
  },
  {
    name: "MAHASU",
    description:
      "Pengembangan CRM untuk kursus peningkatan keterampilan orang tua.",
    stack: ["CRM", "REST API"],
    url: null,
  },
  {
    name: "LIFECARE",
    description:
      "Pengembangan sistem dan CMS untuk layanan dukungan orang tua.",
    stack: ["CMS", "Backend"],
    url: null,
  },
  {
    name: "UM",
    description: "CMS dengan arsitektur frontend dan backend terpisah agar lebih mudah dikembangkan.",
    stack: ["Next.js", "Node.js"],
    url: null,
  },
];

export const surabayaProjects: Project[] = [
  {
    name: "E-Monitoring Project",
    description:
      "Aplikasi untuk mendukung pemantauan dan administrasi proyek di dalam dinas.",
    stack: ["PHP", "MySQL"],
    url: null,
  },
  {
    name: "Sistem Penomoran Surat",
    description:
      "Aplikasi untuk mendukung proses administrasi dan penomoran surat di dalam dinas.",
    stack: ["PHP", "MySQL"],
    url: null,
  },
];

export const batuProjects: Project[] = [
  {
    name: "Website PPID Kota Batu",
    description:
      "Pengembangan website Pejabat Pengelola Informasi dan Dokumentasi sebagai media informasi publik.",
    stack: ["PHP", "MySQL", "Web Design"],
    url: null,
  },
];

export const teaching = [
  "Saya pernah menjadi asisten praktikum pada mata kuliah Pemrograman Dasar, Jaringan Komputer, Administrasi Sistem, Basis Data, dan Rekayasa Perangkat Lunak.",
  "Dengan latar belakang Pendidikan Teknologi Informasi, saya terbiasa menyampaikan konsep teknis secara runtut dan mudah dipahami.",
] as const;

export const education = {
  institution: "Universitas Brawijaya",
  faculty: "Fakultas Ilmu Komputer (FILKOM)",
  program: "S1 Pendidikan Teknologi Informasi",
  years: "2015 — 2019",
  gpa: "3.85",
  predicate: "Cumlaude",
  note: "Pernah memimpin Departemen Keilmuan EMPTI (2018) dan menjadi anggota DPM FILKOM (2017).",
} as const;

export const certifications = [
  {
    year: "2023",
    title: "Business Analyst & Quality Assurance",
    org: "Digital Talent Scholarship Kominfo",
  },
  {
    year: "2022",
    title: "Google Sertifikat Analisis Data",
    org: "Digital Talent Scholarship Kominfo",
  },
  {
    year: "2019",
    title: "Internet of Things",
    org: "Digital Talent Scholarship Kominfo",
  },
] as const;

export const awards = [
  {
    year: "2019",
    title: "Microsoft Office Application, Gold",
    org: "Excellent",
  },
  {
    year: "2017",
    title: "Best Grade Point Average",
    org: "BEM FILKOM UB",
  },
  {
    year: "2015",
    title: "Finalis iFest 2.0",
    org: "Fakultas Ilmu Komputer UB",
  },
] as const;

export const research = [
  {
    year: "2019",
    title:
      "Sistem informasi administrasi perangkat pembelajaran dan supervisi guru di SMKN 5 Malang.",
  },
  {
    year: "2018",
    title: "Prediksi nilai dan penempatan PRAKERIN siswa SMK, studi di SMKN 4 Malang.",
  },
  {
    year: "2017",
    title:
      "Optimasi penempatan PRAKERIN dengan algoritma genetika, studi di SMKN 3 Malang.",
  },
] as const;
