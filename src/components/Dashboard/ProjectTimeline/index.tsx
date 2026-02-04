import { useState } from 'react';
import { Dropdown } from '../../Dropdown';

interface Milestone {
  date: string;
  label: string;
  isActive?: boolean;
}

export const ProjectTimeline = () => {
  const [selectedYear, setSelectedYear] = useState('2026');

  const yearOptions = [
    { value: '2026', label: '2026' },
    { value: '2025', label: '2025' },
    { value: '2024', label: '2024' },
  ];

  const milestones: Milestone[] = [
    { date: 'Mar 17', label: 'Kickoff Workshop', isActive: true },
    { date: 'March 18', label: 'Data Collection', isActive: true },
    { date: 'May 8', label: 'Initial Phase' },
    { date: 'May 9-July 12', label: 'Verification' },
    { date: 'July 13', label: 'Completion Reviews' },
    { date: 'August 21', label: 'Cycle Conclusion' },
  ];

  // Calculate positions for timeline (simplified - you may want to use actual date calculations)
  const getPosition = (index: number) => {
    const positions = [0, 8, 25, 35, 50, 65, 85]; // Approximate percentages
    return positions[index] || 0;
  };

  return (
    <div className="py-6 px-4 bg-white border border-gray-border rounded-[10px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">Project Timeline</h2>
        <Dropdown
          options={yearOptions}
          value={selectedYear}
          onChange={(value) => setSelectedYear(String(value))}
        />
      </div>

      {/* Timeline Bar */}
      <div className="relative mb-8">
        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
          {/* Active segment (green) */}
          <div
            className="absolute h-full bg-green-500 rounded-full"
            style={{ left: '0%', width: '8%' }}
          >
            {/* Start marker */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-green-500 rounded-full"></div>
            {/* End marker */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white border-2 border-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Milestone dots */}
        {milestones.map((milestone, index) => {
          const position = getPosition(index);
          const isActive = milestone.isActive;
          
          return (
            <div
              key={index}
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: `${position}%`, transform: 'translate(-50%, -50%)' }}
            >
              {!isActive && (
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Milestone Labels */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {milestones.map((milestone, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-xs font-medium text-gray-600 mb-1">{milestone.date}</span>
            <span className="text-sm text-gray-900">{milestone.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
