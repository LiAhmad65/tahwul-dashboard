import { ICONS } from './icons';
import type { StatType } from '../components/common/FileStats';

export const getIconByType = (type: StatType): string => {
  const iconMap: Record<StatType, string> = {
    'overall-progress': ICONS.statsIcon,
    'total-criteria': ICONS.folderIcon,
    'completed-criteria': ICONS.folderCheckIcon,
    'evidence-documents': ICONS.folderSecurityIcon,
    'evidence-completed': ICONS.fileVerifiedIcon,
    'uploaded-dga': ICONS.fileUploadIcon,
    'total-evidence': ICONS.filesIcon,
    'under-review-evidence': ICONS.fileSearchIcon,
    'in-progress-evidence': ICONS.fileExportIcon,
    'completed-evidence': ICONS.fileValidationIcon,
  };
  return iconMap[type] || ICONS.documentIcon;
};
