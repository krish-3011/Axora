import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  points: string[];
}

export default function ServiceCard({ icon, title, subtitle, points }: ServiceCardProps) {
  return (
    <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-pink-500/40 via-purple-500/30 to-cyan-500/40 hover:via-purple-500/60 transition-all duration-300 group">
      <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 text-white shadow-xl h-full">
        <div className="text-4xl mb-4 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold tracking-wide mb-2">{title}</h3>
        <p className="text-sm text-zinc-400 mb-4">{subtitle}</p>
        <ul className="text-sm text-zinc-300 space-y-1 list-disc pl-5">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
