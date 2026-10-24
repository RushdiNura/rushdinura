/**
 * Portfolio project content.
 *
 * `caseStudy: true` projects get a full write-up; the rest appear in the index.
 * Facts here come from each repository's README or from the CV. When a repository
 * README states a limitation, it is kept in `open` rather than hidden.
 * `image` is a key in src/utils/images.js.
 */
export const projects = [
  {
    id: 'hr-report',
    image: 'hr-report',
    name: 'HR Reporting System',
    category: 'Reporting & operations',
    role: 'Sole developer',
    summary:
      'Department coordinators submit structured service reports, and HR staff review daily, monthly and overall totals in one place.',
    built: [
      'JWT login with separate HR/administrator and department-level access',
      'Structured report forms with create, edit and delete',
      'HR dashboard summarising submitted reports',
      'Report export to DOCX and Excel',
    ],
    decisions: [
      'Role checks run in backend middleware on every protected route, so hiding a button in the UI is never the only protection.',
      'Reports are generated as documents because HR already works in Word and Excel.',
    ],
    open: 'Planned but not built: charts and analytics, audit logs, scheduled report generation, email notifications.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
    github: 'https://github.com/RushdiNura/hr-report-system',
    demo: 'https://hr-report-system-frontend.vercel.app/',
    caseStudy: true,
  },
  {
    id: 'meridian-hospital',
    image: 'meridian',
    name: 'Meridian Hospital Management',
    category: 'Healthcare workflows',
    summary:
      'A clinic platform covering patient registration, appointments, consultations, prescriptions, lab work, pharmacy stock and billing.',
    built: [
      'Role-specific workflows for patients, doctors, lab technicians, pharmacists and admins',
      'Appointment booking with doctor availability',
      'Lab worklist; results released to the ordering doctor and the patient',
      'Batch-tracked pharmacy inventory and Stripe-backed invoices with PDF output',
    ],
    decisions: [
      'Double booking is blocked by a partial unique index on (doctor, start time) in MongoDB, not by an application-level check that two requests could race past.',
      'Prescriptions are immutable: a correction creates a linked new record and marks the original as amended, so history is preserved.',
      'Access to a medical record depends on a real doctor–patient appointment, not only on holding the doctor role; admin overrides are audit-logged.',
      'Invoice totals are computed on the server from line items; totals sent by the client are ignored.',
    ],
    open: 'No integration test suite yet (unit tests cover scheduling, billing and FIFO stock). Receptionist and nurse roles exist without finished workflows. Not certified against HIPAA, GDPR or similar frameworks.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'TanStack Query', 'Zod', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe'],
    github: 'https://github.com/RushdiNura/hospital-management-system',
    demo: 'https://hospital-management-system-two-bay.vercel.app/',
    caseStudy: true,
  },
  {
    id: 'real-estate-terra',
    image: 'terra',
    name: 'Terra Real Estate',
    category: 'Property',
    summary:
      'Property search with maps and filters, visit scheduling, and separate dashboards for agents and administrators.',
    built: [
      'Server-side search with filters, sorting and pagination',
      'Property pages with a Leaflet / OpenStreetMap map, favourites and inquiries',
      'Visit scheduling with double-booking prevention and agent confirm / reject / reschedule',
      'Agent dashboard with multi-image upload; admin dashboard for moderation and user control',
    ],
    decisions: [
      'The JWT lives in an httpOnly cookie rather than localStorage, trading some client convenience for XSS resistance.',
      'Listings created by agents stay pending until an administrator approves them.',
      'Filtering, sorting and pagination run in MongoDB queries with indexes on the commonly filtered fields.',
      'Ownership checks happen on the server; frontend route guards are only a convenience.',
    ],
    open: 'Jest, Supertest and Vitest suites are written; the repository README notes they have not yet been run against a live MongoDB.',
    tech: ['React', 'TanStack Query', 'React Hook Form', 'Zod', 'Node.js', 'Express', 'MongoDB', 'Leaflet', 'Cloudinary'],
    github: 'https://github.com/RushdiNura/real-estate-platform',
    demo: 'https://real-estate-platform-three-wine.vercel.app/',
    caseStudy: true,
  },
  {
    id: 'jimmitti',
    image: 'jimmitti',
    name: 'Jimmitti Hotels',
    category: 'Hospitality',
    summary:
      'Hotel booking and management for Jimma, Ethiopia, with separate workflows for guests, hotel managers and administrators.',
    built: [
      'Guests search, book, save favourites and leave reviews',
      'Managers handle hotels, rooms, check-in/out, promotions and review replies',
      'Admins approve or suspend hotels and moderate reviews',
      'Seed data uses real Jimma neighbourhoods and ETB pricing',
    ],
    decisions: [
      'Double-booking protection uses MongoDB transactions.',
      'An ownership-authorisation bug found during development was fixed, and the access rules are documented in the backend.',
      'The brand teal fails contrast on white, so it is used only as a fill; a darker variant carries text.',
    ],
    open: 'The repository README says the code was first written without a live database or browser, and recommends a full end-to-end pass (tests and a click-through of every page) before wider use.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'TanStack Query', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Leaflet'],
    github: 'https://github.com/RushdiNura/hotel-booking-system-mern',
    demo: 'https://jimmiti-frontend.vercel.app/',
    caseStudy: true,
  },
  {
    id: 'quickfuel',
    image: 'quickfuel',
    name: 'QuickFuel',
    category: 'Fuel logistics',
    summary:
      'Fuel reservation for drivers and station operations for owners and operators: book a time slot, pay, get a pickup code, and collect fuel at the station.',
    built: [
      'Four roles with their own screens: drivers, station operators, station owners and administrators',
      'Weekly fuel quota per car class, checked against station stock before a reservation is created',
      'Hourly pickup slots for the next seven days, generated by a scheduled job',
      'Six-digit pickup code, then two-step dispensing at the pump (authorise, then complete)',
      'Refund requests with administrator approval; owner dashboard with a demand and revenue chart',
      'Driver and operator screens in English, Amharic and Afaan Oromo',
    ],
    decisions: [
      'Access rules live in the database as Postgres row-level security policies, not only in the frontend.',
      'Accounts are created by administrators only; there is no public sign-up.',
      'Scheduled jobs (pg_cron) generate slots, expire unclaimed reservations, close past slots and reset weekly quotas.',
      'Reservation and pickup-code endpoints are rate-limited, and every write action is recorded in an audit table.',
    ],
    open: 'Payment is a simulation and is not connected to Telebirr or Chapa. The station map is a schematic SVG, not a real map. Amharic and Oromo strings have not been reviewed by a native speaker. No automated test suite yet.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Deno edge functions', 'Chart.js'],
    github: 'https://github.com/RushdiNura/quick-fuel',
    demo: 'https://quick-fuel-navy.vercel.app/',
    caseStudy: true,
  },

  // — Index projects —
  {
    id: 'jobnest',
    image: 'jobnest',
    name: 'JobNest',
    category: 'Recruitment',
    summary:
      'A job portal connecting applicants and employers through listings, applications, interview scheduling and messaging.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT'],
    github: null, // private or unpublished; no repository link is shown
    demo: 'https://rushdi-job-board-website.vercel.app/',
  },
  {
    id: 'survey-builder',
    image: 'survey',
    name: 'Survey Builder',
    category: 'Data collection',
    summary:
      'Create surveys with nine question types, collect anonymous or signed-in responses, watch analytics update live, and export to CSV, Excel or PDF. Publishing and closing can be scheduled.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'node-cron', 'Chart.js'],
    github: 'https://github.com/RushdiNura/survey-builder-app-and-web',
    demo: 'https://survey-builder-app-and-web.vercel.app/',
  },
  {
    id: 'lms-platform',
    image: 'lms',
    name: 'Learning Management System',
    category: 'Education',
    summary:
      'Students enroll, watch lectures, take timed quizzes and track progress; a certificate record is issued automatically at 100% completion. Instructors manage courses and quizzes.',
    tech: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/RushdiNura/online-learning-platform-MERN',
    demo: 'https://online-learning-platform-mern-three.vercel.app/',
  },
  {
    id: 'ecommerce-platform',
    image: 'ecommerce',
    name: 'E-commerce Platform',
    category: 'Commerce',
    summary:
      'A storefront with authentication, product management, catalogue, cart and checkout, backed by a REST API.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    github: 'https://github.com/RushdiNura/e-commerce-mern',
    demo: 'https://rushdi-e-commerce-mern.vercel.app/',
  },
  {
    id: 'aerlume',
    image: 'aerlume',
    name: 'Aerlume Travel Booking',
    category: 'Travel',
    summary:
      'Search and book flights, hotels and holiday packages against managed inventory, with Stripe payments and separate customer and admin dashboards.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'TanStack Query'],
    github: null,
    demo: 'https://aerlume-travel-booking.vercel.app/',
  },
  {
    id: 'gym',
    image: 'gym',
    name: 'Ironclad Performance Gym',
    category: 'Fitness',
    summary:
      'Trial bookings, membership plans and checkout, a member dashboard, and admin tools for users and content.',
    tech: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    github: 'https://github.com/RushdiNura/ironclad-gym',
    demo: 'https://ironclad-gym-liard.vercel.app/',
  },
  {
    id: 'service-portal',
    image: 'service-portal',
    name: 'Service Portal',
    category: 'Internal tools',
    summary:
      'Log, assign and track service requests from pending to completed, with user, admin and super-admin roles and server-side authorisation on routes that change data.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    repositories: [
      { label: 'Frontend', url: 'https://github.com/RushdiNura/service-portal-client' },
      { label: 'Backend', url: 'https://github.com/RushdiNura/service-portal-backend' },
    ],
    demo: 'https://service-portal-frontend.onrender.com',
  },
];
