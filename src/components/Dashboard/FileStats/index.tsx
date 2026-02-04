import { ICONS } from '../../../utils/icons';

export type StatType = 
  | 'overall-progress'
  | 'total-criteria'
  | 'completed-criteria'
  | 'evidence-documents'
  | 'evidence-completed'
  | 'uploaded-dga';

export interface FileStatItem {
  type: StatType;
  value: string | number;
  label: string;
}

interface FileStatsProps {
  data: FileStatItem[];
}

const getIconByType = (type: StatType): string => {
  const iconMap: Record<StatType, string> = {
    'overall-progress': ICONS.statsIcon,
    'total-criteria': ICONS.folderIcon,
    'completed-criteria': ICONS.folderCheckIcon,
    'evidence-documents': ICONS.folderSecurityIcon,
    'evidence-completed': ICONS.fileVerifiedIcon,
    'uploaded-dga': ICONS.fileUploadIcon,
  };
  return iconMap[type] || ICONS.documentIcon;
};

export const FileStats = ({ data }: FileStatsProps) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-gray-border rounded-[10px] p-4 relative"
        >
          {/* Icon - Top Right */}
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
          
          {/* Value */}
          <div className="mb-1">
            <span className="text-2xl font-bold text-primary-dark-blue">
              {item.value}
            </span>
          </div>
          
          {/* Label */}
          <div>
            <span className="text-sm text-[#8597A8]">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
