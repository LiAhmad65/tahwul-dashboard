import { getIconByType } from '../../../utils/helpers';
import { useCountAnimation, useFileStatsData } from '../../../utils/hooks';
import { useYear } from '../../../contexts/YearContext';

export type StatType = 
  | 'overall-progress'
  | 'total-criteria'
  | 'completed-criteria'
  | 'evidence-documents'
  | 'evidence-completed'
  | 'uploaded-dga'
  | 'total-evidence'
  | 'under-review-evidence'
  | 'in-progress-evidence'
  | 'completed-evidence';

export interface FileStatItem {
  type: StatType;
  value: string | number;
  label: string;
}

interface FileStatsProps {
  data?: FileStatItem[];
  cols?: number;
  iconPosition?: 'left' | 'right';
}

const FileStatItem = ({ item, iconPosition }: { item: FileStatItem; iconPosition: 'left' | 'right' }) => {
  const numericValue = typeof item.value === 'number' ? item.value : parseFloat(item.value);
  const animatedValue = useCountAnimation(numericValue);
  const displayValue = typeof item.value === 'string' && item.value.includes('%') 
    ? `${animatedValue.toFixed(2)}%` 
    : animatedValue;
  const isIconLeft = iconPosition === 'left';

  return (
    <div
      className={`bg-white border border-gray-border rounded-[10px] p-4 min-w-0 ${isIconLeft ? 'flex items-center gap-3' : 'relative'}`}
    >
      {/* Icon */}
      {isIconLeft ? (
        <div className="shrink-0">
          <img
            src={getIconByType(item.type)}
            alt={item.label}
            className="w-6 h-6"
            style={{ 
              filter: 'brightness(0) saturate(100%) invert(20%) sepia(95%) saturate(7158%) hue-rotate(352deg) brightness(86%) contrast(89%)'
            }}
          />
        </div>
      ) : (
        <div className="absolute top-4 right-4">
          <img
            src={getIconByType(item.type)}
            alt={item.label}
            className="w-6 h-6"
            style={{ 
              filter: 'brightness(0) saturate(100%) invert(20%) sepia(95%) saturate(7158%) hue-rotate(352deg) brightness(86%) contrast(89%)'
            }}
          />
        </div>
      )}
      
      {/* Value and Label */}
      <div className="flex-1 min-w-0">
        {/* Value */}
        <div className="mb-1">
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary-dark-blue" style={{ wordBreak: 'break-word' }}>
            {displayValue}
          </span>
        </div>
        
        {/* Label */}
        <div>
          <span className="text-[10px] sm:text-xs md:text-sm text-gray-text" style={{ wordBreak: 'break-word' }}>{item.label}</span>
        </div>
      </div>
    </div>
  );
};

export const FileStats = ({ data, cols = 6, iconPosition = 'right' }: FileStatsProps) => {
  const { selectedYear } = useYear();
  const yearData = useFileStatsData(selectedYear);
  const displayData = data || yearData;
  const gridColsMap: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  };
  const gridCols = gridColsMap[cols] || 'grid-cols-6';
  
  return (
    <div className={`grid grid-cols-3 lg:${gridCols} gap-4 overflow-x-auto min-w-0`}>
      {displayData.map((item, index) => (
        <FileStatItem key={index} item={item} iconPosition={iconPosition} />
      ))}
    </div>
  );
};
