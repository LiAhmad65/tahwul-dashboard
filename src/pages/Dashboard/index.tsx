import { ProjectTimeline } from '../../components/Dashboard/ProjectTimeline';
import { FileStats } from '../../components/Dashboard/FileStats';
import type { FileStatItem } from '../../components/Dashboard/FileStats';

export const Dashboard = () => {
  const fileStatsData: FileStatItem[] = [
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

  return (
    <div className="py-4 px-6 bg-page-bg min-h-full w-full">
      <div className="flex flex-col gap-4">
        <ProjectTimeline />
        <FileStats data={fileStatsData} />
      </div>
    </div>
  );
};
