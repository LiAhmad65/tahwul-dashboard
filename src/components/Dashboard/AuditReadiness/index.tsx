import { Section } from '../../common/Section';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useAuditReadinessData, useCountAnimation } from '../../../utils/hooks';
import { useYear } from '../../../contexts/YearContext';

export const AuditReadiness = () => {
  const { selectedYear } = useYear();
  const { score, label, overdueStds, missingEvidence } = useAuditReadinessData(selectedYear);
  const animatedScore = useCountAnimation(score);
  const animatedOverdueStds = useCountAnimation(overdueStds);
  const animatedMissingEvidence = useCountAnimation(missingEvidence);
  return (
    <Section title="Audit Readiness">
      <div className="flex flex-col items-center justify-center py-6">
        <div className="relative w-full flex items-center justify-center">
          <div
            className="absolute"
            style={{
              transform: 'rotate(0.75turn)',
              top: 1,
            }}
          >
            <CircularProgressbar
              value={animatedScore}
              circleRatio={0.5}
              strokeWidth={5}
              styles={buildStyles({
                pathColor: '#1EA54E',
                trailColor: '#F5F8FB',
                strokeLinecap: 'round',
                pathTransitionDuration: 0.5,
                rotation: 0,
              })}
            />
          </div>
          <div className="relative z-10 mt-15 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-primary-dark-blue" style={{ wordBreak: 'break-word' }}>
              {animatedScore}%
            </span>
            <span className="text-xs sm:text-sm text-gray-text mt-2 text-center" style={{ wordBreak: 'break-word' }}>
              {label}
            </span>
          </div>
        </div>
        
        {/* Separator */}
        <div className="w-full border-t border-gray-border my-8"></div>
        
        {/* Metrics */}
        <div className="flex justify-around w-full flex-wrap gap-4">
          <div className="flex flex-col items-center min-w-0">
            <span className="text-2xl sm:text-3xl font-bold text-primary-dark-blue" style={{ wordBreak: 'break-word' }}>
              {animatedOverdueStds}
            </span>
            <span className="text-xs sm:text-sm text-gray-text mt-1 text-center" style={{ wordBreak: 'break-word' }}>
              Overdue Stds
            </span>
          </div>
          <div className="flex flex-col items-center min-w-0">
            <span className="text-2xl sm:text-3xl font-bold text-primary-dark-blue" style={{ wordBreak: 'break-word' }}>
              {animatedMissingEvidence}
            </span>
            <span className="text-xs sm:text-sm text-gray-text mt-1 text-center" style={{ wordBreak: 'break-word' }}>
              Missing Evidence
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};
