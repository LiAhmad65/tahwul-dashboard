import { ProjectTimeline } from '../../components/Dashboard/ProjectTimeline';
import { FileStats } from '../../components/common/FileStats';
import { ProgressStatus } from '../../components/Dashboard/ProgressStatus';
import { ComplianceScore } from '../../components/Dashboard/ComplianceScore';
import { TopPerformingLeaders } from '../../components/Dashboard/TopPerformingLeaders';
import { RecentActivities } from '../../components/common/RecentActivities';
import { YearlyPerformance } from '../../components/Dashboard/YearlyPerformance';
import { AuditReadiness } from '../../components/Dashboard/AuditReadiness';

export const Dashboard = () => {
  return (
    <div className="py-4 px-6 bg-page-bg min-h-full w-full">
      <div className="flex flex-col gap-4">
        <ProjectTimeline />
        <FileStats />
        <ProgressStatus />
        <div className='w-full grid grid-cols-3 gap-4'>
          <ComplianceScore />
          <TopPerformingLeaders />
          <RecentActivities />
        </div>
        <div className='w-full grid grid-cols-3 gap-4'>
          <div className="col-span-2">
            <YearlyPerformance />
          </div>
          <AuditReadiness />
        </div>
      </div>
    </div>
  );
};
