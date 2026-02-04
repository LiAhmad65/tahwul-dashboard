import { Section } from '../../Section';

interface Activity {
  id: number;
  description: string;
  timestamp: string;
}

const activities: Activity[] = [
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

export const RecentActivities = () => {
  return (
    <Section title="Recent Activities">
      <div className="max-h-[300px] overflow-y-auto">
        <div className="flex flex-col">
          {activities.map((activity) => (
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
