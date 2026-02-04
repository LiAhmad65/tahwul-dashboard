import type { FileStatItem } from '../components/Dashboard/FileStats';
import { ICONS } from './icons';

export const ProgressStatusType = {
  NOT_STARTED: 'not-started',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed',
  PARTIALLY_UPLOADED: 'partially-uploaded',
  FULLY_UPLOADED: 'fully-uploaded',
  DELAYED: 'delayed',
} as const;

export type ProgressStatusTypeValue = typeof ProgressStatusType[keyof typeof ProgressStatusType];

export interface StatusItem {
  label: string;
  color: string;
  type: ProgressStatusTypeValue;
}

export const STATUS_MAP: StatusItem[] = [
  { label: 'Not Started', color: '#9CA3AF', type: ProgressStatusType.NOT_STARTED },
  { label: 'In Progress', color: '#F59F0A', type: ProgressStatusType.IN_PROGRESS },
  { label: 'Completed', color: '#1EA54E', type: ProgressStatusType.COMPLETED },
  { label: 'Partially Uploaded', color: '#1D3557', type: ProgressStatusType.PARTIALLY_UPLOADED },
  { label: 'Fully Uploaded', color: '#0078D7', type: ProgressStatusType.FULLY_UPLOADED },
  { label: 'Delayed', color: '#DB1F26', type: ProgressStatusType.DELAYED },
];

export const NAV_OPTIONS = [
  { id: 'dashboard', name: 'Dashboard', icon: ICONS?.homeIcon, route: '/dashboard' },
  { id: 'perspectives', name: 'Perspectives', icon: ICONS?.statsIcon, route: '/perspectives' },
  { id: 'tasks', name: 'Tasks', icon: ICONS?.tasksIcon, route: '/tasks' },
  { id: 'documents', name: 'Documents', icon: ICONS?.documentIcon, route: '/documents' },
  { id: 'reports', name: 'Reports', icon: ICONS?.reportsIcon, route: '/reports' },
  { id: 'users-roles', name: 'Users & Roles', icon: ICONS?.peopleIcon, route: '/users-roles' },
];

export const FILE_STATS_DATA: FileStatItem[] = [
  {
    type: 'overall-progress',
    value: '78.65%',
    label: 'Overall Progress',
  },
  {
    type: 'total-criteria',
    value: 95,
    label: 'Total Criteria',
  },
  {
    type: 'completed-criteria',
    value: 52,
    label: 'Completed Criteria',
  },
  {
    type: 'evidence-documents',
    value: 386,
    label: 'Evidence Documents',
  },
  {
    type: 'evidence-completed',
    value: 302,
    label: 'Evidence (Completed)',
  },
  {
    type: 'uploaded-dga',
    value: 258,
    label: 'Uploaded To DGA',
  },
];