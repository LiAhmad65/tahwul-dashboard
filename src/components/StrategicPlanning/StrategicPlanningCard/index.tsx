import { Section } from '../../common/Section';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const StrategicPlanningCard = () => {
  return (
    <Section>
      <div className="w-full flex items-center ">
        <div className='w-full flex flex-col'>
        {/* Tag */}
        <div className="inline-flex p-3 w-fit rounded-full border border-gray-border bg-white mb-2">
          <span className="text-gray-text text-sm">
            Strategy & Planning
          </span>
        </div>

        {/* Title and Progress Circle */}
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-primary-dark-blue mb-2">
              Digital Transformation Strategic Planning
            </h2>
            <p className="text-gray-text">
              Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals
            </p>
          </div>
          </div>
        </div>
        {/* Circular Progress */}
        <div className="flex flex-col h-full relative ">
        <div className="w-28 h-28">
        <CircularProgressbar
            value={100}
            styles={buildStyles({
            pathColor: '#1EA54E',
            trailColor: '#E5E7EB',
            strokeLinecap: 'round',
            })}
            strokeWidth={8}
        />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-lg font-bold text-primary-dark-blue">100%</span>
        </div>
        </div> 
      </div>
    </Section>
  );
};
