import { ProjectTimeline } from '../../components/Dashboard/ProjectTimeline';
import { FileStats } from '../../components/common/FileStats';
import { ProgressStatus } from '../../components/Dashboard/ProgressStatus';
import { ComplianceScore } from '../../components/Dashboard/ComplianceScore';
import { TopPerformingLeaders } from '../../components/Dashboard/TopPerformingLeaders';
import { RecentActivities } from '../../components/common/RecentActivities';
import { YearlyPerformance } from '../../components/Dashboard/YearlyPerformance';
import { AuditReadiness } from '../../components/Dashboard/AuditReadiness';
import { FILE_STATS_DATA, RECENT_ACTIVITIES_DATA, PROGRESS_STATUS_DATA } from '../../utils/constants';

export const Dashboard = () => {
  return (
    <div className="py-4 px-6 bg-page-bg min-h-full w-full">
      <div className="flex flex-col gap-4">
        <ProjectTimeline />
        <FileStats data={FILE_STATS_DATA} />
        <ProgressStatus data={PROGRESS_STATUS_DATA} />
        <div className='w-full grid grid-cols-3 gap-4'>
          <ComplianceScore score={50} label="Basic Standards 2025" />
          <TopPerformingLeaders />
          <RecentActivities data={RECENT_ACTIVITIES_DATA} />
        </div>
        <div className='w-full grid grid-cols-3 gap-4'>
          <div className="col-span-2">
            <YearlyPerformance />
          </div>
          <AuditReadiness score={80} label="Readiness Level" overdueStds={12} missingEvidence={5} />
        </div>
      </div>
    </div>
  );
};
