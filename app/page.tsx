"use client";

import { useState } from "react";
import {
  contactInfo,
  cvProfiles,
  educationInfo,
  projectsList,
  Project,
} from "@/lib/portfolio-data";
import { FloatingWhatsApp } from "@/components/home/FloatingWhatsApp";

// Inline Icons to keep implementation robust and fast
function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Home() {
  const [profileMode, setProfileMode] = useState<"laravel" | "node" | "fullstack">("fullstack");
  const [copied, setCopied] = useState(false);
  const [activeTerminalTab, setActiveTerminalTab] = useState<"json" | "code" | "sql">("json");
  const [projectFilter, setProjectFilter] = useState<"all" | "laravel" | "node">("all");

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Project Inquiry",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const activeProfile = cvProfiles[profileMode];

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "General Project Inquiry", message: "" });
      } else {
        setFormStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setFormStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  // Mock code content inside interactive terminal
  const terminalJSON = `{
  "name": "Fahad Naeem",
  "role": "${activeProfile.title}",
  "experience": "4+ Years",
  "location": "Karachi, Pakistan",
  "education": "Aptech Higher Diploma in SE",
  "github": "smith-jhonson-hub",
  "services": [
    "Secure RESTful APIs",
    "Database Query Optimization",
    "Microservice Architecture",
    "Stripe Subscription Workflows"
  ]
}`;

  const terminalCode = profileMode === "laravel"
    ? `// routes/api.php
Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('billing')->group(function () {
        Route::post('/subscribe', [StripePaymentController::class, 'checkout']);
        Route::post('/webhook', [StripePaymentController::class, 'handleWebhook']);
    });
    
    Route::apiResource('projects', ProjectController::class);
});`
    : `// src/middleware/auth.ts
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid Token' });
  }
};`;

  const terminalSQL = `-- Optimized query reducing response times by ~30%
SELECT 
    p.id, p.title, p.category, 
    COUNT(bookings.id) as total_bookings,
    SUM(payments.amount) as total_revenue
FROM projects p
INNER JOIN bookings ON bookings.project_id = p.id
LEFT JOIN payments ON payments.booking_id = bookings.id
WHERE p.status = 'active'
  AND bookings.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY p.id
ORDER BY total_bookings DESC
LIMIT 10;`;

  const getActiveTerminalContent = () => {
    switch (activeTerminalTab) {
      case "json": return terminalJSON;
      case "code": return terminalCode;
      case "sql": return terminalSQL;
    }
  };

  // Filter projects dynamically
  const filteredProjects = projectsList.filter((project) => {
    if (projectFilter === "all") return true;
    return project.category === projectFilter;
  });

  return (
    <>
      <main className="relative w-full overflow-hidden bg-[#090a0f] text-slate-100">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-secondary/5 blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />

        {/* HERO SECTION */}
        <section id="hero" className="mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 lg:px-8 lg:pt-20 lg:pb-32">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            
            {/* Left Column: Introductions & Switcher */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                Available for Backend & Software Engineering Roles
              </div>
              
              <h1 className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Hi, I&apos;m <span className="bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">Fahad Naeem</span>
              </h1>
              
              <h2 className="font-display text-2xl font-bold text-slate-200 sm:text-3xl">
                {activeProfile.title}
              </h2>

              <p className="font-sans text-base leading-7 text-slate-400 max-w-2xl sm:text-lg">
                {activeProfile.about}
              </p>

              {/* Profile Toggle Switcher */}
              <div className="mt-2 flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Select Portfolio View Mode:
                </span>
                <div className="inline-flex flex-wrap gap-2 rounded-lg bg-slate-900/60 p-1 border border-white/5 max-w-fit">
                  <button
                    onClick={() => setProfileMode("fullstack")}
                    className={`rounded-md px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                      profileMode === "fullstack"
                        ? "bg-primary text-white shadow-md shadow-primary/25"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Backend Software Engineer
                  </button>
                  <button
                    onClick={() => setProfileMode("laravel")}
                    className={`rounded-md px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                      profileMode === "laravel"
                        ? "bg-primary text-white shadow-md shadow-primary/25"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Laravel Focus
                  </button>
                  <button
                    onClick={() => setProfileMode("node")}
                    className={`rounded-md px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                      profileMode === "node"
                        ? "bg-primary text-white shadow-md shadow-primary/25"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Node.js Focus
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95"
                >
                  Explore My Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-800/40 px-6 py-3.5 text-base font-semibold text-slate-200 transition-all hover:bg-slate-800 hover:border-slate-600 hover:text-white"
                >
                  Let&apos;s Discuss Work
                </a>
              </div>
            </div>

            {/* Right Column: Code Terminal */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl border border-white/10 bg-[#0c0d12]/90 shadow-2xl shadow-black/60 overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/5 bg-[#0f111a] px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-500" />
                    <span className="h-3 w-3 rounded-full bg-amber-500" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                  </div>
                  
                  {/* File Tabs */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveTerminalTab("json")}
                      className={`rounded px-2.5 py-1 text-xs font-mono font-medium transition-all ${
                        activeTerminalTab === "json" ? "bg-white/10 text-white border-b-2 border-primary" : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      profile.json
                    </button>
                    <button
                      onClick={() => setActiveTerminalTab("code")}
                      className={`rounded px-2.5 py-1 text-xs font-mono font-medium transition-all ${
                        activeTerminalTab === "code" ? "bg-white/10 text-white border-b-2 border-primary" : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      {profileMode === "laravel" ? "routes.php" : "auth.ts"}
                    </button>
                    <button
                      onClick={() => setActiveTerminalTab("sql")}
                      className={`rounded px-2.5 py-1 text-xs font-mono font-medium transition-all ${
                        activeTerminalTab === "sql" ? "bg-white/10 text-white border-b-2 border-primary" : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      query.sql
                    </button>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopyCode(getActiveTerminalContent())}
                    className="rounded p-1 text-slate-400 hover:bg-white/5 hover:text-white transition-all"
                    title="Copy code to clipboard"
                  >
                    {copied ? <CheckIcon /> : <CopyIcon />}
                  </button>
                </div>

                {/* Terminal Content */}
                <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto h-[320px] text-slate-300">
                  <pre className="whitespace-pre">
                    <code>
                      {getActiveTerminalContent()}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* STATS BAR */}
        <section className="border-y border-white/5 bg-[#07080c] py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              <div>
                <p className="font-display text-4xl font-extrabold text-white">4+ Years</p>
                <p className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500">Experience</p>
              </div>
              <div>
                <p className="font-display text-4xl font-extrabold text-white">20+</p>
                <p className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500">Featured Projects</p>
              </div>
              <div>
                <p className="font-display text-4xl font-extrabold text-white">3+</p>
                <p className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500">Core Backends</p>
              </div>
              <div>
                <p className="font-display text-4xl font-extrabold text-white">100%</p>
                <p className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500">API Standardized</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME & EDUCATION */}
        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            
            {/* About Card */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                About Me
              </h2>
              <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col gap-4 text-slate-300">
                <p>
                  As a dedicated Backend Developer, I design, compile, and maintain robust API systems that connect thousands of clients securely and efficiently. I specialize in the MVC architecture, writing clean framework codes, and fine-tuning query executions for sub-second responses.
                </p>
                <p>
                  My engineering workflow prioritizes bulletproof authorization modules (Sanctum/JWT), seamless webhook setups (Stripe/Firebase Messaging), and standard-compliant error logging. Recruiters and engineering teams appreciate my attention to detail, database indexing skills, and ability to coordinate tasks across global departments.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 text-sm">
                  <div>
                    <span className="block text-slate-500 font-medium">Location:</span>
                    <span className="text-white font-semibold">{contactInfo.location}</span>
                  </div>
                  <div>
                    <span className="block text-slate-500 font-medium">Work History:</span>
                    <span className="text-white font-semibold">Dexnive, LaunchBox, DIDX</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Education
              </h2>
              <div className="flex flex-col gap-6 pl-2">
                {educationInfo.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-white/10 pb-2 last:pb-0">
                    {/* Glowing Bullet */}
                    <div className="absolute left-0 top-1.5 -translate-x-1/2 h-3.5 w-3.5 rounded-full border border-primary bg-[#090a0f] shadow-lg shadow-primary/40" />
                    
                    <span className="text-xs font-bold text-primary tracking-wide uppercase">
                      {edu.year}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white mt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300">
                      {edu.institution}
                    </p>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section id="skills" className="bg-[#07080c] py-20 border-y border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Technical Skills
              </h2>
              <p className="mt-4 text-slate-400">
                A customized stack representing {activeProfile.title} focus. Hover over cards to explore.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {activeProfile.skills.map((category, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-glow rounded-xl p-6 transition-all duration-300"
                >
                  <h3 className="font-display text-lg font-bold text-white border-b border-white/5 pb-3">
                    {category.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="rounded-full bg-slate-900 border border-white/5 px-3.5 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:border-primary hover:text-white"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Work Experience
            </h2>
            <p className="mt-4 text-slate-400">
              My engineering trajectory across full-time backend roles.
            </p>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-32 pl-6 md:pl-12 flex flex-col gap-12">
            {activeProfile.experience.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Timeline node */}
                <span className="absolute -left-[31px] md:-left-[55px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-primary bg-[#090a0f] shadow shadow-primary/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>

                {/* Company & Date label on left (only visible on md+) */}
                <div className="absolute right-full mr-8 top-1.5 hidden md:block text-right w-24 shrink-0">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
                    {exp.duration.split(" - ")[0]}
                  </span>
                  <span className="text-sm font-semibold text-slate-400 block mt-1">
                    {exp.duration.split(" - ")[1]}
                  </span>
                </div>

                {/* Experience Card */}
                <div className="glass-panel rounded-xl p-6 sm:p-8">
                  <span className="text-xs font-bold text-primary tracking-wide uppercase md:hidden">
                    {exp.duration}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-1 md:mt-0">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-bold text-secondary mt-1">
                    {exp.company}
                  </p>
                  
                  <ul className="mt-4 flex flex-col gap-2.5 text-slate-350 list-disc list-inside">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-sm sm:text-base leading-relaxed pl-1 text-slate-300">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="bg-[#07080c] py-20 border-y border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Featured Projects
                </h2>
                <p className="mt-4 text-slate-400 max-w-2xl">
                  A select list of backend platforms representing REST design, real-time channels, and payment integrations.
                </p>
              </div>

              {/* Project Filter Tabs */}
              <div className="inline-flex rounded-lg bg-slate-900/60 p-1 border border-white/5 max-w-fit shrink-0 self-start">
                <button
                  onClick={() => setProjectFilter("all")}
                  className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                    projectFilter === "all" ? "bg-primary text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setProjectFilter("laravel")}
                  className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                    projectFilter === "laravel" ? "bg-primary text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Laravel
                </button>
                <button
                  onClick={() => setProjectFilter("node")}
                  className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                    projectFilter === "node" ? "bg-primary text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Node.js
                </button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project: Project, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-glow rounded-xl p-6 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Stack Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded bg-slate-900 px-2 py-0.5 text-xs font-medium text-slate-400 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mt-4">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                      {project.description}
                    </p>

                    <ul className="mt-4 flex flex-col gap-2 list-none">
                      {project.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                          <span className="text-primary mt-1 shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.liveLink && (
                    <div className="mt-6 pt-4 border-t border-white/5">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:text-white transition-colors"
                      >
                        Live Demonstration Link
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-0.5">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            
            {/* Direct Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Get In Touch
              </h2>
              <p className="text-slate-400 max-w-md">
                Have an exciting project, open role, or contract to discuss? Shoot me a message. I usually respond within a few hours.
              </p>

              <div className="mt-4 flex flex-col gap-4 text-slate-350">
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-4 text-slate-300 hover:text-white transition-all max-w-fit"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold uppercase">Call Directly</span>
                    <span className="text-sm sm:text-base font-bold">{contactInfo.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 text-slate-300 hover:text-white transition-all max-w-fit"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold uppercase">Email Me</span>
                    <span className="text-sm sm:text-base font-bold break-all">{contactInfo.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-300">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold uppercase">Location</span>
                    <span className="text-sm sm:text-base font-bold">{contactInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="glass-panel rounded-2xl p-6 sm:p-8">
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@example.com"
                        className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Phone Number <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +92 300 1234567"
                        className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="subject" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Inquiry Subject
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-sm text-slate-300 focus:border-primary focus:outline-none"
                      >
                        <option value="General Project Inquiry">General Project Inquiry</option>
                        <option value="Full-time Software Engineer Role">Full-time Software Engineer Role</option>
                        <option value="Contract / Freelance Backend Work">Contract / Freelance Backend Work</option>
                        <option value="Laravel Consulting">Laravel Consulting</option>
                        <option value="Node.js API Setup">Node.js API Setup</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Your Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Explain your project details, scope, or job description..."
                      className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-primary focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submission Status Alerts */}
                  {formStatus === "success" && (
                    <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4 text-emerald-400 text-sm">
                      Thank you! Your message has been sent successfully. I will get back to you shortly.
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="rounded-lg bg-rose-500/10 border border-rose-500/20 p-4 text-rose-400 text-sm">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary to-secondary py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Inquiry...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </section>

      </main>

      <FloatingWhatsApp />
    </>
  );
}
