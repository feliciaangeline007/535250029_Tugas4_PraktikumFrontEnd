import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}) => {
  const baseStyles =
    "group relative inline-flex items-center justify-center font-semibold rounded-xl overflow-hidden cursor-pointer select-none transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.96] active:translate-y-0";

  // Subtle glass shimmer / sheen glide on hover
  const shimmerEffect =
    "before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:ease-in-out";

  const variantStyles = {
    primary:
      `bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-md shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 focus:ring-blue-500 ${shimmerEffect}`,
    secondary:
      "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200/90 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50/80 dark:hover:bg-gray-700/80 hover:-translate-y-0.5 focus:ring-gray-400",
    outline:
      "border-2 border-blue-600/40 dark:border-blue-500/40 text-blue-600 dark:text-blue-400 bg-blue-50/40 dark:bg-blue-950/20 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 focus:ring-blue-500",
    ghost:
      "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/70 dark:hover:bg-gray-800/80 focus:ring-blue-400 active:bg-blue-100",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 font-bold tracking-wide",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        <span className="relative z-10 flex items-center justify-center gap-2 w-full">{children}</span>
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span className="relative z-10 flex items-center justify-center gap-2 w-full">{children}</span>
    </button>
  );
};
