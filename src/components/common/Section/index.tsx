import type { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  className?:string;
  children: ReactNode;
}

export const Section = ({ title, className, children }: SectionProps) => {
  return (
    <div className={`bg-white border border-gray-border py-6 px-4 rounded-[10px] ${className&&className}`}>
      {title && <h2 className="text-base font-bold text-primary-dark-blue mb-6">{title}</h2>}
      {children}
    </div>
  );
};
