import { ICONS } from './icons';

export const NAV_OPTIONS = [
  { id: 'dashboard', name: 'Dashboard', icon: ICONS?.homeIcon, route: '/dashboard' },
  { id: 'perspectives', name: 'Perspectives', icon: ICONS?.statsIcon, route: '/perspectives' },
  { id: 'tasks', name: 'Tasks', icon: ICONS?.tasksIcon, route: '/tasks' },
  { id: 'documents', name: 'Documents', icon: ICONS?.documentIcon, route: '/documents' },
  { id: 'reports', name: 'Reports', icon: ICONS?.reportsIcon, route: '/reports' },
  { id: 'users-roles', name: 'Users & Roles', icon: ICONS?.peopleIcon, route: '/users-roles' },
];
