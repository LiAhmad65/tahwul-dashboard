import { useNavigate } from 'react-router-dom';
import { StatusMap } from './StatusMap';
import { ProgressCard } from './StatusMap/ProgressCard';
import type { MainCategory } from '../../../utils/types';

interface ProgressStatusProps {
  data: MainCategory[];
}

export const ProgressStatus = ({ data }: ProgressStatusProps) => {
  const navigate = useNavigate();

  const handleStrategyPlanningClick = () => {
    navigate('/dashboard/strategic-planning');
  };

  // Add onPress to the first category
  const dataWithOnPress = data.map((category, index) => {
    if (index === 0) {
      return { ...category, onPress: handleStrategyPlanningClick };
    }
    return category;
  });

  return (
    <div className="bg-white border border-gray-border py-6 px-4 rounded-[10px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-bold text-primary-dark-blue">Progress Status</h2>
        <StatusMap />
      </div>
      <div className="grid grid-cols-10 gap-3 items-start">
        {dataWithOnPress.map((category) => (
          <div key={category.title} className="flex flex-col gap-3 h-full">
            <ProgressCard
              title={category.title}
              percentage={category.percentage}
              items={[]}
              isMainCategory={true}
              onPress={category.onPress}
            />
            {category.subCategories.map((subCategory) => (
              <ProgressCard
                key={subCategory.title}
                title={subCategory.title}
                items={subCategory.items}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
