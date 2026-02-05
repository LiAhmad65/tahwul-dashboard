import { Section } from '../../../../common/Section';
import type { ProgressStatus } from '../../../../../utils/types';
import { getStatusColor } from '../../../../../utils/helpers';

interface ProgressItem {
  id: number;
  status: ProgressStatus;
}

interface ProgressCardProps {
  title: string;
  percentage?: string;
  items: ProgressItem[];
  isMainCategory?: boolean;
  onPress?: () => void;
}

export const ProgressCard = ({ title, percentage, items, isMainCategory = false, onPress }: ProgressCardProps) => {
  if (isMainCategory && percentage) {
    return (
      <div
        onClick={onPress}
        className={`bg-primary-dark-blue rounded-[10px] px-2 py-4 min-h-[120px] flex flex-col items-center gap-2 ${
          onPress ? 'cursor-pointer hover:opacity-90 transition-opacity duration-200' : ''
        }`}
      >
        <div className="text-white text-xs font-bold text-center">
          {title.split(' ').map((word, index) => (
            <span key={index}>
              {word}
              {index < title.split(' ').length - 1 && ' '}
            </span>
          ))}
        </div>
        <div className="bg-percentage-badge-bg rounded-lg px-3 py-1.5 mt-auto">
          <span className="text-white text-center text-sm font-bold">{percentage}</span>
        </div>
      </div>
    );
  }

  return (
    <Section className="h-full p-2! bg-gray-bg! min-h-[120px]!">
      <div className="flex flex-col gap-2 h-full">
        <h3 className="text-[10px] font-normal text-primary-dark-blue text-center">{title}</h3>
        <div className="grid grid-cols-3 gap-2 flex-1 justify-items-center">
          {items.map((item) => (
            <div
              key={item.id}
              className={`w-6 h-6 rounded-full ${getStatusColor(item.status)} flex items-center justify-center shrink-0`}
            >
              <span className="text-white text-base font-medium">{item.id}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
