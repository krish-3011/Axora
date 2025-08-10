'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Chhaya Party Plot',
    category: 'Brand Identity',
    description:
      'Designed and developed Axora’s official platform with responsive UI, blazing fast load times, and optimized SEO.',
    image: '/chhaya.png',
    url: 'https://chhayapartyplot.com/',
  },
  {
    title: 'Meet Engineering',
    category: 'Brand Identity',
    description:
      'An intuitive mobile application to manage inventory and sales for on-the-go business operations.',
    image: '/meet.png',
    url: 'https://meet-engineering-6ja1.vercel.app/',
  },
  {
    title: 'Digital Branding Kit',
    category: 'Brand Identity',
    description:
      'A modern and scalable brand identity kit, including logo, guidelines, and UI kit assets for startups.',
    image: '/portfolio/branding-kit.png',
    url: 'https://example.com/branding-kit',
  },
];

export default function PortfolioSection() {
  return (
    <section className="w-full bg-neutral-950 px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-7xl font-anta mb-2">Our Portfolio</h2>
          <p className="text-neutral-400 text-lg">
            A few projects showcasing our expertise in building websites, apps, and brands.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-3xl overflow-hidden transition-all duration-300 transform border border-neutral-700 hover:-translate-y-2 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.1)] hover:border-indigo-500 bg-gradient-to-br from-[#1F1C2C] to-[#2C2C54]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />
              </a>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-1">{project.title}</h3>
                <p className="text-indigo-300 text-sm mb-2">{project.category}</p>
                <p className="text-neutral-400 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
