import { Box, LinearProgress, Typography } from '@mui/material';
import { Dropdown } from '../../common/Dropdown';
import { Section } from '../../common/Section';
import { TIMELINE_STATUS_COLOR } from '../../../utils/constants';
import { TimelineStepStatus } from '../../../utils/types';
import { useTimelineData } from '../../../utils/hooks';
import { useYear } from '../../../contexts/YearContext';

export const ProjectTimeline = () => {
  const { selectedYear, setSelectedYear } = useYear();
  const data = useTimelineData(selectedYear);

  const yearOptions = [
    { value: '2026', label: '2026' },
    { value: '2025', label: '2025' },
    { value: '2024', label: '2024' },
  ];

  const completedCount = data.filter(s => s.status === TimelineStepStatus.COMPLETED).length;
  // When all steps are completed, show 100%, otherwise calculate based on completed count
  const progressPercent = completedCount === data.length 
    ? 100 
    : data.length > 1 
      ? (completedCount / (data.length - 1)) * 100 
      : 0;

  return (
    <Section>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-bold text-primary-dark-blue">Project Timeline</h2>
        <Dropdown
          options={yearOptions}
          value={selectedYear}
          onChange={(value) => setSelectedYear(String(value))}
        />
      </div>

      {/* Progress Bar with Dots */}
      <Box sx={{ width: '100%', mb: 4, position: 'relative' }}>
        <LinearProgress
          variant="determinate"
          value={progressPercent}
          sx={{
            height: 8,
            borderRadius: 4,
            backgroundColor: '#f1f5f9',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#22c55e',
            },
          }}
        />
        
        {/* Dots positioned on the progress bar */}
        {data.map((step, index) => {
          const positionPercent = (index / (data.length - 1)) * 100;
          const isCompleted = step.status === TimelineStepStatus.COMPLETED;
          const dotColor = isCompleted ? '#ffffff' : TIMELINE_STATUS_COLOR[step.status];
          const dotBorder = isCompleted ? '2px solid #22c55e' : 'none';
          
          return (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                top: '50%',
                left: `${positionPercent}%`,
                transform: 'translate(-50%, -50%)',
                width: isCompleted ? 16 : 12,
                height: isCompleted ? 16 : 12,
                borderRadius: '50%',
                backgroundColor: dotColor,
                border: dotBorder,
                zIndex: 1,
              }}
            />
          );
        })}
      </Box>

      {/* Labels below progress bar */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          mt: 2,
          minHeight: '60px',
        }}
      >
        {data.map((step, index) => {
          const positionPercent = (index / (data.length - 1)) * 100;
          const isFirst = index === 0;
          const isLast = index === data.length - 1;
          
          return (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                left: `${positionPercent}%`,
                transform: isFirst ? 'translateX(0)' : isLast ? 'translateX(-100%)' : 'translateX(-50%)',
                textAlign: isFirst ? 'left' : isLast ? 'right' : 'center',
                width: '120px',
                maxWidth: '120px',
              }}
            >
              {/* Date */}
              <Typography variant="caption" sx={{ color: '#8597A8', display: 'block', mb: 0.5 }}>
                {step.date}
              </Typography>

              {/* Label */}
              <Typography variant="body2" sx={{ fontWeight: 500, color: '#1D3557' }}>
                {step.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Section>
  );
};
