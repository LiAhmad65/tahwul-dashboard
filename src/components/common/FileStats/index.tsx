import { getIconByType } from '../../../utils/helpers';

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
  data: FileStatItem[];
  cols?: number;
  iconPosition?: 'left' | 'right';
}

export const FileStats = ({ data, cols = 6, iconPosition = 'right' }: FileStatsProps) => {
  const gridColsMap: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  };
  const gridCols = gridColsMap[cols] || 'grid-cols-6';
  const isIconLeft = iconPosition === 'left';
  
  return (
    <div className={`grid ${gridCols} gap-4`}>
      {data.map((item, index) => (
        <div
          key={index}
          className={`bg-white border border-gray-border rounded-[10px] p-4 ${isIconLeft ? 'flex items-center gap-3' : 'relative'}`}
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
          <div className="flex-1">
            {/* Value */}
            <div className="mb-1">
              <span className="text-2xl font-bold text-primary-dark-blue">
                {item.value}
              </span>
            </div>
            
            {/* Label */}
            <div>
              <span className="text-sm text-gray-text">{item.label}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
