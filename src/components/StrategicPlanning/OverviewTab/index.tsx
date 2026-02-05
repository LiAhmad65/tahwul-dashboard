import { Details } from './Details';
import { Leaders } from './Leaders';

export const OverviewTab = () => {
  return (
    <div className="flex flex-col gap-4">
      <Details />
      <Leaders />
    </div>
  );
};
