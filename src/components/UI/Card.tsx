import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  description?: string;
  icon?: ReactNode;
  footer?: ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Card({
  title,
  description,
  icon,
  footer,
  onClick,
  className,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`card bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition cursor-pointer h-full flex flex-col justify-between ${className}`}
    >
      <div className="flex flex-col items-center text-center flex-grow">
        {icon && <div className="mb-4 text-4xl text-indigo-600">{icon}</div>}
        {title && (
          <h2 className="text-xl font-bold mb-2 text-blue-950">{title}</h2>
        )}
        {description && (
          <p className="text-gray-500 mb-4 line-clamp-3">{description}</p>
        )}
      </div>
      {footer && <div className="mt-4 text-center pt-3">{footer}</div>}
    </div>
  );
}
