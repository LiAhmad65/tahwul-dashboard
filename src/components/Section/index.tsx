import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="bg-white border border-gray-border py-6 px-4 rounded-[10px]">
      <h2 className="text-base font-bold text-primary-dark-blue mb-6">{title}</h2>
      {children}
    </div>
  );
};
