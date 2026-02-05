import { EvidenceTable } from './EvidenceTable';
import { Comments } from './Comments';
import { RecentActivities } from '../../common/RecentActivities';
import { RECENT_ACTIVITIES_DATA } from '../../../utils/constants';

export const EvidenceTab = () => {
  return (
    <div className="flex flex-col gap-4">
      <EvidenceTable />
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        <Comments />
        <RecentActivities data={RECENT_ACTIVITIES_DATA} />
      </div>
    </div>
  );
};
