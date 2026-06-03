export interface ProjectData {
  id: string;
  title: string;
  category?: string;
  date?: string;
  author?: string;
  description: string[];
  features: string[];
  framework: string;
  images: string[];
  languages?: { name: string; percentage: number; color: string }[];
  links?: { code?: string; demo?: string; };
  objective?: string;
  research?: string;
  typography?: string;
  outcome?: string;
}

export const LOCAL_PROJECTS: Record<string, ProjectData> = {
  'paudinsani': {
    id: 'paudinsani',
    title: 'PAUD INSANI Preschool Management System',
    category: 'WEB SYSTEMS & PORTALS',
    date: 'July 29, 2025',
    author: 'By Fadjri',
    description: [
      'Architected to confront the institutional administrative challenges prevalent in early childhood education, this system completely overhauls chaotic, manual student records. By transitioning deeply entrenched paper-based workflows into a structured database solution, it fundamentally streamlines classroom administration. The platform empowers educational staff to maintain rigorous oversight over daily operations, ensuring that both academic tracking and student management are handled with unprecedented digital precision.',
      'Executing this vision required the robust capabilities of the TALL stack. By seamlessly combining the backend power of Laravel with the reactive front-end dynamics of Livewire and Alpine.js, the application delivers a high-performance user experience completely devoid of jarring full-page reloads. This seamless interface is securely backed by a strictly governed MySQL relational database, engineered specifically to manage and protect sensitive financial logs, including the complex processing of monthly tuition fees (SPP).'
    ],
    features: [
      'Interactive Student & Staff Administrative Records Directory',
      'Reactive Attendance Tracking & Ingestion Engine',
      'Tuition Payment (SPP) Processing & Financial Ledgering Portal',
      'Role-Based Access Control for Administrators and Teachers'
    ],
    framework: 'Laravel Fullstack (Livewire & Alpine.js)',
    images: [
      '/images/projects/web/paudinsani/mockup.jpg',
      '/images/projects/web/paudinsani/login.jpg',
      '/images/projects/web/paudinsani/dashboardadmin.jpg',
      '/images/projects/web/paudinsani/listsiswa.jpg',
      '/images/projects/web/paudinsani/absensi.jpg',
      '/images/projects/web/paudinsani/spp.jpg',
      '/images/projects/web/paudinsani/keuangan.jpg',
      '/images/projects/web/paudinsani/listuser.jpg'
    ],
    languages: [
      { name: 'Blade', percentage: 65.6, color: '#e34c26' },
      { name: 'PHP', percentage: 34.1, color: '#4F5D95' },
      { name: 'Other', percentage: 0.3, color: '#cccccc' }
    ],
    links: {
      code: 'https://github.com/Fdjri/paud_insani'
    }
  },
  'dashboard-parking': {
    id: 'dashboard-parking',
    title: 'IoT Smart Parking System & Dashboard',
    category: 'WEB SYSTEMS & PORTALS',
    date: 'May 15, 2026',
    author: 'By Fadjri',
    description: [
      'Confronting the escalating urban operational challenges of parking space inefficiencies, this automated IoT infrastructure provides a definitive solution to facility bottlenecks. The architecture relies on the strategic deployment of physical hardware sensors embedded directly into parking slots, which instantaneously detect vehicle occupancy. These microcontrollers then stream live, highly accurate telemetry data directly to a centralized digital registry, completely eliminating the guesswork associated with manual space monitoring.',
      'Translating this hardware activity into actionable insights requires seamless technical integration between the C++ firmware on the microcontrollers and the web architecture. The Laravel backend acts as a highly resilient, high-performance middleware, aggressively capturing incoming HTTP and MQTT payloads from the distributed hardware components. By dynamically parsing slot availability states, the system renders critical analytics onto a beautifully synchronized Blade template user dashboard, providing administrative personnel with real-time spatial oversight.'
    ],
    features: [
      'Live Real-Time Parking Slot Occupancy Monitoring',
      'IoT Hardware Telemetry & Web API Ingestion Engine',
      'Responsive Analytics Dashboard for Space Utilization Tracking',
      'Automated Embedded Middleware for Hardware-to-Software Sync'
    ],
    framework: 'Laravel Fullstack & C++ (Arduino/ESP Microcontroller)',
    images: [
      '/images/projects/web/dashboardparking/mockup.jpg',
      '/images/projects/web/dashboardparking/parking.jpg'
    ],
    languages: [
      { name: 'Blade', percentage: 56.3, color: '#f7523f' },
      { name: 'PHP', percentage: 40.2, color: '#4F5D95' },
      { name: 'C++', percentage: 3.1, color: '#f34b7d' },
      { name: 'Other', percentage: 0.4, color: '#ededed' }
    ],
    links: {
      code: 'https://github.com/Fdjri/UAS_IoT_SmartParkingSystem'
    }
  },
  'bpsrw': {
    id: 'bpsrw',
    title: 'BPS RW: Community-Level Intelligent Waste Logistics Management',
    category: 'MOBILE APPLICATION',
    date: 'November 3, 2025',
    author: 'By Fadjri',
    description: [
      'Confronting the fundamental socioeconomic and environmental challenges of localized garbage logistics management at the neighborhood (RW) tier demands a definitive departure from traditional oversight methods. Historically, grassroots community administrators have grappled with the sheer chaos of tracking daily collection metrics manually—a fragile process highly susceptible to weight allocation errors, chronic scheduling opacity, and fragmented communication among localized processing units. By engineering a deeply integrated digital ecosystem to replace these archaic paper ledgers, the platform definitively transforms neighborhood sanitation efforts into a transparent, data-driven utility, empowering local leaders to orchestrate municipal waste flows with unprecedented precision.',
      'Delving strictly into the multi-platform architectural execution, the application leverages the absolute power of the Flutter framework to construct a highly resilient mobile client. Under the hood, the engine strictly enforces native Dart asynchronous event loops to maintain flawless real-time state updates for high-frequency environmental waste log entries. Furthermore, the architecture strategically utilizes robust internal local storage pipelines, ensuring absolute offline reliability and uninterrupted data ingestion even in dense urban areas plagued by weak network signals. This technical mastery is further amplified by integrating custom native asset initialization structures—most notably featuring a specialized, fluid custom splash row that seamlessly utilizes unified branding media assets right from the initial application launch.'
    ],
    features: [
      'Localized Community-Level (RW) Waste Metric Logging Dashboard',
      'Asynchronous Data Synchronization Engine with Relational Cloud Registries',
      'Specialized Fluid Asset Pipeline Integration for Custom Brand Initialization',
      'High-Availability Offline Logging Mode for Municipal Field Operators',
      'Automated Image Compression Pipeline to Optimize Central Server Load'
    ],
    framework: 'Flutter Mobile Cross-Platform Framework (Dart)',
    images: [
      '/images/projects/mobile/bpsrw/mockup.jpg',
      '/images/projects/mobile/bpsrw/splash.jpg',
      '/images/projects/mobile/bpsrw/login.jpg',
      '/images/projects/mobile/bpsrw/data.jpg',
      '/images/projects/mobile/bpsrw/input.jpg',
      '/images/projects/mobile/bpsrw/laporan.jpg'
    ],
    languages: [
      { name: 'Dart', percentage: 90.8, color: '#00B4AB' },
      { name: 'C++', percentage: 4.5, color: '#f34b7d' },
      { name: 'CMake', percentage: 3.5, color: '#da3434' },
      { name: 'HTML', percentage: 0.5, color: '#e34c26' },
      { name: 'Swift', percentage: 0.4, color: '#f05138' },
      { name: 'C', percentage: 0.3, color: '#555555' }
    ],
    links: {
      code: 'https://github.com/Fdjri/bps-rw'
    }
  },
  'academix': {
    id: 'academix',
    title: 'Academix Academic Management System',
    category: 'WEB SYSTEMS & PORTALS',
    date: 'April 3, 2025',
    author: 'By Fadjri',
    description: [
      'Architecturally designed to solve the complex challenges of legacy educational registries, this system completely overhauls traditional academic administrative workflows. By migrating from fragmented databases to a unified, Object-Oriented Programming paradigm in Java, it orchestrates dynamic KRS (Kartu Rencana Studi) data registries with unparalleled efficiency. The core infrastructure is built around a highly resilient student authentication gateway, ensuring that all access control and data mutation events are strictly governed by robust, enterprise-grade security protocols.',
      'Translating these architectural blueprints into a functional application required deep encapsulation and complex data structure management. The technical implementation leverages advanced Java patterns to seamlessly bridge the gap between back-end processing and user interface layouts, mimicking the robustness of an enterprise-grade legacy academic registry. Through intuitive login terminals and comprehensive administrative dashboards, the application efficiently manages data states while presenting a cohesive, highly responsive environment that accelerates administrative throughput and academic record tracking.'
    ],
    features: [
      'Secure Student & Administrative Authentication Portal',
      'Dynamic KRS (Course Registration System) Intake & Validation Engine',
      'Object-Oriented Academic Record Management & Student Database Directory',
      'High-Performance Local Data Ingestion and Course Schema Grid'
    ],
    framework: 'Pure Java Core (Object-Oriented Programming)',
    images: [
      '/images/projects/web/academix/mockup.jpg',
      '/images/projects/web/academix/landing.jpg',
      '/images/projects/web/academix/login.jpg',
      '/images/projects/web/academix/dashboard.jpg',
      '/images/projects/web/academix/addkrs.jpg'
    ],
    languages: [
      { name: 'Java', percentage: 99.8, color: '#b07219' },
      { name: 'RenderScript', percentage: 0.2, color: '#4c5e3d' }
    ],
    links: {
      code: 'https://github.com/fadjri/academix',
      demo: 'https://youtube.com/watch?v=demo'
    }
  },
  'cuyperpus': {
    id: 'cuyperpus',
    title: 'CuyPerpus Digital Library Management',
    category: 'WEB SYSTEMS & PORTALS',
    date: 'May 12, 2025',
    author: 'By Fadjri',
    description: [
      'Confronting the traditional academic challenges of manual library logging, this system completely digitizes a historically disorganized pipeline into a highly structured digital environment. By moving away from chaotic physical ledgers, it systematically resolves critical issues such as tracking disorganized book borrowing histories, mitigating late return fine calculation errors, and auditing unorganized physical inventories. The resulting platform ensures that every book movement and member interaction is meticulously logged with absolute accuracy.',
      'Delving into the backend architecture, the platform is engineered using a robust foundation of Native PHP combined with carefully structured MySQL relational schemas. The application expertly handles complex session tracking for concurrent book reservations while enforcing highly secure member-to-librarian separation layouts. This robust backend logic, which powers precise automated fine-tracking algorithms, is seamlessly wrapped inside a clean, responsive Bootstrap interface to deliver a professional user experience without compromising on data integrity.'
    ],
    features: [
      'Automated Fine Calculation & Borrowing History Archive',
      'Dynamic Book Inventory Directory & Reservation Registry',
      'Secure Dual-Role Authentication Gate (Librarian Admin & Student Member)',
      'Full-Text Digital Catalog Search Engine'
    ],
    framework: 'Native PHP & Bootstrap Framework',
    images: [
      '/images/projects/web/cuyperpus/mockup.jpg',
      '/images/projects/web/cuyperpus/landing.jpg',
      '/images/projects/web/cuyperpus/dashboardadmin.jpg',
      '/images/projects/web/cuyperpus/dashboarduser.jpg',
      '/images/projects/web/cuyperpus/addbuku.jpg'
    ],
    languages: [
      { name: 'PHP', percentage: 51.2, color: '#4F5D95' },
      { name: 'Hack', percentage: 32.4, color: '#878787' },
      { name: 'CSS', percentage: 11.1, color: '#563d7c' },
      { name: 'HTML', percentage: 5.3, color: '#e34c26' }
    ],
    links: {
      code: 'https://github.com/Fdjri/web_perpus'
    }
  },
  'kaizen-db': {
    id: 'kaizen-db',
    title: 'Kaizen Salesman Tracking System & Database Engine',
    category: 'DATABASE & ARCHITECTURE',
    date: 'May 22, 2025',
    author: 'By Fadjri, Bilal, & Restu',
    description: [
      'Confronting the immense corporate logistics and operational challenges of managing distributed sales teams, this platform was engineered to deliver a comprehensive automated tracking ecosystem. The system actively monitors field sales routes in real time, securely logs critical customer visit instances, and tightly protects highly sensitive field data from unauthorized access. The rapid and successful deployment of this application was uniquely driven by an agile freelance team effort, where three distinct co-authors collaborated to meet rigorous enterprise demands.',
      'Delving into the core infrastructure, my primary engineering contribution centered heavily on architecting the backend systems and optimizing the database mechanics. The implementation relies on extremely robust relational database schemas utilizing MySQL, meticulously designed to process high-frequency daily transaction logs without performance degradation. Furthermore, the architecture optimizes complex search query performance for massive sales metrics while structuring highly protected API endpoints that connect seamlessly with the expansive front-end template layer.'
    ],
    features: [
      'High-Performance Salesman Activity & Route Logging Engine',
      'Optimized MySQL Relational Database Schema for Low-Latency Queries',
      'Multi-Author Collaborative Codebase Infrastructure with Secure Access Control',
      'Scalable Backend API Integration for Real-Time Sales Synchronization'
    ],
    framework: 'Laravel Fullstack & MySQL Relational Database',
    images: [
      '/images/projects/web/kaizendbengine/mockup.jpg',
      '/images/projects/web/kaizendbengine/login.jpg',
      '/images/projects/web/kaizendbengine/dashboardadmin.jpg',
      '/images/projects/web/kaizendbengine/adminreport.jpg'
    ],
    languages: [
      { name: 'Blade', percentage: 86.0, color: '#f7523f' },
      { name: 'PHP', percentage: 13.9, color: '#4F5D95' },
      { name: 'Other', percentage: 0.1, color: '#ededed' }
    ],
    links: {
      code: 'https://github.com/Fdjri/web_project_salesman'
    }
  },
  'sepatuku': {
    id: 'sepatuku',
    title: 'Sepatuku Footwear E-Commerce Platform',
    category: 'E-COMMERCE',
    date: 'February 11, 2025',
    author: 'By Fadjri',
    description: [
      'Catalyzing massive digital disruption across traditional footwear retail supply chains, this platform addresses the absolute necessity for a flawlessly smooth, transactional e-commerce infrastructure. The architecture deliberately optimizes expansive digital product catalogs and aggressively manages complex inventory listing overhead. By completely replacing legacy checkout friction with highly responsive, high-conversion cart systems, the application ensures that the modern consumer experiences an uninterrupted, premium retail journey from storefront to final purchase.',
      'Diving deep into the full-stack architecture mapping, the application leverages a robust Laravel controller infrastructure to seamlessly orchestrate complex product CRUD operations. The backend handles critical data state binding by mapping relational MySQL tables directly to user orders, while simultaneously enforcing deeply secure user session authentication gates. This robust backend logic is further paired with dynamic price caching structures, rapidly parsing live retail data and rendering it flawlessly onto the expansive, interactive frontend layout.'
    ],
    features: [
      'Dynamic Product Catalog Showcase with Advanced Category Filtering',
      'Secure User Authentication & Personalized Transaction History Wallet',
      'Relational Cart and Checkout Simulation Middleware',
      'Comprehensive Inventory Stock & Order Management System for Administrators'
    ],
    framework: 'Laravel Fullstack & Blade Template Engine',
    images: [
      '/images/projects/web/sepatuku/mockup.jpg',
      '/images/projects/web/sepatuku/landing.jpg',
      '/images/projects/web/sepatuku/dashboard.jpg'
    ],
    languages: [
      { name: 'Blade', percentage: 51.0, color: '#f7523f' },
      { name: 'PHP', percentage: 48.6, color: '#4F5D95' },
      { name: 'Other', percentage: 0.4, color: '#ededed' }
    ],
    links: {
      code: 'https://github.com/Fdjri/web_sepatuku'
    }
  },
  'tixgo-web': {
    id: 'tixgo-web',
    title: 'TixGO! Cinema & Service Ticketing Platform',
    category: 'WEB SYSTEMS & PORTALS',
    date: 'June 10, 2025',
    author: 'By Fadjri',
    description: [
      'Building a unified, multi-service ticketing pipeline encompassing cinema, travel, and hotel reservations under a strict system integration workflow presents an immense architectural challenge. Notably engineered as a historical feat of single-handed development, this platform elegantly resolves complex concurrency issues that typically plague high-volume digital booking systems. The architecture actively orchestrates synchronous data flow across entirely disparate service modules, ensuring that zero overlap or double-booking occurs even under intense user loads.',
      'Delving into the technical infrastructure, the Laravel backend serves as a highly robust centralized relational router. It meticulously manages complex data states required for live, real-time cinema seat mapping layouts and deeply secure, multi-stage checkout processes. Furthermore, this backend elegantly splits operational control by providing entirely separate, highly customized admin-to-service dashboard panels, all styled dynamically through an expansive Tailwind CSS utility ecosystem.'
    ],
    features: [
      'Real-Time Interactive Cinema Seat Selection Map',
      'Multi-Service Booking & Unified Checkout Engine (Cinema, Hotel, Travel)',
      'Comprehensive Dual-Role Administration & Service Control Panel',
      'Dynamic Automated E-Ticket & Reservation Ledger Generation'
    ],
    framework: 'Laravel Fullstack & Tailwind CSS',
    images: [
      '/images/projects/web/tixgoweb/mockup.jpg',
      '/images/projects/web/tixgoweb/dashboarduser.jpg',
      '/images/projects/web/tixgoweb/dashboardadmin.jpg',
      '/images/projects/web/tixgoweb/dashboardservice.jpg',
      '/images/projects/web/tixgoweb/booking.jpg'
    ],
    languages: [
      { name: 'Blade', percentage: 47.8, color: '#f7523f' },
      { name: 'PHP', percentage: 33.4, color: '#4F5D95' },
      { name: 'Dart', percentage: 9.5, color: '#00B4AB' },
      { name: 'C++', percentage: 4.4, color: '#f34b7d' },
      { name: 'CMake', percentage: 3.5, color: '#064F8C' },
      { name: 'Swift', percentage: 0.4, color: '#F05138' },
      { name: 'Other', percentage: 1.0, color: '#ededed' }
    ],
    links: {
      code: 'https://github.com/Fdjri/UAS_Integrasi_Aplikasi'
    }
  },
  'espj': {
    id: 'espj',
    title: 'eSPJ Automated Waste Logistics & OCR Engine',
    category: 'MOBILE APPLICATION',
    date: 'October 1, 2025',
    author: 'By Fadjri',
    description: [
      'Confronting the immense public environmental services and municipal logistics headache of managing manual "Surat Perintah Jalan" (SPJ) tracking for waste transport fleets, this platform decisively resolves what was once a chaotic, paper-bound pipeline. Historically, relying on physical travel orders inevitably led to severe data input lag, compounded by clerical errors and chronic dispatch inefficiencies that hampered urban sanitation operations. By seamlessly transforming this archaic field data ingestion process into an automated, lightning-fast digital workflow, the application ensures that municipal operators can register, track, and execute fleet logistics with unprecedented real-time precision.',
      'Delving deeply into the technical compilation layer and underlying mobile architecture, the application represents a highly optimized execution of modern edge processing. The Flutter application powerfully utilizes native Dart asynchronous event loops seamlessly combined with an embedded OCR (Optical Character Recognition) framework to execute complex data extraction directly on the device. By instantly scanning alphanumeric data from physical dispatch sheets, the engine intelligently parses the required values and maps them dynamically into automated, state-controlled form structures. These highly reactive data models then synchronize directly with local data blocks, guaranteeing absolute data integrity while entirely eliminating the friction of manual administrative data entry.'
    ],
    features: [
      'High-Precision Embedded OCR Scanning Engine for Automated Form Ingestion',
      'Real-Time Validation & Verification System for Alphanumeric Travel Records',
      'Optimized Local Machine Learning Extraction Pipelines for Field Operators',
      'Secure Session Authentication Management for Municipal Fleet Transporters'
    ],
    framework: 'Flutter Cross-Platform Framework (Dart)',
    images: [
      '/images/projects/mobile/espj/mockup.jpg',
      '/images/projects/mobile/espj/splash.jpg',
      '/images/projects/mobile/espj/login.jpg',
      '/images/projects/mobile/espj/home.jpg'
    ],
    languages: [
      { name: 'Dart', percentage: 90.8, color: '#00B4AB' },
      { name: 'C++', percentage: 4.5, color: '#f34b7d' },
      { name: 'CMake', percentage: 3.5, color: '#DA3434' },
      { name: 'HTML', percentage: 0.5, color: '#e34c26' },
      { name: 'Swift', percentage: 0.4, color: '#F05138' },
      { name: 'C', percentage: 0.3, color: '#555555' }
    ],
    links: {
      code: 'https://github.com/Fdjri/eSPJ-FCA'
    }
  },
  'eujiemisi': {
    id: 'eujiemisi',
    title: 'E-Uji Emisi: Smart Vehicle Emission Overhaul',
    category: 'MOBILE APPLICATION',
    date: 'September 15, 2025',
    author: 'By Fadjri',
    description: [
      'Confronting the critical environmental health challenges of metropolitan air pollution requires a radical departure from the severe friction found in legacy municipal service software. Historically, chaotic public appointment systems and highly fragmented test tracking interfaces have consistently discouraged civic participation. By aggressively overhauling these outdated mechanisms into a seamless digital pipeline, the platform drastically increases citizen compliance, accelerates testing throughput, and systematically streamlines complex vehicle ingestion workflows directly at the testing hubs.',
      'Delving deeply into the frontend architecture and underlying mobile compilation layer, the client leverages pure Dart compilation to deliver incredibly fluid, high-performance view states. The application flawlessly replaces outdated web-view components with strict native performance indicators, ensuring an immediate and responsive user experience. This technical foundation perfectly supports interactive geo-location center maps and highly dynamic, modern reactive scheduling grids, guaranteeing absolute stability and precision even during peak metropolitan booking surges.'
    ],
    features: [
      'High-Fidelity Responsive Interface for Streamlined Test Booking',
      'Integrated Testing Center Locator & Interactive Booking Calendar',
      'Personalized Digital Certification & Historical Emission Log Archive',
      'Native Automated Expiration Alerts & Push Notification Service'
    ],
    framework: 'Flutter Mobile Framework (Dart)',
    images: [
      '/images/projects/mobile/eujiemisi/mockup.jpg',
      '/images/projects/mobile/eujiemisi/home.jpg',
      '/images/projects/mobile/eujiemisi/info.jpg',
      '/images/projects/mobile/eujiemisi/contact.jpg'
    ],
    languages: [
      { name: 'Dart', percentage: 63.1, color: '#00B4AB' },
      { name: 'C++', percentage: 18.4, color: '#f34b7d' },
      { name: 'CMake', percentage: 14.8, color: '#da3434' },
      { name: 'Swift', percentage: 1.6, color: '#f05138' },
      { name: 'C', percentage: 1.1, color: '#555555' },
      { name: 'HTML', percentage: 0.9, color: '#e34c26' },
      { name: 'Other', percentage: 0.1, color: '#ededed' }
    ],
    links: {
      code: 'https://github.com/Fdjri/e-uji_emisi'
    }
  },
  'mysimplelocation': {
    id: 'mysimplelocation',
    title: 'My Simple Location: Certified Geospatial Tracker',
    category: 'MOBILE APPLICATION',
    date: 'August 20, 2025',
    author: 'By Fadjri',
    description: [
      'Confronting the immense architectural challenges of localized mobile tracking demands a rigorous approach to capturing real-time telemetry inputs while avoiding severe device hardware drain during persistent GPS requests. Historically, mapping highly volatile geospatial data points on mobile platforms often resulted in sluggish performance and rapid battery degradation. By strategically engineering a highly optimized location ingestion pipeline, this software successfully met the rigid validation and competency criteria rigorously enforced by state assessors for standardized cross-platform engineering, ensuring a flawlessly smooth and highly efficient user tracking experience.',
      'Delving strictly into the technical implementation layout, the application represents a masterclass in modern mobile data synchronization. The Flutter application powerfully handles asynchronous native Dart streams to continuously listen for active GPS coordinate changes with minimal latency. Furthermore, the engine brilliantly translates complex latitude and longitude payloads into highly interactive map indicators via direct Google Maps API integration. This real-time visualization is robustly supported by an intelligent architecture that aggressively caches location history data using lightweight local storage blocks, guaranteeing immediate offline retrieval and absolute data continuity regardless of network stability.'
    ],
    features: [
      'High-Precision GPS Telemetry & Live Location Tracking Engine',
      'Interactive Mapping Interface Powered by Google Maps SDK Integration',
      'Localized State Caching for Offline Geographic Bookmark Access',
      'Standardized Architecture Complying with Official BNSP Competency Guidelines'
    ],
    framework: 'Flutter Cross-Platform Framework & Google Maps SDK',
    images: [
      '/images/projects/mobile/mysimplelocation/mockup.jpg',
      '/images/projects/mobile/mysimplelocation/getlocation.jpg',
      '/images/projects/mobile/mysimplelocation/history.jpg',
      '/images/projects/mobile/mysimplelocation/detail.jpg'
    ],
    languages: [
      { name: 'Dart', percentage: 34.8, color: '#00B4AB' },
      { name: 'C++', percentage: 32.6, color: '#f34b7d' },
      { name: 'CMake', percentage: 25.9, color: '#da3434' },
      { name: 'Swift', percentage: 3.0, color: '#f05138' },
      { name: 'C', percentage: 1.9, color: '#555555' },
      { name: 'HTML', percentage: 1.6, color: '#e34c26' },
      { name: 'Other', percentage: 0.2, color: '#ededed' }
    ],
    links: {
      code: 'https://github.com/Fdjri/MySimple-Location'
    }
  },
  'tixgomobile': {
    id: 'tixgomobile',
    title: 'TixGO! Mobile Ticket Wallet',
    category: 'MOBILE APPLICATION',
    date: 'June 13, 2025',
    author: 'By Fadjri',
    description: [
      'Bringing a large-scale ticketing ecosystem directly into the user\'s pocket requires a flawless mobile user experience paradigm. This application confronts the massive challenge of keeping highly volatile booking data completely crisp, deeply reactive, and relentlessly available on the move. By aggressively optimizing network calls and managing complex widget states, the mobile environment ensures that users can execute reservations and retrieve ticket stubs even in low-bandwidth, high-density environments.',
      'Diving into the Flutter and Dart compilation layer, the architecture leverages highly secure API authentication tokens that communicate seamlessly with the core Laravel middleware. The implementation strictly features custom animated seating grids that update dynamically, coupled with localized data caching mechanisms. These localized stores are expertly designed for instantaneous, offline QR-code ticket rendering and verification, guaranteeing user access regardless of internet reliability.'
    ],
    features: [
      'Mobile-Optimized High-Fidelity Cinema Seating Grid',
      'Secure Encrypted QR-Code E-Ticket Generation & Offline Storage',
      'Asynchronous API State Synchronization with Laravel Middleware',
      'Localized Local Notification Triggers for Showtime Reminders'
    ],
    framework: 'Flutter Cross-Platform Framework',
    images: [
      '/images/projects/mobile/tixgomobile/mockup.jpg',
      '/images/projects/mobile/tixgomobile/login.jpg',
      '/images/projects/mobile/tixgomobile/category.jpg',
      '/images/projects/mobile/tixgomobile/booking.jpg'
    ],
    languages: [
      { name: 'Blade', percentage: 47.8, color: '#f7523f' },
      { name: 'PHP', percentage: 33.4, color: '#4F5D95' },
      { name: 'Dart', percentage: 9.5, color: '#00B4AB' },
      { name: 'C++', percentage: 4.4, color: '#f34b7d' },
      { name: 'CMake', percentage: 3.5, color: '#064F8C' },
      { name: 'Swift', percentage: 0.4, color: '#F05138' },
      { name: 'Other', percentage: 1.0, color: '#ededed' }
    ],
    links: {
      code: 'https://github.com/Fdjri/UAS_Integrasi_Aplikasi'
    }
  },
  'bank-sampah-ui': {
    id: 'bank-sampah-ui',
    title: 'Bank Sampah Digital: Community Waste Governance Interface',
    category: 'UI/UX Case Study',
    description: [
      'Confronting the intense workflow clutter when low-literacy local operators attempt to record material weights and account balances manually presents a unique design challenge. Historically, grassroots waste management relied on chaotic, fragile paper ledgers that triggered severe cognitive load and high error rates during daily transactions. By aggressively overhauling these disorganized systems into a guided digital environment, the interface strips away unnecessary administrative friction, allowing community users to execute complex financial logging with absolute clarity.',
      'Executing this intentional architecture shift required a deep reliance on high-contrast card blocks, clear tabular history tracking, and intuitive icon navigation designed specifically to accommodate field usage under high-glare environments. This strategic visual hierarchy decisively emphasizes primary transactional actions over secondary data. The resulting interface not only modernized the aesthetic but drastically improved operational efficiency, culminating in a verified 35% increase in user task completion rates during rigorous field testing.'
    ],
    features: [
      'Figma',
      'User Research',
      'Information Architecture'
    ],
    framework: 'UI/UX Design',
    images: [
      '/images/projects/uiux/banksampah/splash.jpg',
      '/images/projects/uiux/banksampah/dashboard1.jpg',
      '/images/projects/uiux/banksampah/dashboard2.jpg',
      '/images/projects/uiux/banksampah/nasabah.jpg',
      '/images/projects/uiux/banksampah/riwayat.jpg',
      '/images/projects/uiux/banksampah/mockup.jpg'
    ],
    objective: 'Overhaul waste management interface to improve daily active engagement.',
    research: 'Conducted 20+ user interviews to identify friction points in navigation.',
    typography: 'Switched to a variable sans-serif font for increased readability on mobile devices.',
    outcome: '35% increase in task completion rates within the first month of deployment.'
  },
  'silika-ui': {
    id: 'silika-ui',
    title: 'SILIKA: Environmental Monitoring & Air Quality Dashboard',
    category: 'UI/UX Case Study',
    description: [
      'Focusing heavily on the massive cognitive friction found in metropolitan environmental tracking systems, this project tackles the reality where complex analytical sensors send massive raw payloads regarding air, water, and waste vectors that simply overwhelm civic decision-makers. Traditional dashboards often paralyze users with dense numerical grids rather than providing actionable insights. By fundamentally restructuring how environmental telemetry is parsed, the interface transforms overwhelming data chaos into a streamlined, highly legible digital command center.',
      'Implementing this visual clarity strategy required leveraging clean information hierarchies and strict color-coded threshold warnings for hazardous gas indexes. The design deliberately utilizes high-density line charts and progressive disclosure techniques to compress live telemetry data into immediate, actionable environmental dispatches. This sophisticated data visualization approach guarantees that municipal administrators can instantly identify critical ecological anomalies without getting lost in the underlying raw sensor noise.'
    ],
    features: [
      'Figma',
      'Data Visualization',
      'Dashboard Design'
    ],
    framework: 'UI/UX Design',
    images: [
      '/images/projects/uiux/silika/home.jpg',
      '/images/projects/uiux/silika/pemantauan.jpg',
      '/images/projects/uiux/silika/udara.jpg',
      '/images/projects/uiux/silika/mockup.jpg'
    ],
    objective: 'Design a scalable charting interface for massive environmental datasets.',
    research: 'Analyzed complex analytical sensor payloads to simplify data comprehension.',
    typography: 'Implemented strict WCAG AAA color contrast ratios for high-glare data segments.',
    outcome: 'Successfully adopted across major internal organizational teams for civic decision-making.'
  },
  'nutrimate-ui': {
    id: 'nutrimate-ui',
    title: 'Nutrimate: Predictive Dietary Metrics & Nutrition Tracker',
    category: 'UI/UX Case Study',
    description: [
      'Analyzing the historical failure of healthcare and calorie trackers reveals a massive human engagement gap—specifically how tedious manual food logging input creates extreme user drop-off behavior and tracking fatigue within the first week of installation. Standard dietary apps typically demand excessive cognitive effort, forcing users to navigate complex nutritional databases just to record a single meal. By actively confronting this interaction friction, the design completely reimagines the logging pipeline to demand the absolute minimum input for maximum data yield.',
      'Constructing this behavioral interface loop meant minimizing entry friction by placing macro tracking dials upfront and utilizing streamlined, heavily animated progress meters. The architecture strategically structures daily goal completions like minimal gaming reward loops, deliberately engineered to encourage consistent logging habits. Through carefully crafted micro-animations and positive reinforcement triggers, the application successfully transforms a traditionally tedious health chore into an engaging, daily digital ritual.'
    ],
    features: [
      'Figma',
      'Mobile Interaction Design',
      'Micro-animations'
    ],
    framework: 'UI/UX Design',
    images: [
      '/images/projects/uiux/nutrimate/splash.jpg',
      '/images/projects/uiux/nutrimate/login.jpg',
      '/images/projects/uiux/nutrimate/home.jpg',
      '/images/projects/uiux/nutrimate/tracker.jpg',
      '/images/projects/uiux/nutrimate/mockup.jpg'
    ],
    objective: 'Design an intuitive behavioral platform for nutrition and health tracking.',
    research: 'Iterated through distinct UX patterns using high-fidelity Figma prototypes.',
    typography: 'Consolidated a multi-step logging process into a single, dynamic view.',
    outcome: 'User logging speed improved significantly, eliminating standard tracking fatigue.'
  }
};
