import { ICONS } from '../../../utils/icons';
import { useNavigate } from 'react-router-dom';
import { StrategicPlanningCard } from '../../../components/StrategicPlanning/StrategicPlanningCard';
import { FileStats } from '../../../components/common/FileStats';
import type { FileStatItem } from '../../../components/common/FileStats';
import { Tabs } from '../../../components/common/Tabs';
import type { TabItem } from '../../../components/common/Tabs';
import { OverviewTab } from '../../../components/StrategicPlanning/OverviewTab';
import { EvidenceTab } from '../../../components/StrategicPlanning/EvidenceTab';
import { useState } from 'react';

const evidenceData: FileStatItem[] = [
  {
    type: 'total-evidence',
    value: 4,
    label: 'Total Evidence',
  },
  {
    type: 'under-review-evidence',
    value: 3,
    label: 'Under Review Evidence',
  },
  {
    type: 'in-progress-evidence',
    value: 2,
    label: 'In Progress Evidence',
  },
  {
    type: 'completed-evidence',
    value: 1,
    label: 'Completed Evidence',
  },
];

const tabsData: TabItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'evidence', label: 'Evidence' },
];

export const StrategicPlanning = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<string>('overview')
  const handleBack=()=>{
    return navigate(-1);
  }

  const onTabChange=(id:string)=>{
    setSelectedTab(id)
  }

  return (
    <div className="py-4 px-6 bg-page-bg min-h-full w-full">
      <div className="flex items-center gap-4 pb-4  bg-page-bg cursor-pointer" onClick={handleBack}>
            <img src={ICONS.arrowLeftIcon} alt="Back" className="w-5 h-5" />
          <h1 className="text-base font-bold text-primary-dark-blue">
            Digital Transformation Strategic Planning
          </h1>
        </div>
      <div className="w-full  flex flex-col gap-4">
        <StrategicPlanningCard />
        <FileStats data={evidenceData} cols={4} iconPosition="left" />
        <Tabs tabs={tabsData} defaultActiveTab="overview" onChange={(tabId)=>onTabChange(tabId)}/>
        {selectedTab === 'overview' ? <OverviewTab /> : <EvidenceTab />}
      </div>
    </div>
  );
};
