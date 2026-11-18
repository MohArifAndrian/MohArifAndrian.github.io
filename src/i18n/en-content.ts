export const enProfile = {
  location: "Bojonegoro, East Java",
  greeting: "Hello, I am Moh. Arif Andrian.",
  tagline: "I build systems that support everyday work.",
  bio: [
    "I am a software engineer with more than seven years of experience in backend development, system architecture, APIs, databases, CMS, e-commerce, and CRM. I hold a bachelor's degree in Information Technology Education from the Faculty of Computer Science, Universitas Brawijaya, graduating cum laude with a GPA of 3.85.",
    "Day to day I design data flows, integrate payments and third-party services, maintain servers, and work with teams. My main interests are backend development, system architecture, and applying AI to business processes.",
  ],
};

export const enAboutHighlights = [
  "System Architecture",
  "API Development",
  "Database Design",
  "Payment Integration",
  "Server Management",
  "CMS & WordPress",
  "AI Integration",
  "Geospatial Information Systems",
  "Data Analytics",
  "Business Analyst & Quality Assurance",
] as const;

export const enServices: Record<string, { title?: string; description: string }> = {
  "01": {
    description:
      "Design backend architecture and REST APIs, shape database schemas, and integrate payments and third-party services so systems stay stable.",
  },
  "02": {
    description:
      "Build CMS, WordPress, CRM, and e-commerce platforms around each organization's needs.",
  },
  "03": {
    title: "AI & System Integration",
    description:
      "Integrate OCR, automation, AWS services, payment gateways, and AI into workflows that already exist.",
  },
  "04": {
    description:
      "Manage server infrastructure, environment setup, application deployment, and service maintenance so systems stay stable, secure, and efficient.",
  },
};

export const enExperience: Record<
  string,
  { type: string; location: string; period: string; role?: string; points: string[] }
> = {
  "PT. Global Coding Indonesia (Gloding Inc.)": {
    type: "Full-time",
    location: "Malang, East Java",
    period: "June 2021 — Present",
    points: [
      "Build and maintain web apps, CMS, e-commerce, and CRM systems for client needs.",
      "Integrate systems with APIs, third-party services, payment gateways, and AWS.",
      "Handle maintenance, bug fixes, and team collaboration on feature delivery.",
    ],
  },
  "Dinas Perumahan Rakyat dan Kawasan Permukiman, Cipta Karya dan Tata Ruang Kota Surabaya": {
    type: "Contract",
    location: "Surabaya, East Java",
    period: "March 2021 — May 2021",
    role: "Project Analysis Assistant · IT Staff",
    points: [
      "Built applications to support administration and activity monitoring inside the department.",
      "Provided technical support, including IT hardware repair when issues occurred.",
    ],
  },
  "PT. Sinergi Informatika Semen Indonesia (SISI)": {
    type: "Freelance",
    location: "Gresik, East Java",
    period: "August 2019 — February 2021",
    points: [
      "Developed information systems for Semen Indonesia Group internals and external partners.",
      "Took part in requirements analysis, feature implementation, and maintenance of live systems.",
    ],
  },
  "Dinas Komunikasi dan Informatika Kota Batu": {
    type: "Internship",
    location: "Batu, East Java",
    period: "June 2018 — August 2018",
    points: [
      "Built the agency website as a channel for public information.",
      "Built an inventory management system for recording, monitoring, and reporting departmental assets.",
    ],
  },
};

export type ProjectText = {
  description: string;
  org?: string;
  stack?: string[];
  caseStudy?: {
    problem: string;
    contribution: string;
    outcome: string;
  };
};

export const enProjects: Record<string, ProjectText> = {
  TONOOKASHOTEN: {
    description:
      "Reads order documents with AI and OCR, then matches product data into the system automatically.",
    caseStudy: {
      problem:
        "Order processing still depended on reading documents by hand, so product matching was slow and error-prone.",
      contribution:
        "Built an OCR and AI flow to extract document data and match it to the catalog automatically.",
      outcome: "Orders enter the system faster, with more consistent product data.",
    },
  },
  "DRAMATIC CAREERS": {
    description:
      "A job and internship search app for professionals, with Google authentication so users do not need a new account.",
    caseStudy: {
      problem:
        "Job and internship search stalled when users had to create a new account first.",
      contribution:
        "Built a web career platform with Google OAuth and API integration on GCP.",
      outcome: "Users can sign in and browse openings without registering again.",
    },
  },
  SPORTIC: {
    description:
      "A membership platform with registration, email verification, a dashboard, and points management.",
    caseStudy: {
      problem:
        "Membership, verification, and points still needed to live in one place to be easy to monitor.",
      contribution:
        "Built registration, email verification, a dashboard, and a REST API for points management.",
      outcome: "Members can register, open the dashboard, and track points in one platform.",
    },
  },
  MAHASU: {
    description: "A CRM for parent-skills training programs.",
    caseStudy: {
      problem:
        "Participant data, program activity, and training information were still scattered, so the program was hard to monitor as a whole.",
      contribution:
        "Built a CRM and REST API to organize participant data, program activity, and related information in a structured way.",
      outcome: "Participant data and training activity can be managed in one system.",
    },
  },
  SHASHUSHO: {
    description:
      "Optimized a handwriting course system so email, image processing, and services run more efficiently.",
    caseStudy: {
      problem:
        "Course operations stalled when email, image processing, and services ran separately.",
      contribution:
        "Optimized the course system on Java, AWS, and Amazon SES so the service flow is more integrated.",
      outcome: "Email, images, and course services became more efficient.",
    },
  },
  OTSUKA: {
    description:
      "A digital health app integrated with Docomo, with an AI avatar for checkups, physical exams, exercise, meal and health advice, and improvement programs.",
    caseStudy: {
      problem: "Users needed digital health coaching connected to the Docomo ecosystem.",
      contribution:
        "Built a Node.js REST API and React/Next.js frontend, including checkup, exercise, meal advice, and AI avatar flows.",
      outcome: "Health checkups and improvement programs can be accessed in one app.",
    },
  },
  "CRM Retail SMIG": {
    description:
      "Retail Customer Relationship Management (CRM) system for Semen Indonesia Group.",
    caseStudy: {
      problem: "Retail customer management at SMIG needed to be standardized at group level.",
      contribution:
        "Built Retail CRM on PHP and Oracle for Semen Indonesia Group operations.",
      outcome: "Customer data and retail processes can be managed centrally on the internal system.",
    },
  },
  "MSC — PT Solusi Bangun Indonesia": {
    description:
      "Marketing & Supply Chain (MSC) system at PT Solusi Bangun Indonesia.",
    caseStudy: {
      problem:
        "Marketing and supply-chain processes needed to be unified so operational data was easier to manage.",
      contribution:
        "Built a Marketing & Supply Chain system on PHP and Oracle for PT Solusi Bangun Indonesia.",
      outcome:
        "Marketing and supply flows can be monitored in one integrated internal system.",
    },
  },
  "E-DEMS": {
    description:
      "Electronic Design Engineering Management Systems (E-DEMS) for SMIG Jasa services.",
    caseStudy: {
      problem:
        "Engineering and design work needed electronic documentation so it was easier to trace.",
      contribution: "Implemented E-DEMS on PHP and Oracle for SMIG Jasa services.",
      outcome: "Engineering design documents and processes can be managed in the internal system.",
    },
  },
  "Quality Management": {
    description: "Quality Management feature development on the SMIG Jasa system.",
  },
  "Solusi Anggaran PTPN VI": {
    description: "Budget solution optimization for PT Perkebunan Nusantara VI.",
  },
  JHIA: {
    description:
      "An integrated system for handicraft and handwriting course operations, covering participant data, course administration, and centralized business processes.",
  },
  AMIMONO: {
    description:
      "A CMS for handwriting course programs with e-commerce, so content, course information, and transactions can be managed in one place.",
  },
  "ROCK CHOCOLATE": {
    description:
      "A CMS for orders and shipping, including document reading, AI-assisted product matching, and monitoring the operational flow in one system.",
  },
  LIFECARE: {
    description:
      "A web app and CMS for parent-support services, focused on content, service information, and operational data through an integrated backend.",
  },
  UM: {
    description:
      "A Japanese law education platform for exams and legal questions, with a React CMS and Node.js REST API. It manages guides, news, and cases, plus AI analysis for multiple-choice, short-answer, and essay questions, including similar historical-question search.",
  },
  ANDRACE: {
    description:
      "Maintained a WordPress site, including content, plugins, performance, and server infrastructure.",
  },
  "E-Monitoring Project": {
    description: "An app to support project monitoring and administration inside the department.",
  },
  "Sistem Penomoran Surat": {
    description: "An app to support administration and letter numbering inside the department.",
  },
  "Website PPID Kota Batu": {
    description:
      "Website for the Information and Documentation Management Officer as a public information channel.",
  },
  "Sistem Manajemen Inventaris": {
    description:
      "Inventory recording and management for Diskominfo Kota Batu, covering asset data, transfers, and stock reports so departmental assets are easier to track.",
  },
  "El-MaHiDa": {
    description:
      "El-MaHiDa (Electronic Regional Grant Management) helps manage regional grants with transparency, efficiency, and accountability. It provides access to grant recipients across sectors such as places of worship, education institutions, religious organizations, and foundations that support orphans and people in need. The full grant process is handled in one system, from application and disbursement to accountability for how funds are used.",
    caseStudy: {
      problem:
        "Regional grant processes were hard to trace in the open, from application through fund accountability.",
      contribution:
        "Built El-MaHiDa so recipient lists, applications, disbursement, and accountability live in one system.",
      outcome: "Regional grant management became more transparent, integrated, and easier to oversee.",
    },
  },
  SMARTLBM: {
    description:
      "An Islamic-character virtual learning platform and school information system. Built with Yayasan Lembaga Bakti Muslim Al Falah Sragen to create online learning to Integrated Islamic School standards, and to connect schools, students, parents, and education partners in one SMARTLBM platform.",
    caseStudy: {
      problem:
        "Schools, students, parents, and education partners were not yet connected in one standard learning medium.",
      contribution:
        "Built an e-learning platform and school information system with Yayasan Al Falah Sragen.",
      outcome:
        "Online learning and school-wide communication can take place in one SMARTLBM platform.",
    },
  },
  "SIM-APPS": {
    description:
      "SIM-APPS (learning-device administration and supervision information system) helps SMK Negeri 5 Malang manage teaching documents and teacher performance supervision. It supports teachers in preparing materials, tracks performance through supervision, and connects supervisors with the teachers being assessed.",
    stack: ["Information System", "Education"],
    caseStudy: {
      problem:
        "Teaching-document preparation and teacher supervision at SMKN 5 Malang were hard to monitor in one place.",
      contribution:
        "Built SIM-APPS for document preparation, supervision tracking, and linking teachers with supervisors.",
      outcome:
        "Teaching-document administration and teacher performance assessment can be managed in one system.",
    },
  },
  SnorDive: {
    description:
      "A web-based geographic information system with the distribution and potential of snorkeling and diving spots, plus ecological conditions on the southern coast of Malang Regency. Built under UPT Pelabuhan Perikanan Pantai of the East Java Marine and Fisheries Office.",
    caseStudy: {
      problem:
        "Information on snorkeling and diving spots along the southern coast of Malang Regency was not easy to access spatially.",
      contribution:
        "Built a web GIS to map spots, potential, and ecological conditions under UPT PPP.",
      outcome: "Location distribution and ecological information can be explored on a digital map.",
    },
  },
  "Web Profile MAN 2 Lamongan": {
    description:
      "A public profile site for Madrasah Aliyah Negeri 2 Lamongan. It presents the institution profile, education programs, news, and school activities so students, parents, and the public can find information more easily.",
    stack: ["Web Design", "Education"],
    caseStudy: {
      problem:
        "Profile, program, and school activity information was not easy for students, parents, and the public to access.",
      contribution: "Built the MAN 2 Lamongan profile website as a public information channel.",
      outcome: "The institution profile, news, and school activities can be accessed online.",
    },
  },
  "Heliport Simulator": {
    description:
      "An LMS for heliport design learning for admins, lecturers, and students, with dimension checks against ICAO and FAA standards.",
    caseStudy: {
      problem:
        "Students needed to design heliports to standard, while checking dimensions by hand was still difficult.",
      contribution:
        "Built an LMS with Fabric and Three.js canvases, admin-lecturer-student roles, ICAO Annex 14 Vol II, Doc 9261, and FAA AC 150/5390-2D checks, plus PDF collection.",
      outcome:
        "Design assignments can be completed, checked against standards, and graded in one learning flow.",
    },
  },
  OneEduPlus: {
    description:
      "A multi-tenant school CMS and LMS for foundations with several units, from elementary through senior high school.",
    caseStudy: {
      problem:
        "A foundation with many school units needed one system for academics, LMS, finance, and portals, without a separate app per school.",
      contribution:
        "Designed a multi-tenant CMS/LMS: master data, RBAC, Merdeka and K13 assessment, tuition, admissions, parent/student portals, and a Node.js API with Next.js, BullMQ, MySQL, and Redis.",
      outcome: "Several units from elementary through senior high can be managed on one platform.",
    },
  },
  "Tour Travel Wisata": {
    description:
      "A profile and tour-package booking site for CV. Sendiko Tour Jogja. It presents Yogyakarta tour packages, tour and vehicle-rental services, company profile, testimonials, booking terms, and a contact form so travelers can choose a package and reach the agency in one place.",
    caseStudy: {
      problem:
        "Tour packages, services, and booking for CV. Sendiko Jogja were not yet gathered in one site that travelers could easily use.",
      contribution:
        "Built a tour-package catalog and booking website, including tour services, vehicle rental, company profile, and a contact form.",
      outcome: "Travelers can view packages, services, and contact the agency online.",
    },
  },
};

export const enEducation = {
  faculty: "Faculty of Computer Science (FILKOM)",
  program: "B.Ed. in Information Technology Education",
  note: "Led the EMPTI Academic Department (2018) and served on the FILKOM student council (2017).",
};

export const enTeaching = [
  "I was a lab assistant at the Faculty of Computer Science, Universitas Brawijaya, for five courses: Basic Programming, Computer Networks, System Administration, Databases, and Software Engineering.",
  "That role covered lab mentoring, explaining concepts, and helping students work through the material.",
  "With a background in Information Technology Education, I am used to explaining technical topics in a clear sequence.",
];

export const enCertifications: Record<string, { title?: string; org?: string }> = {
  "Google Sertifikat Analisis Data": {
    title: "Google Data Analytics Certificate",
  },
};

export const enAwards: Record<string, { title?: string }> = {
  "Finalis iFest 2.0": {
    title: "iFest 2.0 Finalist",
  },
};

export const enResearch = [
  {
    year: "2019",
    title:
      "Teaching-document administration and teacher supervision information system at SMKN 5 Malang.",
  },
  {
    year: "2018",
    title: "Grade prediction and vocational internship placement, a study at SMKN 4 Malang.",
  },
  {
    year: "2017",
    title:
      "Optimizing vocational internship placement with a genetic algorithm, a study at SMKN 3 Malang.",
  },
];
