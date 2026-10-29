/**
 * Portfolio project content, ordered by engineering complexity (most complex first).
 * `image` must match a key in src/utils/images.js.
 * `highlights` is optional: a short list of concrete features and engineering decisions.
 */
export const projects = [
  {
    id: 'meridian-hospital',
    image: 'Meridian-Health-Hospital-Management-Platform',
    name: 'Meridian Hospital Management',
    category: 'Healthcare workflows',
    tagline: 'Patient records and clinical workflows',
    description:
      'A hospital and clinic management platform covering patient registration, appointment scheduling, clinical documentation, prescriptions, billing, and lab/pharmacy workflows.',
    detail:
      'Access to medical records follows a real doctor–patient appointment rather than a role alone, and double booking is blocked in the database.',
    highlights: [
      'Role-specific workflows for patients, doctors, lab technicians, pharmacists and administrators',
      'Double booking prevented by a partial unique index on doctor and start time',
      'Prescriptions are immutable: a correction creates a linked record and marks the original as amended',
      'Batch-tracked pharmacy stock dispensed oldest-expiry first; Stripe-backed invoices with server-side totals',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Stripe'],
    github: 'https://github.com/RushdiNura/hospital-management-system',
    demo: 'https://hospital-management-system-two-bay.vercel.app/',
    featured: true,
  },
  {
    id: 'securebank',
    image: 'securebank',
    name: 'SecureBank',
    category: 'Banking & finance',
    tagline: 'Accounts, transfers, KYC and loans',
    description:
      'A banking management system with separate customer, employee and administrator experiences: multiple account types, fund transfers, KYC verification and a full loan lifecycle from application to EMI payments.',
    detail:
      'Transfers run inside MongoDB sessions with an idempotency check, and balances and approvals update live through Socket.IO.',
    highlights: [
      'KYC: customers upload ID, address and income proofs; employees approve or reject them',
      'Loans move from application to approval, disbursement and EMI payments, with an EMI schedule',
      'CSV and PDF statements, an admin dashboard, reports and bulk CSV exports',
      'JWT access tokens with refresh rotation, bcrypt, rate limiting, account lockout after five failed logins, and an audit log',
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'React Query', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT'],
    github: 'https://github.com/RushdiNura/banking-system',
    demo: 'https://banking-system-1-three.vercel.app/',
    featured: true,
  },
  {
    id: 'aerlume',
    image: 'Aerlume-Travel-considered (2)',
    name: 'Aerlume Travel Booking',
    category: 'Travel',
    tagline: 'Flights, hotels, holiday packages and an AI trip planner',
    description:
      'A travel-booking platform for searching and booking flights, hotels, and holiday packages against managed inventory, with an integrated AI trip planner that helps travellers plan their trip.',
    detail:
      'Payments go through Stripe, and customers and administrators each have their own dashboard for bookings and inventory.',
    highlights: [
      'Search and booking for flights, hotels and curated holiday packages against managed inventory',
      'AI trip planner integrated into the booking experience to assist travellers',
      'Stripe payment integration',
      'Separate customer and administrator dashboards; server state handled with TanStack Query',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'TanStack Query', 'AI integration'],
    github: 'https://github.com/RushdiNura/travel-booking-system',
    demo: 'https://aerlume-travel-booking.vercel.app/',
    featured: true,
  },
  {
    id: 'quickfuel',
    image: 'quickfuel',
    name: 'QuickFuel',
    category: 'Fuel logistics',
    tagline: 'Fuel reservations and station operations',
    description:
      'A fuel reservation platform where drivers book a time slot, pay, and collect fuel with a pickup code, while station operators, owners and administrators manage stock, dispensing and refunds.',
    detail:
      'Built on Supabase: access rules are Postgres row-level security policies, and scheduled jobs generate slots, expire reservations and reset weekly quotas.',
    highlights: [
      'Weekly fuel quota per car class, checked against station stock before booking',
      'Six-digit pickup code and two-step dispensing (authorise, then complete)',
      'Refund requests with administrator approval; owner dashboard with a demand and revenue chart',
      'Driver and operator screens in English, Amharic and Afaan Oromo; payment is a simulation',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Chart.js'],
    github: 'https://github.com/RushdiNura/quick-fuel',
    demo: 'https://quick-fuel-navy.vercel.app/',
    featured: true,
  },
  {
    id: 'real-estate-terra',
    image: 'real-estate-terra (1)',
    name: 'Terra Real Estate',
    category: 'Property',
    tagline: 'Property discovery and visit scheduling',
    description:
      'A real-estate platform for discovering and comparing properties, scheduling visits, and managing listings through agent and administrator dashboards.',
    detail:
      'Agent listings stay pending until an administrator approves them, and the JWT lives in an httpOnly cookie rather than localStorage.',
    highlights: [
      'Server-side search with filters, sorting and pagination; Leaflet / OpenStreetMap maps',
      'Visit scheduling with double-booking prevention and agent confirm, reject and reschedule',
      'Ownership checks on the server, rate limiting, Helmet and input sanitisation',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Leaflet'],
    github: 'https://github.com/RushdiNura/real-estate-platform',
    demo: 'https://real-estate-platform-three-wine.vercel.app/',
    featured: true,
  },
  {
    id: 'nexuschat',
    image: 'nexuschat',
    name: 'NexusChat',
    category: 'Real-time messaging',
    tagline: 'Direct and group chat in real time',
    description:
      'A real-time chat application with direct conversations and group chats, online status, typing indicators, read receipts, reactions and image sharing.',
    detail:
      'Messages are saved to MongoDB before they are emitted, and Socket.IO connections authenticate with the same JWT as the REST API.',
    highlights: [
      'Group replies, forwarding, pinning and editing; member search and management',
      'Message search, pinned conversations, per-conversation drafts and scroll restoration',
      'Image uploads through Cloudinary with a media viewer',
      'Presence is held in one server process; scaling out would need a shared Socket.IO adapter',
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'JWT', 'Cloudinary'],
    github: 'https://github.com/RushdiNura/nexus-chat',
    demo: 'https://nexus-chat-liard-rho.vercel.app/',
    featured: true,
  },
  {
    id: 'jimmitti',
    image: 'jimmitti',
    name: 'Jimmitti Hotels',
    category: 'Hospitality',
    tagline: 'Hotel discovery and booking in Ethiopia',
    description:
      'A hotel-booking and hotel-management platform with guest booking, room and promotion management, hotel approval, and review moderation.',
    detail:
      'Its seed content uses Ethiopian cities and ETB pricing, with separate workflows for guests, hotel managers, and administrators.',
    highlights: [
      'Double-booking protection uses MongoDB transactions',
      'An ownership-authorisation bug found during development was fixed and the access rules documented',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Leaflet'],
    github: 'https://github.com/RushdiNura/hotel-booking-system-mern',
    demo: 'https://jimmiti-frontend.vercel.app/',
    featured: true,
  },
  {
    id: 'hr-report',
    image: 'hr-report',
    name: 'HR Reporting System',
    category: 'Reporting & operations',
    tagline: 'Structured reporting for teams and HR',
    description:
      'An internal reporting tool where department coordinators submit structured service reports and HR staff review daily, monthly, and overall totals.',
    detail:
      'The workflow brings report submission, role-based access, dashboard summaries, and DOCX and Excel export into one place.',
    highlights: [
      'JWT login with separate HR/administrator and department-level access',
      'Role checks run in backend middleware on every protected route',
    ],
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
    github: 'https://github.com/RushdiNura/hr-report-system',
    demo: 'https://hr-report-system-frontend.vercel.app/',
    featured: true,
  },
  {
    id: 'lms-platform',
    image: 'LMS-Platform-Learn-Without-Limits(1)',
    name: 'Learning Management System',
    category: 'Education',
    tagline: 'Courses, quizzes, progress, and certificates',
    description:
      'A learning platform where students enroll in courses, watch lectures, complete quizzes, track progress, and earn certificates, while instructors manage course content.',
    detail:
      'A certificate record is issued automatically when a student completes every lecture in a course.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit', 'JWT'],
    github: 'https://github.com/RushdiNura/online-learning-platform-MERN',
    demo: 'https://online-learning-platform-mern-three.vercel.app/',
    featured: false,
  },
  {
    id: 'survey-builder',
    image: 'Survey-Builder',
    name: 'Survey Builder',
    category: 'Data collection',
    tagline: 'Build surveys and review responses',
    description:
      'A survey application for creating forms, collecting responses, and reviewing analytics, with scheduled publishing and data export.',
    detail:
      'Socket.IO powers live analytics updates, and results export to CSV, Excel and PDF.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Chart.js'],
    github: 'https://github.com/RushdiNura/survey-builder-app-and-web',
    demo: 'https://survey-builder-app-and-web.vercel.app/',
    featured: false,
  },
  {
    id: 'ecommerce-platform',
    image: 'ecommerce-platform',
    name: 'E-commerce Platform',
    category: 'Commerce',
    tagline: 'A full-stack storefront and shopping flow',
    description:
      'A shopping application with authentication, product management, a product catalogue, cart and checkout flows, backed by a REST API.',
    detail:
      'The project connects the storefront UI with CRUD operations and database-backed product data.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    github: 'https://github.com/RushdiNura/e-commerce-mern',
    demo: 'https://rushdi-e-commerce-mern.vercel.app/',
    featured: true,
  },
  {
    id: 'jobnest',
    image: 'jobnest',
    name: 'JobNest',
    category: 'Recruitment',
    tagline: 'A job portal for applicants and employers',
    description:
      'A recruitment platform connecting job seekers and employers through job listings, applications, interview scheduling, and messaging.',
    detail:
      'The project focuses on the core recruitment flow: browsing opportunities and managing applications from the job-seeker and employer sides.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT'],
    github: 'https://github.com/RushdiNura/job-portal-website-MERN',
    demo: 'https://rushdi-job-board-website.vercel.app/',
    featured: true,
  },
  {
    id: 'gym',
    image: 'gym',
    name: 'Ironclad Performance Gym',
    category: 'Fitness',
    tagline: 'Memberships, bookings, and admin tools',
    description:
      'A gym platform with trial bookings, membership plans, checkout, a member dashboard, and administration for users, content, and business records.',
    detail:
      'Members and administrators have separate, authenticated experiences.',
    tech: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    github: 'https://github.com/RushdiNura/ironclad-gym',
    demo: 'https://ironclad-gym-liard.vercel.app/',
    featured: false,
  },
  {
    id: 'service-portal',
    image: 'Service-Portal (1)',
    name: 'Service Portal',
    category: 'Internal tools',
    tagline: 'Request tracking with distinct user roles',
    description:
      'An internal tool for logging, assigning, and tracking service requests from pending to in progress and completed.',
    detail:
      'User, admin, and super-admin roles, with server-side authorization on routes that change data.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    repositories: [
      { label: 'Frontend repository', url: 'https://github.com/RushdiNura/service-portal-client' },
      { label: 'Backend repository', url: 'https://github.com/RushdiNura/service-portal-backend' },
    ],
    demo: 'https://service-portal-frontend.onrender.com',
    featured: false,
  },
];
