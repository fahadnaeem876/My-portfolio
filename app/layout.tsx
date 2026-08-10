import type { Metadata } from "next";
import { Alatsi, Inter, Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const alatsi = Alatsi({
  variable: "--font-alatsi",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Fahad Naeem | Backend Software Engineer & Developer",
  description:
    "Senior Backend Developer with 4+ years of experience building scalable web and mobile applications using PHP, Laravel, Node.js, Express.js, and MongoDB/MySQL.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${alatsi.variable} ${inter.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#090a0f] text-slate-100 font-sans">
        <Header />
        <div className="flex flex-1 flex-col pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
