import React from "react";
import Link from "next/link";
import { Service } from "@/types";
import { Badge } from "@/components/ui/Badge";
import {
  Code2,
  Smartphone,
  Palette,
  CloudCog,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Smartphone,
  Palette,
  CloudCog,
  BarChart3,
  ShieldCheck,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = iconMap[service.iconName] || Code2;

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-gray-200/90 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
      <div>
        {/* Header: Icon & Category */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <Badge variant="primary">{service.category}</Badge>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <Link href={`/services/${service.slug}`} className="focus:outline-none">
            {service.title}
          </Link>
        </h3>

        {/* Short description */}
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Feature Highlights */}
        <div className="mt-5 space-y-2 pt-4 border-t border-gray-100 dark:border-gray-800">
          {service.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / CTA link */}
      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-400">
          {service.timeline || "Estimasi Fleksibel"}
        </span>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group/link"
        >
          <span>Pelajari Selengkapnya</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
