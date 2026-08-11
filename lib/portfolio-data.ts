export interface Project {
  title: string;
  category: "laravel" | "node" | "both";
  stack: string[];
  description: string;
  bullets: string[];
  liveLink?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CVProfile {
  title: string;
  about: string;
  skills: SkillCategory[];
  experience: Experience[];
  featuredProjects: Project[];
}

export const contactInfo = {
  name: "Fahad Naeem",
  phone: "+92 311 1274799",
  email: "fahad.didx@gmail.com",
  location: "Karachi, Pakistan",
  github: "https://github.com/smith-jhonson-hub",
  linkedin: "https://pk.linkedin.com/in/muhammad-fahad-naeem-347a85241",
  whatsapp: "https://wa.me/923111274799",
};

export const educationInfo = [
  {
    institution: "Aptech Computer Education",
    degree: "Higher Diploma in Software Engineering",
    year: "2022",
    description: "Completed a comprehensive software engineering program focused on web application development, object-oriented programming, database management, software architecture, and modern development technologies."
  },
  {
    institution: "Board of Intermediate Education Karachi",
    degree: "Intermediate in Commerce",
    year: "2020",
    description: "Completed intermediate education with a Commerce background, developing analytical, problem-solving, and business fundamentals before pursuing a professional career in software engineering."
  }
];

const sharedExperience: Experience[] = [
  {
    company: "Dexnive",
    role: "Backend Developer",
    duration: "2026 - Present",
    bullets: [
      "Develop and maintain scalable backend systems for production web applications using Laravel, Node.js, and Express.js.",
      "Design secure RESTful APIs for web and mobile applications.",
      "Improve application performance through optimized database queries and efficient backend architecture.",
      "Follow clean coding standards and actively participate in code reviews.",
      "Collaborate with frontend developers and QA teams to deliver production-ready features."
    ]
  },
  {
    company: "LaunchBox Global",
    role: "Back End Developer",
    duration: "2024 - 2025",
    bullets: [
      "Developed scalable REST APIs supporting multiple production applications.",
      "Optimized queries (SQL / MongoDB), reducing API response times by approximately 30%.",
      "Built reusable backend modules following framework and industry best practices.",
      "Implemented robust error handling, monitoring, and logging mechanisms.",
      "Integrated third-party APIs and secure payment gateway services.",
      "Resolved critical production issues, improving overall system stability and maintainability."
    ]
  },
  {
    company: "DIDX Inc",
    role: "PHP Laravel Developer",
    duration: "2023 - 2024",
    bullets: [
      "Developed backend APIs for a global decentralized identifier (DID) marketplace.",
      "Built secure user authentication and authorization modules.",
      "Optimized database performance to support thousands of real-time transactions.",
      "Integrated external telecommunication and network APIs.",
      "Worked closely with international development teams on new features and production support."
    ]
  },
  {
    company: "Rehan Foundation",
    role: "Associate PHP Developer",
    duration: "2022 - 2023 (6 Months)",
    bullets: [
      "Assisted in developing and maintaining web applications and platforms using Core PHP and MySQL.",
      "Collaborated with senior developers to construct clean database queries and schema designs.",
      "Integrated third-party APIs and services to support dynamic user content and registrations.",
      "Troubleshot legacy PHP modules and fixed critical bugs to ensure website runtime stability."
    ]
  }
];

export const projectsList: Project[] = [
  {
    title: "TeamLynk",
    category: "laravel",
    stack: ["Laravel", "Firebase", "MySQL", "RESTful APIs"],
    description: "A real-time mobile chat and emergency communication application that enables secure communication through one-to-one and group messaging with instant notifications.",
    bullets: [
      "Designed and developed the database and backend RESTful APIs using Laravel.",
      "Implemented Firebase push notifications for instant delivery.",
      "Built a secure SOS alert system for emergency scenarios.",
      "Created user blocking, presence channels, and privacy settings.",
      "Optimized chat database indexes, reducing message delivery latency under high concurrent load."
    ],
    liveLink: "https://teamlynk.net/"
  },
  {
    title: "MyCE-Pro",
    category: "node",
    stack: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    description: "A continuing education management platform that enables professionals and users to maintain their educational records, certifications, and learning progress.",
    bullets: [
      "Developed course management modules and certificate upload validation.",
      "Built learning hour tracking mechanisms and reports.",
      "Monitored progress analytics and built dashboards for administrators.",
      "Designed clean, RESTful API architecture for mobile and web clients.",
      "Implemented automated PDF certificate generation and secure email dispatch on course completion."
    ],
    liveLink: "https://play.google.com/store/apps/details?id=com.dignitestudios.mycepro&hl=en"
  },
  {
    title: "FareShare Ride-Hailing Platform",
    category: "node",
    stack: ["Node.js", "Express.js", "MongoDB", "Socket.io", "Google Maps API"],
    description: "Designed and developed the real-time ride-hailing backend APIs and comprehensive administrator control panels for FareShare LLC, a specialized NEMT and on-demand transit platform.",
    bullets: [
      "Built live driver geolocation tracking and routing systems using Socket.io and Google Maps Distance Matrix APIs.",
      "Created a multi-tenant administration control panel for dispatchers to manage drivers, verify credentials, and schedule rides.",
      "Implemented dynamic fare estimation algorithms based on distance, traffic, and vehicle type.",
      "Integrated secure in-app wallets and automated driver payout workflows."
    ],
    liveLink: "https://www.faresharellc.com/"
  },
  {
    title: "FamilyPhysEd",
    category: "laravel",
    stack: ["Laravel", "Firebase", "MySQL", "Stripe"],
    description: "An online coaching platform where users can join public sessions or book private coaching with certified trainers through secure subscription-based access.",
    bullets: [
      "Created a robust multi-role onboarding and application flow for coaches and users.",
      "Integrated Stripe Payment Gateway for seamless subscription billing.",
      "Engineered private booking slots and scheduling algorithms.",
      "Added Firebase cloud notifications for session reminders."
    ],
    liveLink: "https://www.familyphysed.com/"
  },
  {
    title: "Dancer Fitness",
    category: "laravel",
    stack: ["Laravel", "WordPress API", "MySQL"],
    description: "Designed and built the mobile app backend and sync APIs to integrate with the existing WordPress website, keeping subscriptions and content synchronized across all platforms.",
    bullets: [
      "Synchronized database states and subscription details between WordPress and the custom mobile app database.",
      "Developed a centralized administration control panel for cross-platform content control.",
      "Built secure subscription status validation and webhook hooks.",
      "Implemented a shared content management API."
    ],
    liveLink: "https://dancer-fitness.com/"
  },
  {
    title: "NexaHome",
    category: "node",
    stack: ["Node.js", "Express.js", "MongoDB", "Marketplace API"],
    description: "A home service marketplace connecting homeowners, service providers, and referral partners through a proposal-based booking system.",
    bullets: [
      "Designed a complex multi-panel architecture (client, provider, partner, admin).",
      "Engineered proposal submission, bidding, and booking workflows.",
      "Developed partner referral and commission management systems.",
      "Deployed scalable Node.js API that serves client bookings."
    ],
    liveLink: "https://homeowner.nexahomeapp.com/"
  },
  {
    title: "DIDX Wholesale Marketplace",
    category: "laravel",
    stack: ["PHP", "Laravel", "MySQL", "VoIP APIs", "RESTful APIs"],
    description: "Contributed to the backend engineering and RESTful API infrastructure for the world's largest wholesale DID phone numbers and VoIP marketplace, enabling automatic carrier routing.",
    bullets: [
      "Developed robust backend RESTful APIs for automatic virtual number provisioning and routing.",
      "Built secure token-based carrier authentication and authorization modules.",
      "Optimized MySQL database query execution to handle thousands of real-time transactions.",
      "Integrated external telecom APIs for real-time inventory updates and phone number mapping.",
      "Engineered automated CDR (Call Detail Record) logs processing and billing calculation pipelines."
    ],
    liveLink: "https://www.didx.net/"
  },
  {
    title: "RentWise",
    category: "node",
    stack: ["Node.js", "Express.js", "MongoDB", "Auth Systems"],
    description: "A property management platform that synchronizes property listings and allows homeowners to verify ownership while connecting renters and brokers.",
    bullets: [
      "Created property listing synchronization and real-time search functionality.",
      "Built property ownership claim validation using secure document storage.",
      "Developed document management and tenant-broker contract flows.",
      "Built RESTful APIs with role-based access control.",
      "Integrated digital signature workflows for lease agreements and automated rental payment alerts."
    ]
  },
  {
    title: "Necessi",
    category: "laravel",
    stack: ["Laravel", "MySQL", "Pusher", "Stripe"],
    description: "A peer-to-peer marketplace enabling users to buy or sell products through a competitive bidding system. Built with integrated order management, payment processing, digital wallets, and secure user withdrawals.",
    bullets: [
      "Buy & Sell Marketplace — Users can post requests to buy items or create listings to sell their products.",
      "Real-Time Bidding System — Multiple users can bid on posts, and the post owner can review and accept the preferred bid.",
      "Order & Payment Management — Automatically handles order creation, payment processing, and transaction status after a bid is accepted.",
      "Wallet & Withdrawals — Users can manage their earnings in an in-app wallet and withdraw funds through their connected payment accounts."
    ]
  }
];

export const cvProfiles: Record<"laravel" | "node" | "fullstack", CVProfile> = {
  laravel: {
    title: "Senior Laravel Backend Developer",
    about: "Senior Backend Developer with 4+ years of experience in developing scalable web and mobile application backends using PHP, Laravel, MySQL, and JavaScript. Skilled in building RESTful APIs, third-party integrations, payment gateway integrations, and database optimization. Passionate about delivering secure, high-performance, and maintainable backend solutions.",
    skills: [
      { title: "Languages", skills: ["PHP", "JavaScript"] },
      { title: "Frameworks & Runtimes", skills: ["Laravel", "Node.js", "Express.js"] },
      { title: "Databases & Storage", skills: ["MySQL", "Firebase", "MongoDB"] },
      { title: "Security & Auth", skills: ["Laravel Sanctum", "JWT Authentication", "Role-Based Access Control (RBAC)"] },
      { title: "Third-Party & Payments", skills: ["Stripe Payment Gateway", "Firebase Cloud Messaging", "RESTful API Integration"] },
      { title: "Tools & DevOps", skills: ["Git", "Postman", "AWS", "Linux"] }
    ],
    experience: sharedExperience,
    featuredProjects: projectsList.filter(p => p.category === "laravel" || p.title === "NexaHome")
  },
  node: {
    title: "Backend Developer | Node.js • Express.js",
    about: "Backend Developer with 4+ years of experience building scalable web and mobile applications, including hands-on experience with Node.js, Express.js, JavaScript, MongoDB, and RESTful APIs. Strong background in backend architecture, third-party integrations, authentication, and database optimization, with additional expertise in Laravel and PHP for enterprise applications.",
    skills: [
      { title: "Languages", skills: ["JavaScript", "TypeScript (Basic)", "PHP"] },
      { title: "Frameworks & Runtimes", skills: ["Node.js", "Express.js", "Laravel"] },
      { title: "Databases & Storage", skills: ["MongoDB", "MySQL", "Firebase"] },
      { title: "Security & Auth", skills: ["JWT Authentication", "Role-Based Access Control (RBAC)"] },
      { title: "Third-Party & Payments", skills: ["Stripe Payment Gateway", "Firebase Cloud Messaging", "RESTful API Integration"] },
      { title: "Tools & DevOps", skills: ["Git", "Postman", "AWS", "Linux"] }
    ],
    experience: sharedExperience,
    featuredProjects: projectsList.filter(p => p.category === "node" || p.title === "TeamLynk")
  },
  fullstack: {
    title: "Backend Software Engineer",
    about: "Backend Software Engineer with 4+ years of experience developing scalable web and mobile application backends using Laravel, Node.js, PHP, JavaScript, MySQL, and MongoDB. Experienced in building RESTful APIs, integrating third-party services, implementing secure authentication, optimizing databases, and developing enterprise-grade applications including real-time communication, service marketplaces, booking systems, and payment integrations.",
    skills: [
      { title: "Languages", skills: ["PHP", "JavaScript", "TypeScript (Basic)"] },
      { title: "Frameworks & Runtimes", skills: ["Laravel", "Node.js", "Express.js"] },
      { title: "Databases & Storage", skills: ["MySQL", "MongoDB", "Firebase"] },
      { title: "Security & Auth", skills: ["Laravel Sanctum", "JWT Authentication", "Role-Based Access Control (RBAC)"] },
      { title: "Third-Party & Payments", skills: ["Stripe Payment Gateway", "Firebase Cloud Messaging", "WordPress API", "RESTful API Integration"] },
      { title: "Tools & DevOps", skills: ["Git", "Postman", "AWS", "Linux"] }
    ],
    experience: sharedExperience,
    featuredProjects: projectsList
  }
};
