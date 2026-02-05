import { Section } from '../../common/Section';
import staticAvatar from '../../../assets/images/static-avatar.jpg';

interface Leader {
  id: number;
  name: string;
  perspective: string;
  score: number;
}

const leaders: Leader[] = [
  { id: 1, name: 'Ahmed Al-Ali', perspective: 'Strategy Perspective', score: 96 },
  { id: 2, name: 'Sarah Al-Khaled', perspective: 'Beneficiary Perspective', score: 94 },
  { id: 3, name: 'Mohammad Al-Mansour', perspective: 'IT Perspective', score: 92 },
];

export const TopPerformingLeaders = () => {
  return (
    <Section title="Top Performing Perspective Leaders">
      <div className="max-h-[300px] overflow-y-auto">
        <div className="flex flex-col">
          {leaders.map((leader, index) => (
            <div key={leader.id}>
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3 flex-1">
                  <img
                    src={staticAvatar}
                    alt={leader.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-base font-medium text-primary-dark-blue">
                      {leader.name}
                    </span>
                  <span className="text-sm font-normal text-gray-text">
                      {leader.perspective}
                    </span>
                  </div>
                </div>
                <span className="text-base font-bold text-primary-dark-blue">
                  {leader.score}%
                </span>
              </div>
              {index < leaders.length - 1 && (
                <div className="border-t border-gray-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
