import { ICONS } from './icons';
import type { StatType } from '../components/common/FileStats';
import type { ProgressStatus } from './types';
import { STATUS_MAP, ProgressStatusType } from './constants';

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

export const getStatusColor = (status: ProgressStatus): string => {
  const statusClassMap: Record<ProgressStatus, string> = {
    [ProgressStatusType.COMPLETED]: 'bg-status-completed',
    [ProgressStatusType.IN_PROGRESS]: 'bg-status-in-progress',
    [ProgressStatusType.NOT_STARTED]: 'bg-status-not-started',
    [ProgressStatusType.PARTIALLY_UPLOADED]: 'bg-status-partially-uploaded',
    [ProgressStatusType.FULLY_UPLOADED]: 'bg-status-fully-uploaded',
    [ProgressStatusType.DELAYED]: 'bg-status-delayed',
  };

  const statusItem = STATUS_MAP.find((item) => item.type === status);
  if (!statusItem) {
    return 'bg-status-not-started';
  }

  return statusClassMap[statusItem.type] || 'bg-status-not-started';
};
