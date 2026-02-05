import { Section } from '../../../common/Section';
import staticAvatar from '../../../../assets/images/static-avatar.jpg';

interface Leader {
  name: string;
  role: string;
  avatar?: string;
}

interface LeadersProps {
  leaders?: Leader[];
}

const defaultLeaders: Leader[] = [
  { name: 'Ahmed Al-Ali', role: 'Strategy Perspective', avatar: staticAvatar },
  { name: 'Ahmed Al-Ali', role: 'Strategy Perspective', avatar: staticAvatar },
];

export const Leaders = ({ leaders = defaultLeaders }: LeadersProps) => {
  return (
    <Section title="Leaders">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="bg-gray-bg rounded-[10px] p-2 flex items-center gap-3"
          >
            {leader.avatar ? (
              <img
                src={leader.avatar}
                alt={leader.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600 font-medium">
                  {leader.name.charAt(0)}
                </span>
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-base font-medium text-primary-dark-blue">
                {leader.name}
              </span>
              <span className="text-base font-medium text-gray-text">{leader.role}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
