import { Section } from '../../common/Section';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useComplianceScoreData, useCountAnimation } from '../../../utils/hooks';
import { useYear } from '../../../contexts/YearContext';

export const ComplianceScore = () => {
  const { selectedYear } = useYear();
  const { score, label } = useComplianceScoreData(selectedYear);
  const animatedScore = useCountAnimation(score);
  return (
    <Section title="Overall Compliance Score">
      <div className="flex flex-col items-center justify-center py-6">
        <div className="relative w-full flex items-center justify-center">
          <div
            className="absolute"
            style={{
              transform: 'rotate(0.75turn)',
              top:1
            }}
          >
            <CircularProgressbar
              value={animatedScore}
              circleRatio={0.5}
              strokeWidth={5}
              styles={buildStyles({
                pathColor: '#DB1F26',
                trailColor: '#F5F8FB',
                strokeLinecap: 'round',
                pathTransitionDuration: 0.5,
                rotation: 0,
              })}
            />
          </div>
          <div className="relative z-10 mt-15 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-[44px] font-bold text-primary-dark-blue">
              {animatedScore}%
            </span>
            <span className="text-sm text-gray-text mt-2">
              {label}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};
