import { Section } from '../Section';
import type { Activity } from '../../../utils/types';

interface RecentActivitiesProps {
  data: Activity[];
}

export const RecentActivities = ({ data }: RecentActivitiesProps) => {
  return (
    <Section title="Recent Activities">
      <div className="max-h-[300px] overflow-y-auto">
        <div className="flex flex-col">
          {data?.map((activity) => (
            <div key={activity.id}>
              <div className="flex items-start justify-between py-4 border-t border-gray-border">
                <div className="flex items-start gap-[9px] flex-1">
                  <div className="w-[6px] h-[6px] rounded-full bg-red-timeline mt-2 shrink-0"></div>
                  <span className="text-base font-medium text-primary-dark-blue">
                    {activity.description}
                  </span>
                </div>
                <span className="text-xs font-normal text-gray-text ml-4 shrink-0">
                  {activity.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
