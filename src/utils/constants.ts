import type { FileStatItem } from '../components/common/FileStats';
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

export interface YearlyPerformanceData {
  month: string;
  value: number;
}

export const YEARLY_PERFORMANCE_DATA: YearlyPerformanceData[] = [
  { month: 'Jan', value: 88 },
  { month: 'Feb', value: 76 },
  { month: 'Mar', value: 80 },
  { month: 'Apr', value: 42 },
  { month: 'May', value: 88 },
  { month: 'Jun', value: 79 },
  { month: 'Jul', value: 55 },
  { month: 'Aug', value: 88 },
  { month: 'Sept', value: 79 },
  { month: 'Oct', value: 55 },
  { month: 'Nov', value: 88 },
  { month: 'Dec', value: 79 },
];

export interface DetailItem {
  label: string;
  content: string | string[];
}

export const STRATEGIC_PLANNING_DETAILS: DetailItem[] = [
  {
    label: 'Objective',
    content:
      "Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030.",
  },
  {
    label: 'Implementation Requirements',
    content: [
      'Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:',
      "A. The Organization's Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization's Overall Strategy.",
      'B. Strategic Initiatives, Programs, And Performance Indicators.',
      "C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy's Objectives.",
      "D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy's Objectives.",
    ],
  },
  {
    label: 'Evidence Documents',
    content:
      'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.',
  },
  {
    label: 'Related Regulations',
    content:
      'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).',
  },
  {
    label: 'Scope',
    content: 'All Government Entities.',
  },
];