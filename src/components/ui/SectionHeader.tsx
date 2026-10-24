import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <Badge variant="primary" className="mb-3 px-3 py-1 font-semibold tracking-wide uppercase text-[11px]">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white max-w-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
