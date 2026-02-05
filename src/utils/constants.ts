import type { FileStatItem } from '../components/common/FileStats';
import { ICONS } from './icons';
import { ProgressStatusType, type StatusItem, type YearlyPerformanceData, type DetailItem, type EvidenceDocument, type TableColumn, type Comment, type Activity, type MainCategory } from './types';

export { ProgressStatusType };
export type { StatusItem, YearlyPerformanceData, DetailItem, EvidenceDocument, TableColumn, Comment, Activity, MainCategory };

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

export const EVIDENCE_TABLE_DATA: EvidenceDocument[] = [
  {
    documentNumber: '5.4.1.1',
    documentName: 'Digital_Transformation_Plan.Pdf',
    documentLead: 'Ahmed Khaled',
    documentPreparer: 'Ahmed Khaled',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'Approved',
  },
  {
    documentNumber: '5.4.1.2',
    documentName: 'KPI_Framework.Xlsx',
    documentLead: 'Mona Hamed',
    documentPreparer: 'Mona Hamed',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'Pending Review',
  },
  {
    documentNumber: '5.4.1.3',
    documentName: 'Roadmap_Version1.Docx',
    documentLead: 'Rami AlSharif',
    documentPreparer: 'Rami AlSharif',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'Pending Review',
  },
  {
    documentNumber: '5.4.1.4',
    documentName: 'Strategic_Alignment_Report.Pdf',
    documentLead: 'Sarah Al-Mansouri',
    documentPreparer: 'Sarah Al-Mansouri',
    date: '2025-08-02',
    dueDate: '2025-08-15',
    status: 'Approved',
  },
  {
    documentNumber: '5.4.1.5',
    documentName: 'Technology_Assessment.Docx',
    documentLead: 'Omar Al-Rashid',
    documentPreparer: 'Omar Al-Rashid',
    date: '2025-08-03',
    dueDate: '2025-08-20',
    status: 'Pending Review',
  },
  {
    documentNumber: '5.4.1.6',
    documentName: 'Budget_Allocation_2025.Xlsx',
    documentLead: 'Fatima Al-Zahra',
    documentPreparer: 'Fatima Al-Zahra',
    date: '2025-08-04',
    dueDate: '2025-08-18',
    status: 'Approved',
  },
  {
    documentNumber: '5.4.1.7',
    documentName: 'Risk_Analysis_Report.Pdf',
    documentLead: 'Khalid Al-Saud',
    documentPreparer: 'Khalid Al-Saud',
    date: '2025-08-05',
    dueDate: '2025-08-22',
    status: 'Pending Review',
  },
  {
    documentNumber: '5.4.1.8',
    documentName: 'Implementation_Timeline.Docx',
    documentLead: 'Layla Al-Hashimi',
    documentPreparer: 'Layla Al-Hashimi',
    date: '2025-08-06',
    dueDate: '2025-08-25',
    status: 'Rejected',
  },
  {
    documentNumber: '5.4.1.9',
    documentName: 'Stakeholder_Engagement_Plan.Pdf',
    documentLead: 'Yusuf Al-Mutairi',
    documentPreparer: 'Yusuf Al-Mutairi',
    date: '2025-08-07',
    dueDate: '2025-08-28',
    status: 'Approved',
  },
  {
    documentNumber: '5.4.1.10',
    documentName: 'Performance_Metrics_Dashboard.Xlsx',
    documentLead: 'Noor Al-Dosari',
    documentPreparer: 'Noor Al-Dosari',
    date: '2025-08-08',
    dueDate: '2025-08-30',
    status: 'Pending Review',
  },
  {
    documentNumber: '5.4.1.11',
    documentName: 'Compliance_Checklist.Pdf',
    documentLead: 'Hassan Al-Qahtani',
    documentPreparer: 'Hassan Al-Qahtani',
    date: '2025-08-09',
    dueDate: '2025-09-01',
    status: 'Approved',
  },
  {
    documentNumber: '5.4.1.12',
    documentName: 'Change_Management_Strategy.Docx',
    documentLead: 'Aisha Al-Shammari',
    documentPreparer: 'Aisha Al-Shammari',
    date: '2025-08-10',
    dueDate: '2025-09-05',
    status: 'Pending Review',
  },
  {
    documentNumber: '5.4.1.13',
    documentName: 'Training_Materials_Compilation.Pdf',
    documentLead: 'Majed Al-Otaibi',
    documentPreparer: 'Majed Al-Otaibi',
    date: '2025-08-11',
    dueDate: '2025-09-08',
    status: 'Approved',
  },
  {
    documentNumber: '5.4.1.14',
    documentName: 'Quality_Assurance_Report.Xlsx',
    documentLead: 'Reem Al-Fahad',
    documentPreparer: 'Reem Al-Fahad',
    date: '2025-08-12',
    dueDate: '2025-09-10',
    status: 'Pending Review',
  },
  {
    documentNumber: '5.4.1.15',
    documentName: 'Final_Review_Document.Pdf',
    documentLead: 'Tariq Al-Mazrouei',
    documentPreparer: 'Tariq Al-Mazrouei',
    date: '2025-08-13',
    dueDate: '2025-09-12',
    status: 'Rejected',
  },
];

export const EVIDENCE_TABLE_COLUMNS: TableColumn[] = [
  { key: 'documentNumber', label: 'Document Number', sortable: true },
  { key: 'documentName', label: 'Document Name', sortable: true },
  { key: 'documentLead', label: 'Document Lead', sortable: true },
  { key: 'documentPreparer', label: 'Document Preparer', sortable: true },
  { key: 'date', label: 'Date', sortable: true },
  { key: 'dueDate', label: 'Due Date', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
];

export const INITIAL_COMMENTS: Comment[] = [
  {
    id: '1',
    userName: 'Sara Ibrahim',
    userInitial: 'E',
    comment: 'Ensure The Plan Includes A Clear Governance Model.',
    date: '2025-08-05',
  },
  {
    id: '2',
    userName: 'Mona Hamed',
    userInitial: 'M',
    comment: 'Ensure The Plan Includes A Clear Governance Model.',
    date: '2025-08-05',
  },
];

export const RECENT_ACTIVITIES_DATA: Activity[] = [
  {
    id: 1,
    description: "Document 'Strategy_Review.Pdf' Was Uploaded By Ahmed Khaled",
    timestamp: '5 Mins Ago',
  },
  {
    id: 2,
    description: "Task 'Review Compliance Files' Was Assigned To Mona Hamed",
    timestamp: '20 Mins Ago',
  },
  {
    id: 3,
    description: "New Criterion '5.3 Digital Identity' Was Created By Admin",
    timestamp: '1 Hour Ago',
  },
];

export const PROGRESS_STATUS_DATA: MainCategory[] = [
  {
    title: 'Strategy And Planning',
    percentage: '97.78%',
    subCategories: [
      {
        title: 'Digital Transformation',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
        ],
      },
      {
        title: 'Digital Governance',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'in-progress' },
        ],
      },
      {
        title: 'Enterprise Architecture',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
        ],
      },
    ],
  },
  {
    title: 'Organization And Culture',
    percentage: '70.83%',
    subCategories: [
      {
        title: 'Digital Culture And Environment',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'in-progress' },
          { id: 3, status: 'in-progress' },
        ],
      },
      {
        title: 'Leadership Development',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
        ],
      },
      {
        title: 'Skills & Capacity Building',
        items: [
          { id: 1, status: 'in-progress' },
          { id: 2, status: 'in-progress' },
          { id: 3, status: 'in-progress' },
        ],
      },
    ],
  },
  {
    title: 'Operations And Execution',
    percentage: '80.00%',
    subCategories: [
      {
        title: 'Business Processes',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'in-progress' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
        ],
      },
    ],
  },
  {
    title: 'Business Continuity',
    percentage: '90.59%',
    subCategories: [
      {
        title: 'Risk Management',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
          { id: 5, status: 'completed' },
        ],
      },
      {
        title: 'Business Continuity',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'partially-uploaded' },
          { id: 4, status: 'completed' },
          { id: 5, status: 'completed' },
          { id: 6, status: 'completed' },
          { id: 7, status: 'completed' },
        ],
      },
    ],
  },
  {
    title: 'Information Technology',
    percentage: '75.00%',
    subCategories: [
      {
        title: 'Support Systems',
        items: [
          { id: 1, status: 'fully-uploaded' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
          { id: 5, status: 'completed' },
        ],
      },
      {
        title: 'IT Infrastructure',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
          { id: 5, status: 'partially-uploaded' },
          { id: 6, status: 'completed' },
          { id: 7, status: 'completed' },
        ],
      },
      {
        title: 'Cloud Infrastructure',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
        ],
      },
    ],
  },
  {
    title: 'Comprehensive Governance',
    percentage: '64.44%',
    subCategories: [
      {
        title: 'Governance Platforms',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'partially-uploaded' },
          { id: 5, status: 'completed' },
          { id: 6, status: 'completed' },
          { id: 7, status: 'completed' },
          { id: 8, status: 'completed' },
          { id: 9, status: 'completed' },
        ],
      },
    ],
  },
  {
    title: 'Channels And Services',
    percentage: '100%',
    subCategories: [
      {
        title: 'Service Quality',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
        ],
      },
      {
        title: 'Digital Channels',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
        ],
      },
    ],
  },
  {
    title: 'Beneficiary Centralization',
    percentage: '60.00%',
    subCategories: [
      {
        title: 'User Engagement',
        items: [
          { id: 1, status: 'in-progress' },
          { id: 2, status: 'in-progress' },
          { id: 3, status: 'in-progress' },
          { id: 4, status: 'completed' },
        ],
      },
      {
        title: 'User Relationship',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'in-progress' },
        ],
      },
      {
        title: 'User Experience',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'in-progress' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'in-progress' },
          { id: 5, status: 'completed' },
        ],
      },
    ],
  },
  {
    title: 'Government Data',
    percentage: '87.50%',
    subCategories: [
      {
        title: 'Data Governance',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'in-progress' },
        ],
      },
      {
        title: 'Data Usage & Availability',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'in-progress' },
        ],
      },
      {
        title: 'Open Data',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'in-progress' },
        ],
      },
    ],
  },
  {
    title: 'Research And Innovation',
    percentage: '17.65%',
    subCategories: [
      {
        title: 'Innovation',
        items: [
          { id: 1, status: 'delayed' },
          { id: 2, status: 'delayed' },
          { id: 3, status: 'delayed' },
          { id: 4, status: 'delayed' },
        ],
      },
      {
        title: 'Creative Solutions',
        items: [
          { id: 1, status: 'in-progress' },
          { id: 2, status: 'delayed' },
        ],
      },
    ],
  },
];