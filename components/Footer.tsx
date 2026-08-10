import Link from "next/link";
import { navItems } from "@/lib/navigation";
import { contactInfo } from "@/lib/portfolio-data";

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M5.5 2.5H8.5L10 6.5L8 8C9.2 10.6 11.4 12.8 14 14L15.5 12L19.5 13.5V16.5C19.5 17.05 19.05 17.5 18.5 17.5C9.7 17.5 2.5 10.3 2.5 1.5C2.5 0.95 2.95 0.5 3.5 0.5H6.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect
        x="1"
        y="1"
        width="18"
        height="14"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <path
        d="M1 3L10 9L19 3"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M8 19C8 19 15 12.5 15 8C15 4.13 11.87 1 8 1C4.13 1 1 4.13 1 8C1 12.5 8 19 8 19Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.9" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full bg-[#06070a] border-t border-white/5 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-8 pb-12">
          {/* Logo & Headline */}
          <div className="flex flex-col gap-4">
            <span className="font-display text-2xl font-bold tracking-tight text-white">
              Fahad<span className="text-primary">.</span>Naeem
            </span>
            <p className="text-sm leading-6 text-slate-400 max-w-xs">
              Backend Software Engineer specializing in developing highly scalable,
              performant, and secure systems using Laravel, Node.js, and modern databases.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-primary hover:text-white"
              >
                <GitHubIcon />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-primary hover:text-white"
              >
                <LinkedInIcon />
              </a>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-primary hover:text-white"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 md:pl-12">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact Info
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <PhoneIcon />
                  <span className="font-medium text-slate-300">{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white break-all"
                >
                  <EmailIcon />
                  <span className="font-medium text-slate-300">{contactInfo.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <LocationIcon />
                <span className="font-medium text-slate-300">{contactInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-slate-500">
            © {currentYear} Fahad Naeem. Built with Next.js, Tailwind CSS & React.
          </p>
        </div>
      </div>
    </footer>
  );
}
