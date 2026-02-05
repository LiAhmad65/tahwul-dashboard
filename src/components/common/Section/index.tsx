import type { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  className?:string;
  children: ReactNode;
}

export const Section = ({ title, className = '', children }: SectionProps) => {
  return (
    <div className={`bg-white border border-gray-border py-6 px-4 rounded-[10px] min-w-0 ${className}`}>
      {title && <h2 className="text-base font-bold text-primary-dark-blue mb-6" style={{ wordBreak: 'break-word' }}>{title}</h2>}
      {children}
    </div>
  );
};
