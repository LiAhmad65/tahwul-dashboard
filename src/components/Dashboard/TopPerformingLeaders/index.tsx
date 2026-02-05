import { Section } from '../../common/Section';
import staticAvatar from '../../../assets/images/static-avatar.jpg';
import { useTopLeadersData, useCountAnimation } from '../../../utils/hooks';
import { useYear } from '../../../contexts/YearContext';
import type { Leader } from '../../../utils/types';

const LeaderItem = ({ leader, showBorder }: { leader: Leader; showBorder: boolean }) => {
  const animatedScore = useCountAnimation(leader.score);
  
  return (
    <div>
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
          {animatedScore}%
        </span>
      </div>
      {showBorder && (
        <div className="border-t border-gray-border" />
      )}
    </div>
  );
};

export const TopPerformingLeaders = () => {
  const { selectedYear } = useYear();
  const leaders = useTopLeadersData(selectedYear);

  return (
    <Section title="Top Performing Perspective Leaders">
      <div className="max-h-[300px] overflow-y-auto">
        <div className="flex flex-col">
          {leaders.map((leader, index) => (
            <LeaderItem 
              key={leader.id} 
              leader={leader} 
              showBorder={index < leaders.length - 1} 
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
