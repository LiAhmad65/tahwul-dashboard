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

export interface YearlyPerformanceData {
  month: string;
  value: number;
}

export interface DetailItem {
  label: string;
  content: string | string[];
}

export interface EvidenceDocument {
  documentNumber: string;
  documentName: string;
  documentLead: string;
  documentPreparer: string;
  date: string;
  dueDate: string;
  status: 'Approved' | 'Pending Review' | 'Rejected';
}

export interface TableColumn {
  key: keyof EvidenceDocument;
  label: string;
  sortable?: boolean;
}

export interface Comment {
  id: string;
  userName: string;
  userInitial: string;
  comment: string;
  date: string;
  avatar?: string;
}

export interface Activity {
  id: number;
  description: string;
  timestamp: string;
}
