import { Section } from '../../Section';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface AuditReadinessProps {
  score: number;
  label: string;
  overdueStds: number;
  missingEvidence: number;
}

export const AuditReadiness = ({ score, label, overdueStds, missingEvidence }: AuditReadinessProps) => {
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
              value={score}
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
            <span className="text-[44px] font-bold text-primary-dark-blue">
              {score}%
            </span>
            <span className="text-sm text-gray-text mt-2">
              {label}
            </span>
          </div>
        </div>
        
        {/* Separator */}
        <div className="w-full border-t border-gray-border my-8"></div>
        
        {/* Metrics */}
        <div className="flex justify-around w-full">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary-dark-blue">
              {overdueStds}
            </span>
            <span className="text-sm text-gray-text mt-1">
              Overdue Stds
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary-dark-blue">
              {missingEvidence}
            </span>
            <span className="text-sm text-gray-text mt-1">
              Missing Evidence
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};
