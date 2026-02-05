import { useEffect, useState, useRef, useMemo } from 'react';
import {
  TIMELINE_STEPS_2024,
  TIMELINE_STEPS_2025,
  TIMELINE_STEPS_2026,
  FILE_STATS_DATA_2024,
  FILE_STATS_DATA_2025,
  FILE_STATS_DATA_2026,
  PROGRESS_STATUS_DATA_2024,
  PROGRESS_STATUS_DATA_2025,
  PROGRESS_STATUS_DATA_2026,
  YEARLY_PERFORMANCE_DATA_2024,
  YEARLY_PERFORMANCE_DATA_2025,
  YEARLY_PERFORMANCE_DATA_2026,
  RECENT_ACTIVITIES_DATA_2024,
  RECENT_ACTIVITIES_DATA_2025,
  RECENT_ACTIVITIES_DATA_2026,
  COMPLIANCE_SCORE_2024,
  COMPLIANCE_SCORE_2025,
  COMPLIANCE_SCORE_2026,
  AUDIT_READINESS_2024,
  AUDIT_READINESS_2025,
  AUDIT_READINESS_2026,
  TOP_LEADERS_2024,
  TOP_LEADERS_2025,
  TOP_LEADERS_2026,
} from './constants';
import type {
  TimelineStep,
  MainCategory,
  YearlyPerformanceData,
  Activity,
  Leader,
} from './types';
import type { FileStatItem } from '../components/common/FileStats';

export const useCountAnimation = (end: number): number => {
  const [count, setCount] = useState(0);
  const requestRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);
  const endRef = useRef(end);

  // Update end ref when end changes
  useEffect(() => {
    endRef.current = end;
  }, [end]);

  useEffect(() => {
    // Cancel any ongoing animation
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    
    // Reset count and startTime when end value changes
    startTimeRef.current = undefined;

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
        setCount(0);
      }

      const progress = (currentTime - startTimeRef.current) / 500;
      const animatedValue = Math.min(progress, 1) * endRef.current;

      setCount(animatedValue);

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        // Ensure we end exactly at the target value
        setCount(endRef.current);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [end]);

  return parseFloat(count.toFixed(2)); // Ensure consistent decimal places
};

export const useTimelineData = (year: string): TimelineStep[] => {
  return useMemo(() => {
    switch (year) {
      case '2024':
        return TIMELINE_STEPS_2024;
      case '2025':
        return TIMELINE_STEPS_2025;
      case '2026':
      default:
        return TIMELINE_STEPS_2026;
    }
  }, [year]);
};

export const useFileStatsData = (year: string): FileStatItem[] => {
  return useMemo(() => {
    switch (year) {
      case '2024':
        return FILE_STATS_DATA_2024;
      case '2025':
        return FILE_STATS_DATA_2025;
      case '2026':
      default:
        return FILE_STATS_DATA_2026;
    }
  }, [year]);
};

export const useProgressStatusData = (year: string): MainCategory[] => {
  return useMemo(() => {
    switch (year) {
      case '2024':
        return PROGRESS_STATUS_DATA_2024;
      case '2025':
        return PROGRESS_STATUS_DATA_2025;
      case '2026':
      default:
        return PROGRESS_STATUS_DATA_2026;
    }
  }, [year]);
};

export const useYearlyPerformanceData = (year: string): YearlyPerformanceData[] => {
  return useMemo(() => {
    switch (year) {
      case '2024':
        return YEARLY_PERFORMANCE_DATA_2024;
      case '2025':
        return YEARLY_PERFORMANCE_DATA_2025;
      case '2026':
      default:
        return YEARLY_PERFORMANCE_DATA_2026;
    }
  }, [year]);
};

export const useRecentActivitiesData = (year: string): Activity[] => {
  return useMemo(() => {
    switch (year) {
      case '2024':
        return RECENT_ACTIVITIES_DATA_2024;
      case '2025':
        return RECENT_ACTIVITIES_DATA_2025;
      case '2026':
      default:
        return RECENT_ACTIVITIES_DATA_2026;
    }
  }, [year]);
};

export const useComplianceScoreData = (year: string) => {
  return useMemo(() => {
    switch (year) {
      case '2024':
        return COMPLIANCE_SCORE_2024;
      case '2025':
        return COMPLIANCE_SCORE_2025;
      case '2026':
      default:
        return COMPLIANCE_SCORE_2026;
    }
  }, [year]);
};

export const useAuditReadinessData = (year: string) => {
  return useMemo(() => {
    switch (year) {
      case '2024':
        return AUDIT_READINESS_2024;
      case '2025':
        return AUDIT_READINESS_2025;
      case '2026':
      default:
        return AUDIT_READINESS_2026;
    }
  }, [year]);
};

export const useTopLeadersData = (year: string): Leader[] => {
  return useMemo(() => {
    switch (year) {
      case '2024':
        return TOP_LEADERS_2024;
      case '2025':
        return TOP_LEADERS_2025;
      case '2026':
      default:
        return TOP_LEADERS_2026;
    }
  }, [year]);
};
