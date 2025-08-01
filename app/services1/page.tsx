"use client";
import ServiceCard from "../components/servicecard1";
import { FaLaptopCode, FaSearch, FaBullseye, FaTools } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Website Design & Development",
    subtitle: "Smart, responsive websites that work as hard as you do.",
    points: [
      "Custom UI/UX design",
      "Mobile-first development",
      "CMS setup (WordPress, Webflow, or custom)",
      "E-commerce (Shopify, WooCommerce)",
      "Speed & performance optimization"
    ]
  },
  {
    icon: <FaSearch />,
    title: "SEO & Ranking Strategy",
    subtitle: "Be found by the right people at the right time.",
    points: [
      "Keyword research & strategy",
      "On-page SEO (titles, meta, structure)",
      "Technical fixes (speed, indexing, schema)",
      "Local SEO & Google Business optimization",
      "Ongoing performance tracking"
    ]
  },
  {
    icon: <FaBullseye />,
    title: "Digital Strategy & Branding",
    subtitle: "Don’t just build a website — build a brand.",
    points: [
      "Logo & identity design",
      "Brand style guide",
      "Messaging & tone consultation",
      "Competitor analysis",
      "Positioning strategy"
    ]
  },
  {
    icon: <FaTools />,
    title: "Ongoing Maintenance & Support",
    subtitle: "Because your digital presence should never stop working.",
    points: [
      "Regular backups",
      "Security & malware scans",
      "CMS/plugin updates",
      "Uptime monitoring",
      "Technical support"
    ]
  }
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-14 tracking-tight bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
