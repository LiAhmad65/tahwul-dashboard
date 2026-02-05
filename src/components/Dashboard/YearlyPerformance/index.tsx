import { Section } from '../../common/Section';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { YEARLY_PERFORMANCE_DATA } from '../../../utils/constants';

export const YearlyPerformance = () => {
  return (
    <Section title="12-Month Performance">
      <div className="py-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={YEARLY_PERFORMANCE_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0078D7" stopOpacity={1} />
                <stop offset="100%" stopColor="#0078D7" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              dataKey="month" 
              tick={{ fill: '#8597A8', fontSize: 12 }}
              axisLine={{ stroke: '#E0E8ED' }}
            />
            <YAxis 
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              tick={{ fill: '#8597A8', fontSize: 12 }}
              axisLine={{ stroke: '#E0E8ED' }}
            />
            <Bar 
              dataKey="value" 
              fill="url(#colorValue)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
};
